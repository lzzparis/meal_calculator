//Diner constructor
var Diner = function(name) {
	this.name = name;
	this.meal = [];
	this.subtotal = 0;
	this.tax = 0;
	this.tip = 0;
	this.total = 0;
}

Diner.prototype.addDish = function(dish,price) {
	this.meal.push({dish:dish, price:price});
}
Diner.prototype.calcSubtotal = function() {
	for(var d = 0; d < this.meal.length; d += 1) {
		this.subtotal += this.meal[d].price;
	}
}

//DinnerParty constructor
var DinnerParty = function() {
	this.diners = [];
	this.subtotal = 0;
	this.tax = 0;
	this.tip = 0;
	this.total = 0;
}

DinnerParty.prototype.addDiner = function(diner) {
	this.diners.push(diner);
}

var party = new DinnerParty();
var chad = new Diner("Chad");

chad.addDish("potatoes",4.39);
chad.addDish("mustard",1.69);
chad.calcSubtotal();

party.addDiner(chad);
console.log(party);



