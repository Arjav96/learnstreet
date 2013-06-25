//string functions project
function revers(str) {
    // Accept an input string, str, and reverse its characters in order
    "REPLACE THIS CODE WITH YOUR CONVERSION METHOD"
    var res = "";
    for (var j = str.length-1; j >= 0; --j) {
       res += str.charAt(j);
    }
    return res;
    
}
function uppercase(str) {
    // Convert all the characters of the input string, str, to upper
    // case. Reurn the uppercased string.
    "REPLACE THIS CODE WITH YOUR CONVERSION METHOD"
    return str.toUpperCase();
}
function palindrome(str) {
    // Check if the input string, str, is spelled the same forwards
    // as it is spelled backwards.
    // Return "is a palindrome" if it is, or "is not a palindrome" if it is not.
    "REPLACE THIS CODE WITH YOUR CONVERSION METHOD"
    var rts = "";
    for (var i = str.length -1; i >= 0; --i) {
        rts += str.charAt(i);
    }
    
    if (rts == str) {
        return "is a palindrome";
    } else {
        return "is not a palindrome";
    }
}