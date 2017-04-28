var parkingApp = angular.module('parking',[]);
parkingApp.controller('parkingController', function(){
	var self = this;
	self.cars = [
			{plate: "MH-12-MY-4587"},
			{plate: "MH-12-MY-4785"},
			{plate: "MH-12-MY-4582"},
			{plate: "MH-12-MY-2365"},
			{plate: "MH-12-MY-5555"}
	];
	self.park = function(car){
		self.cars.push({plate:car});
		self.addPlate = "";
	};
})