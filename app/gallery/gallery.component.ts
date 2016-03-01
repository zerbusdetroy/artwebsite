import {Component, OnInit} from 'angular2/core';
import {Router}    from 'angular2/router';
import {WorkService} from '../services/work.service';
import {Work} from '../models/work';
@Component({
    templateUrl: '/app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css']
})
export class GalleryComponent implements OnInit{

	works: Work[];
    constructor(
		private _workService: WorkService,
        private _router: Router) { }

    ngOnInit(){
		this.getWorks();
    }

    getWorks() {
		this._workService.getWorks().then(works => this.works = works);
	}
}