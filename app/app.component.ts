import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.html',
  styleUrls: ['app/app.css'],
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  {path: '/',   name: 'Home',     component: HomeComponent},
  {path: '/gallery',   name: 'Gallery',     component: GalleryComponent}
])
export class AppComponent { }
