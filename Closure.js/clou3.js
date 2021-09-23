let a = 0;
function sum() //the sum() function returns the function definition 
                //of the increaseSum() function.
{
    function increaseSum() { //The a variable is increased inside the increaseSum() function

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4

//the value of the a variable can also be changed outside of the function.
// In this case, a = a + 1; changes the value of the variable outside the function.