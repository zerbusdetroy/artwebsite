var mongoose = require('mongoose');

/**
 * Service enabling check of inputs for bd entries
 */
function DBCheckInsertService() {

}

DBCheckInsertService.prototype.checkInsertWork(work){

	if(!work.title){
		return 1;
	}

}


module.exports = DBCheckInsertService;
