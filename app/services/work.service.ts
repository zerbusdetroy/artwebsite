import {WORKS} from '../mock/mock-works';
import {Injectable} from 'angular2/core';

@Injectable()
export class WorkService {

	getWorks() {
		return WORKS;
	}
}