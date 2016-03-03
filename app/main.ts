// Add all operators to Observable
// Todo : remove this import to include only necessary operators, see https://angular.io/docs/ts/latest/guide/server-communication.html
import 'rxjs/Rx';

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent}     from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
