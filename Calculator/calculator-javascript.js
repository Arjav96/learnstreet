//Basic calculator project
function cube(n){
    //Return the cube of a number, an integer provided as 'n'
    //REPLACE THIS CODE WITH YOUR CUBE METHOD
    return n*n*n;
}

function squareroot(n){
    //Returns the square root of the number n. If n < 0, 
    //then return the string NAN (Not A Number)
    
    //REPLACE THIS CODE WITH YOUR SQUAREROOT METHOD
    if (n < 0) {
        return NAN;
    } else {
        return Math.sqrt(n);
    }
}

function negate(n){
    //Return the negative value of the argument 'n'.
    //REPLACE THIS CODE WITH YOUR NEGATE METHOD
    return -n;
}
function factorial(n){
    /*Return n factorial
    The factorial of anything <= 1 is 1.
    The factorial of any integer greater than 1 is the product of all
    the integers from 1 to the number itself. For example,
    4 factorial = 1 x 2 x 3 x 4 = 24.*/
    
    //REPLACE THIS CODE WITH YOUR FACTORIAL METHOD
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
