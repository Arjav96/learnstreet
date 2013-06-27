//Base Conversion methods
function getNumberByBase(base) {
    // This method accepts a base ('base') and returns the largest value for
    // a single digit of that base -- where 'base' can be up to base 16 (hexadecimal).
    // Thus if the base is 5, then the largest value would be 4. If it is base 16
    // (hexadecimal), the largest value would be F. The returned values can be
    // as follows: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
	"REPLACE THIS CODE WITH YOUR getNumberByBase METHOD"
    var baseString = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return baseString.charAt(base);
    

}

function baseToBase10(num, base) {
    // Given a number ('num') and its base ('base'), this method returns the
    // number in its base 10 equivalent. Thus, an input of num=3E, base=16
    // would return 62 (= 48 + 14).
    // Use the getNumberByBase() function above to help with the conversion.
	"REPLACE THIS CODE WITH YOUR baseToBase10 METHOD"
    var ret = 0;
    for (var i = num.length-1; i >= 0; --i) {
        ret += this.getNumberByBase(num.charAt(i))*Math.pow(base, i);
    }
    return ret;
}

function base10ToBase(x, base) {
    // This method converts a base 10 number ('x') into its equivalent in
    // another base ('base') and returns that value.
	"REPLACE THIS CODE WITH YOUR base10ToBase METHOD"
    return x.toString(base);
    
    
}