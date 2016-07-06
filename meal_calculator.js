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

Diner.prototype.calcSub = function() {
	for(var d = 0; d < this.meal.length; d += 1) {
		this.subtotal += this.meal[d].price;
	}
}

Diner.prototype.calcTax = function(tax) {
	this.tax = this.subtotal * tax; 
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

DinnerParty.prototype.calcBill = function(tax,tip) {
	//ensure  taxMultiplier < 1
	var taxMultiplier = (tax % 1);
	var tipMultiplier = (tip % 1);
	console.log("tm:"+taxMultiplier);
	for(var d = 0; d < this.diners.length; d += 1) {
		this.diners[d].calcSub();
		this.diners[d].calcTax(taxMultiplier);
		this.subtotal += this.diners[d].subtotal;
		this.tax += this.diners[d].tax;
	}
}

var party = new DinnerParty();
var chad = new Diner("Chad");
var vanessa = new Diner("Vanessa");

chad.addDish("potatoes",4.39);
chad.addDish("mustard",1.69);
party.addDiner(chad);

vanessa.addDish("salmon",8.93);
vanessa.addDish("peach pie",2.45);
vanessa.addDish("water",4.00);
party.addDiner(vanessa);

party.calcBill(2.05,0.18);
console.log(party);



