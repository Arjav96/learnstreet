// This function changes the class value of table cells in accordance with the pattern of a 7 segment display. Refer hints 
function illuminate(num)
    {
        // REPLACE THIS CODE WITH YOUR illuminate() METHOD
        var pattern = ["yyyyyyn", "nyynnnn", "yynyyny", "yyyynny", "nyynnyy", "ynyynyy", "ynyyyyy", "yyynnnn", "yyyyyyy", "yyyynyy"];
        num = parseInt(num);
        return pattern[num];
    }

// This function extracts digits from an input text and illuminates based on the digits based
function getDigits(text)
    {
        // REPLACE THIS CODE WITH YOUR getDigits() METHOD
        var res = [];
        for (var i = 0; i < text.length; ++i) {
            var ch = text.charAt(i);
            if (ch >= "0" && ch <= "9") {
                res.push(illuminate(ch));
            }
        }
        return res;
    }