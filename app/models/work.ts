import {Picture} from './picture';


export interface Work {
	id: number;
	title: string;
    description: string;
    pictures: [Picture];
    minpic: Picture;
}