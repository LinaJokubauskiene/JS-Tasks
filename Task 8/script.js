/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = () => this.a + this.b;
  this.subtraction = () => this.a - this.b;
  this.multiplication = () => this.a * this.b;
  this.division = () => this.a / this.b;
}

const calculate = new Calculator(1, 2);
console.log(calculate.sum());
console.log(calculate.subtraction());
console.log(calculate.multiplication());
console.log(calculate.division());
