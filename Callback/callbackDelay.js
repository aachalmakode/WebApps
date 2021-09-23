//  program that shows the delay in execution

function greet() {
    console.log('Hello World');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 3000);
sayName('Aachal');