import {Component} from 'angular2/core';
import {WorkService} from '../../services/work.service';
import {Work} from '../../models/work';


@Component({
    templateUrl: '/app/admin/addwork/addwork.html'
})
export class AddWorkComponent {

    constructor(
		private _workService: WorkService) { }

    work : Work;
	errorMessage : string;

	title: string;
	description: string;
	types: [string];
	groups: [string];
	pictures: [string];
	minpic : string;


	addWork (title: string, description: string, types: [string], groups: [string], pictures: [string], minpic: string) {
	  if (!title) {return;}
	  this._workService.addWork(title, description, types, groups, pictures, minpic)
	                   .subscribe(
	                     work  => this.work = work,
	                     error =>  this.errorMessage = <any>error);
	}
}