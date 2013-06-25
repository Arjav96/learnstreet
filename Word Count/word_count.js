// This function tests a character to see if it is a separator between words.
// It returns true if the character is a separator, false otherwise.
function isSeparator(ch)
    {
        // REPLACE THIS CODE WITH YOUR isSeparator() METHOD
        var arr = [" ", ",", ".", "!", "?"];
        for (var i = 0; i < arr.length; ++i) {
            if (ch == arr[i]) {
                return true;
            }
        }
        return false;
    }

// This function tests a character to see if is an alphabet, digit or general things which are parts of words
// It returns true if the character is a typical part of word, false otherwise.
function isPartOfWord(ch)
    {
        // REPLACE THIS CODE WITH YOUR isPartOfWord() METHOD
        return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9"); 
    }
// This function takes a string text as input and returns a collection of words as output. From this collection of words, the number of words are displayed automatically.
function countWords(text)
    {
        // REPLACE THIS CODE WITH YOUR countWords() METHOD
        var len = text.length;
        var pos = 0;
        var inWord = false;
        var count = 0;
        var words = [];
        while (pos < len) {
            var ch = text[pos];
            if (isPartOfWord(ch)) {
                if(!inWord) {
                    count++;
                    inWord = true;
                    words.push("");
                }
                
                words[count -1] += ch;
                
            } else if (isSeparator(ch)) {
                inWord = false;
            }
            pos++;
        }
        return words;
	}
