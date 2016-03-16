import {Component, OnInit, Injectable} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from '../../../node_modules/ng2-file-upload/ng2-file-upload';


import {WorkService} from '../../services/work.service';
import {GroupService} from '../../services/group.service';
import {ManageErrorService} from '../../services/manage-error.service';
import {Work} from '../../models/work';
import {Group} from '../../models/group';

// const URL = '/api/';
const URL = '/api/works/test';

/**
 * Overri
 */
class FileUploaderImproved extends FileUploader {

	constructor(
		private _manageErrorService: ManageErrorService, private pictures: String[], public options: any) {
		super(options);
		this.queueLimit = 100;
	}

	onCompleteItem(item: any, response: any, status: any, headers: any) {
		let resJson = JSON.parse(response);
		if (resJson.error) {
			this._manageErrorService.addMessage(<any>resJson.error);
		}
		else {
			if(resJson.file){
				resJson.file.forEach(e => this.pictures.push(e.filename));
			}
		}
	}
}

@Component({
    templateUrl: '/app/admin/addwork/addwork.html',
    styleUrls: ['app/admin/addwork/addwork.css'],
	directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AddWorkComponent implements OnInit{





    constructor(
		private _workService: WorkService,
		private _groupService: GroupService,
		private _manageErrorService: ManageErrorService) { }

    work : Work;
	errorMessage : string;

	title: string;
	description: string;
	types: [string];
	pictures: String[];
	minpic : string;

	groups: Group[];

	private uploader: FileUploaderImproved;
	private hasBaseDropZoneOver: boolean = false;
	private hasAnotherDropZoneOver: boolean = false;

	test(){
		console.log(this.uploader);
		this.pictures.forEach(e => console.log(e));
	}
	ngOnInit() {
		this.pictures = [];
		this.uploader = new FileUploaderImproved(this._manageErrorService, this.pictures, { url: URL, queueLimit: 999 });
		this._groupService.getGroups().subscribe(
			groups => this.groups = groups,
			error => this._manageErrorService.addMessage(<any>error));
	}

	private fileOverBase(e: any) {
		this.hasBaseDropZoneOver = e;
	}

	private fileOverAnother(e: any) {
		this.hasAnotherDropZoneOver = e;
	}
	addWork (title: string, description: string, types: [string], groups: [string], pictures: [string], minpic: string) {
	  if (!title) {return;}
	  this._workService.addWork(title, description, types, groups, pictures, minpic)
	                   .subscribe(
	                     work  => this.work = work,
	                     error =>  this.errorMessage = <any>error);
	}
}