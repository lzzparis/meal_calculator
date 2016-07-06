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

Diner.prototype.setTip = function(tip) {
	this.tip = tip;
}

Diner.prototype.calcTotal = function() {
	this.total = this.subtotal + this.tax + this.tip;
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

DinnerParty.prototype.calcTip = function(tip) {
	var preTipTotal = this.subtotal + this.tax;
	var numDiners = this.diners.length;
	this.tip =  preTipTotal * tip;
	this.tipPerDiner = this.tip / numDiners;
	this.total = preTipTotal + this.tip;

	for(var d = 0; d < this.diners.length; d += 1) {
		this.diners[d].setTip(this.tipPerDiner);
		this.diners[d].calcTotal();
	}
}


DinnerParty.prototype.calcBill = function(tax,tip) {
	//ensure  taxMultiplier < 1
	var taxMultiplier = (tax % 1);
	var tipMultiplier = (tip % 1);
	for(var d = 0; d < this.diners.length; d += 1) {
		this.diners[d].calcSub();
		this.diners[d].calcTax(taxMultiplier);
		this.subtotal += this.diners[d].subtotal;
		this.tax += this.diners[d].tax;
	}

	this.calcTip(tipMultiplier);	
}

DinnerParty.prototype.printBill = function() {
	var totalBill = this.total.toFixed(2)
	console.log("The total bill comes to $"+totalBill);

	for(var d = 0; d < this.diners.length; d += 1) {
		var dinerBill = this.diners[d].total.toFixed(2);
		console.log(this.diners[d].name+" owes $"+dinerBill);
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


party.printBill();

