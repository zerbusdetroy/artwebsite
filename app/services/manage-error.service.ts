import {Injectable}     from 'angular2/core';


@Injectable()
export class ManageErrorService {

	constructor() {
		this.errorMessageList = [];
	}
	
	errorMessageList: String[];

	addMessage(errorMessage: String){
		this.errorMessageList.push(errorMessage);
	}

	removeMessage(id: number){
		this.errorMessageList.splice(id, 1);
	}
}