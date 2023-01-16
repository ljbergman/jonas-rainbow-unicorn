"use strict";
// Array
const arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);
// Objekt
let mittObjekt = {
    x: 12,
    y: "testtext",
    z: true,
};
console.log(mittObjekt);
// Funktion
function jonas(x) {
    return "Hej " + x;
}
console.log(jonas("Kalle"));
// For in loop
for (let i in arr) {
    console.log(jonas(arr[i]));
}
