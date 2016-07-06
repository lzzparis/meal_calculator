//Diner constructor
var Diner = function(){
	this.meal=[];
}

Diner.prototype.addDish = function(dish,cost){
	this.meal.push({dish:dish, cost:cost});
}

//DinnerParty constructor
//var DinnerParty = function(){
//	diners:[]
//}

//DinnerParty.prototype.

var chad = new Diner();

chad.addDish("potatoes",4.39);

console.log(chad);

