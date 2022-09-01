/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  brand: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(brand, model, year, color) {
  return audi[(brand, model, year, color)];
}

console.log(audi);
