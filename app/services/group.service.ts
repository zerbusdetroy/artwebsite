import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {} from 'angular2/http';
import {Group}           from '../models/group';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class GroupService {

	constructor(private http: Http) { }

	private _groupsUrl = '/api/groups';  // URL to web api

	/**
	 * Get all groups from the server
	 */
	getGroups() {
		return this.http.get(this._groupsUrl)
			.map(res => {
				let resFormated = res.json();
				if(resFormated.error){
					throw res;
				}
				return <Group[]>resFormated;
			})
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	// TODO Change to handleError service
	private handleError(error: Response) {
		// in a real world app, we may send the error to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	/**
	 * Save a work into the database
	 * TODO : add security to accept only admin users for this action
	 */
	addGroup(groupName: string): Observable<Group> {

		let body = JSON.stringify({ groupName });
		// TODO add pictures
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this._groupsUrl, body, options)
			.map(res => <Group>res.json().data)
			.catch(this.handleError)
	}

}