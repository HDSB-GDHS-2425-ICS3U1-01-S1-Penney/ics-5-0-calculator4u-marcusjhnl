let firstnumber;
let secondnumber;
let operator;

operator = prompt(" calculator ")
firstnumber = prompt("first number")
secondnumber = prompt("second number")

firstnumber = parseInt(firstnumber)
secondnumber = parseInt(secondnumber)

console.log(operator);
console.log(firstnumber);
console.log(secondnumber);

function calculator() {

    if ((operator == "multiply") || (operator == "times") ) {
        console.log(firstnumber * secondnumber);
    } else if (operator == "divide") {
        console.log(firstnumber / secondnumber)
        if (secondnumber == 0){
            console.log("undefined")
        }
    } else if ((operator == "subtract")|| (operator == "take away")) {
        console.log(firstnumber - secondnumber)
    } else if ((operator == "add") || operator == "sum") {
        console.log(firstnumber + secondnumber)
    }
}

calculator(firstnumber * secondnumber);
