/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { one, four } from "./modules/numbers/numbers.js";
import { composition } from "./modules/math/composition.js";
let a = composition(one, four);
console.log(a);

import { two } from "./modules/numbers/numbers.js";
import { division } from "./modules/math/division.js";
let b = division(four, two);
console.log(b);

import { three } from "./modules/numbers/numbers.js";
import { subtraction } from "./modules/math/subtraction.js";
let c = subtraction(three, two);
console.log(c);

import { five } from "./modules/numbers/numbers.js";
import { multiplication } from "./modules/math/multiplication.js";
let d = multiplication(five, two);
console.log(d);
