function add(a=10,b=5){
    return a+b;
}
function subtract(a=10,b=4){
    return a-b;
}
function multiply(a=10,b=4){
    return a*b;
}
function divide(a=10,b=5){
    return a / b;
}
function increment(n = 4){
    return ++n;
}
function decrement(n = 5){
    return --n;
}
function makeInt(n = "9"){
  return parseInt(n,10);
}
function preserveDecimal(n="2.2222"){
    return parseFloat(n);
}
