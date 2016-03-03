import {Picture} from './picture';


export interface Work {
	id: number;
	title: string;
    description: string;
    types : [string];
    groups : [string];
    pictures: [string];
    minpic: string;
};