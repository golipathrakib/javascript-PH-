/*var num1 = 20,
    num2 = 3,
    name = 'Chamahk';
function multiply(){
    return num1 * num2;
}
multiply();*/

/*// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
    console.log(num1 * num2);
    
}

multiply(); // Returns 60*/

// A nested function example
function getScore(){
    var num1 = 2, num2 = 3;
    function add(){
        return name + 'scored' + (num1 + num2);
    }
    return add();
}

getScore();
