import {Component} from 'angular2/core';
import {Router}    from 'angular2/router';


@Component({
    templateUrl: '/app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css']
})
export class GalleryComponent {
    constructor(
        private _router: Router) { }
}