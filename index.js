let firstnumber;
let secondnumber;
let operator;

operator = prompt(" operator ")
firstnumber = prompt("first number")
secondnumber = prompt("second number")

console.log(operator);
console.log(firstnumber);
console.log(secondnumber);

function calculator() {

    if (operator == "multiply") {
        console.log(firstnumber * secondnumber);
    } else if (operator == "divide") {
        console.log(firstnumber / secondnumber)
        if (operator = 0)
        console.log("undefined")
    } else if (operator == "subtract") {
        console.log(firstnumber - secondnumber)
    } else if (operator == "add") {
        console.log(firstnumber + secondnumber)
    }
}

calculator(firstnumber * secondnumber);