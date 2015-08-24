//This function accepts two arguments – n, thresh
//It calculates the 'n'th fibonacci number,
//and the ration between successive fibonacci numbers
//It stops computing fibonacci numbers if the ratio
//is almost equal to the golden ratio. The required
//closeness to the golden ratio is 

//We can probably use fast doubling method to calculate nth term of fibonacci series.
// I have posted a link for the same.
//http://www.nayuki.io/page/fast-fibonacci-algorithms.

function fibRatio(n, thresh){
    var a=0, b =1;
    var ctr = 2;
    var goal = 1.6180339887;
    var ratio = 0.0;
    var c;
    //REPLACE THIS CODE WITH YOUR fibRatio METHOD
    while (ctr < n && Math.abs(goal - ratio) > thresh) {
        ctr++;
        c = a;
        a = b;
        b = c + b;
        ratio = parseFloat(b)/parseFloat(a);
    }
    return [ctr, ratio, a, b];
}


// Glue { this function reads a string from the input text box
//  and parses the string as arguments for running the fibonacci
//  function. Then it prepares for showing the output
// Feel free to change and see what happens! This is not tested!
function run(text){
    var outtext = "(Term Number, Ratio, (N-1)th Number, Nth number)<br>"
    input = text.split(",");
    for(var i = 0; i < input.length; i++){
        s = input[i];
        args = s.split(' ')
        result=(fibRatio(parseInt(args[0]), parseFloat(args[1])))
        outtext += String(result) + "<br>"
    }
    return outtext
}
