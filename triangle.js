const readlineSync = require("readline-sync");

base = Number(readlineSync.question("Enter base: "));
height = Number(readlineSync.question("Enter height: "));
hyp = Number(readlineSync.question("Enter hypotenuse: "));

if (base **2 + height **2 === hyp ** 2){
  console.log("Yes, that's a right triangle!");
}else{
  console.log("Nope...not a right triangle.");
}
