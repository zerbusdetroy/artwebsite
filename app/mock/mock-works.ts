import {Work} from '../models/work';
import {Picture} from '../models/picture';

var pic1 = { "id": 1, "link": 'public/img/63a.jpg' };
var pic2 = { "id": 2, "link": 'public/img/63b.jpg' };
var pic3 = { "id": 3, "link": 'public/img/63c.jpg' };

export var WORKS: Work[] = [
    { "id": 11, "title": "Titre 1", "description" : "desc 1", "types" : ['draft', 'sculpture'], "groups" : ["expo 1", "expo 2"], 
        "pictures" : ['public/img/63a.jpg', 'public/img/63a.jpg', 'public/img/63a.jpg'], "minpic" : 'public/img/63a.jpg' },
    { "id": 12, "title": "Titre 2", "description": "desc 2", "types" : ['painting'], "groups" : ["expo 1"], 
        "pictures": ['public/img/63a.jpg', 'public/img/63b.jpg', 'public/img/63c.jpg'], "minpic": 'public/img/63b.jpg' },
    { "id": 13, "title": "Titre 3", "description": "desc 3", "types" : ['sculpture'], "groups" : ["expo 1", "expo 3"], 
        "pictures": ['public/img/63c.jpg', 'public/img/63c.jpg', 'public/img/63c.jpg'], "minpic": 'public/img/63c.jpg' }
];