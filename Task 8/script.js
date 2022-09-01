/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(sum, subtraction, multiplication, division) {
    this.sum = sum(a, b);
    this.subtraction = subtraction(a, b);
    this.multiplication = multiplication(a, b);
    this.division = division(a, b);
  }

  getSum() {
    return this.sum;
  }
}
