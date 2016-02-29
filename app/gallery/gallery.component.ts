import {Component} from 'angular2/core';
import {Router}              from 'angular2/router';


@Component({
    templateUrl: '/app/gallery/gallery.html'
})
export class GalleryComponent {
    constructor(
        private _router: Router) { }
}