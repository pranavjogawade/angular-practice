var shopApp = angular.module('shoppingApp',[]);
shopApp.controller("shoppingController", function(){
	var self = this;
	self.pageTitle = "Shopping Cart";
	var items = [
		{id:1,name:"Laptop",price:200},
		{id:2,name:"PlayStation",price:300},
		{id:3,name:"TV",price:240},
		{id:4,name:"AC",price:234},
		{id:5,name:"Gaming PC",price:430}
	];
	self.list = items;
	self.addItem = function( addedItem ){
		self.list.push({id:self.list.length+1, name:addedItem, price:122});
	};
	self.removeItem = function(x){
		self.list.splice(x,1);
	}
});