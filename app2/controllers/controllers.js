var editApp = angular.module('editModeApp',[]);

editApp.controller('liveEditController', function(){
	var self = this;
	self.name = 'Pranav';
	self.openEdit = false;
	self.edit = function(){
		self.openEdit = true;
	};
	self.update = function(){
		self.openEdit = false;	
	}
});