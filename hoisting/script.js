// -----------------------------
// 1. var hoisting
// -----------------------------
console.log(a); // ✅ undefined (declaration is hoisted, value is not)
var a = 10;
console.log(a); // 10

// -----------------------------
// 2. let hoisting
// -----------------------------
try {
  console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
} catch (err) {
  console.log("let b error:", err.message);
}
let b = 20;
console.log(b); // 20

// -----------------------------
// 3. const hoisting
// -----------------------------
try {
  console.log(c); // ❌ ReferenceError
} catch (err) {
  console.log("const c error:", err.message);
}
const c = 30;
console.log(c); // 30

// -----------------------------
// 4. Function Declaration Hoisting
// -----------------------------
greet(); // ✅ works because function declarations are fully hoisted
function greet() {
  console.log("Hello from a function declaration");
}

// -----------------------------
// 5. Function Expression with var
// -----------------------------
try {
  speak(); // ❌ TypeError: speak is not a function (only var is hoisted, not the function)
} catch (err) {
  console.log("Function expression error:", err.message);
}
var speak = function() {
  console.log("Hello from a function expression");
};
speak(); // ✅ now works

// -----------------------------
// 6. Function Expression with let
// -----------------------------
try {
  whisper(); // ❌ ReferenceError
} catch (err) {
  console.log("let function expression error:", err.message);
}
let whisper = function() {
  console.log("Hello from a let function expression");
};
whisper(); // ✅ now works

// -----------------------------
// 7. Arrow Function with const
// -----------------------------
try {
  shout(); // ❌ ReferenceError
} catch (err) {
  console.log("arrow function error:", err.message);
}
const shout = () => {
  console.log("Hello from an arrow function");
};
shout(); // ✅ now works


// var am;
console.log(am)
// var am = 100;
// console.log(am);
