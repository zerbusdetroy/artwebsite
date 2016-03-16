import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {} from 'angular2/http';
import {Work}           from '../models/work';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class WorkService {

		/* BEFORE
		getWorks() {
			return Promise.resolve(WORKS);
		}*/

	constructor (private http: Http) {}

	private _worksUrl = '/api/works';  // URL to web api

	/**
	 * Get all works frorm the server
	 */
	getWorks () {
		return this.http.get(this._worksUrl)
	  	.map(res => <Work[]> res.json())
	  	.do(data => console.log(data))
	  	.catch(this.handleError);
	}

	// TODO Change to handleError service
	private handleError (error: Response) {
	    // in a real world app, we may send the error to some remote logging infrastructure
	    // instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	}

	/**
	 * Save a work into the database
	 * TODO : add security to accept only admin users for this action
	 */
	addWork (title: string, description: string, types: [string], groups: [string], pictures: [string], minpic: string) : Observable<Work>  {

	   let body = JSON.stringify({ title, description, types, groups, pictures, minpic });
	   // TODO add pictures
	   let headers = new Headers({ 'Content-Type': 'application/json' });
	   let options = new RequestOptions({ headers: headers });

	   return this.http.post(this._worksUrl, body, options)
	                   .map(res =>  <Work> res.json().data)
	                   .catch(this.handleError)
	 }

}