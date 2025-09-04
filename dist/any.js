"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let some; //any type
some = 42; //assigned number
console.log(some);
some = "avv"; //then assigned string
console.log(some);
//inference type checking;
let bool = true;
// bool = 10; // output error because it is boolean
//explicit type checking
let isActive = true; //any type
isActive = 10; //can be reassigned
console.log(isActive);
//# sourceMappingURL=any.js.map