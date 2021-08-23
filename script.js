let maxInventory = 3;
let goShopping = 0;
let applesCount = 1;
let pearsCount = 2;

let applesCost = 3;
let pearsCost = 4;

if (maxInventory > applesCount){
  var applesNeeded = maxInventory - applesCount;
  var applesPrice = applesNeeded * applesCost;
console.log(applesNeeded + " apples needed for " + applesPrice + " dollars");
} else {
  console.log("No apples needed.")
}


if (maxInventory > pearsCount){
  pearsNeeded = maxInventory - pearsCount;
  pearsPrice = pearsNeeded * pearsCost;
console.log(pearsNeeded + " pears needed for " + pearsPrice + " dollars");
} else {
  console.log("No pears needed.")
}

if (applesPrice > 0 || pearsPrice > 0){
totalCost = applesPrice + pearsPrice;
  console.log(totalCost + " is my cost before tax");
taxCosts = totalCost * 0.09;
console.log(taxCosts + totalCost + " is my cost after tax");
}

