import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {WorkService} from './services/work.service';
import {AddWorkComponent} from './admin/addwork/addwork.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.html',
  styleUrls: ['app/app.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [WorkService]
})
@RouteConfig([
  {path: '/',   name: 'Home',     component: HomeComponent},
  {path: '/gallery',   name: 'Gallery',     component: GalleryComponent},
  	// TOO Add an admin component here instead of going directly to addwork
    {path: '/admin/addwork',   name: 'AddWork',     component: AddWorkComponent}
])
export class AppComponent { 
	constructor(private _workService: WorkService) { }
}
