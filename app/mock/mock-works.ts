import {Work} from '../models/work';
import {Picture} from '../models/picture';

var pic1 = { "id": 1, "link": 'public/img/63a.jpg' };
var pic2 = { "id": 2, "link": 'public/img/63b.jpg' };
var pic3 = { "id": 3, "link": 'public/img/63c.jpg' };

export var WORKS: Work[] = [
    { "id": 11, "title": "Titre 1", "description" : "desc 1", "pictures" : [pic1, pic1, pic1], "minpic" : pic1 },
    { "id": 11, "title": "Titre 2", "description": "desc 2", "pictures": [pic2, pic2, pic2], "minpic": pic2 },
    { "id": 11, "title": "Titre 2", "description": "desc 2", "pictures": [pic1, pic2, pic3], "minpic": pic3 }
];