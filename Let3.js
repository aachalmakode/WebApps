let a = 10; // creates a variable a in global scope
{ // creates a new block using {}
    let a = 20;  // creates a new variable in the block scope
    console.log(a); //  20 is then assigned to the new block scoped variable, 
                  //It does not affect the outer variable.
  }
console.log(a);