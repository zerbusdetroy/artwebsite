import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Work}           from '../models/work';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class WorkService {

		/* BEFORE
		getWorks() {
			return Promise.resolve(WORKS);
		}*/

	constructor (private http: Http) {}

	private _worksUrl = '/works';  // URL to web api

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

}