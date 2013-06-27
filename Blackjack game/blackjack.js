//Blackjack project
function getcard(n){
    /*
    This method accepts an integer value (n) that is used internally in this
    program to identify a unique playing card. It returns a more
    human-readable string representing the card's number and suit.
	The string should be formatted: "[rank] [suit]", where rank is an integer 
	from 1 to 13, and suit is the short form of the correct suit: 
	c for clubs, d for diamonds, h for hearts and s for spades.
	For example, the ace of clubs corresponds to : "1 c", while the 
	queen of hearts would be "12 h".

	Regarding the internal integer representation of the cards (n), the
    cards are ordered/numbered as follows:
	0 - 12 (Ace to King of clubs)
	13 - 25 (Ace to King of diamonds)
	26 - 38 (Ace to King of hearts)
	39 - 51 (Ace to King of spades)

	If an invalid integer n is provided (i.e. n < 0 or n > 51), return the 
	string: "error".
	*/
	"Replace with your code here"
    if (n < 0 || n > 51) {
        return "error";
    } else {
        if (n >= 39) {
            var k = n - 38;
            res = "";
            res += k;
            res += " ";
            res += "s";
            return res;
        } else if (n >= 26) {
            var k = n - 25;
            res = "";
            res += k;
            res += " ";
            res += "h";
            return res;
        } else if (n >= 13) {
            var k = n - 12;
            res = "";
            res += k;
            res += " ";
            res += "d";
            return res;
        } else {
            var k = n - 38;
            res = "";
            res += k;
            res += " ";
            res += "c";
            return res;
        }
    }
    
}

function countpoints(hand) {
    /*Counts the points in a given hand.
	The hand will be provided as an array of integers, each corresponding 
	to a certain rank of cards.
	Each element of the array has a rank from 1 to 13. 
	Ace = 1, Number cards correspond to their numbers, J = 11 and so on.
	
    The point value of each card is calculated using the following standard
    Blackjack scoring formula:
	Ace - is either 1 or 11, depending on which ever value results in a
        better total for the hand (i.e., highest possible point value below 21),
	2 to 10 - their corresponding numerical values,
	Jack, Queen, or King - 10 points.

	*/
	"Replace with your code here"
    var acecount = 0;
    var total = 0;
    for (var i = 0; i < hand.length; ++i) {
        if (hand[i] == 1) {
            acecount++;
            total += 10;
        } else {
            if (2 >= hand[i] && hand[i] <= 10) {
                total += hand[i];
            } else {
                total += 10;
            }
        }
    }
    while (total > 21 && acecount > 0) {
        total -= 10;
        acecount--;
    }
    return total; 
}

function shuffle(cards) {
    /* Given an array of integers (which represent cards in our case), shuffle 
	them randomly to simulate the shuffling of a deck. You can use the provided 
	swap function at bottom to help you swap the items in an array:
    E.g. swap(cards, position1, position2)
    Then, return that newly shuffled array.
	*/
	"Replace with your code here"
    for (var i = cards.length-1; i >= 0; --i) {
        var j = Math.floor(Math.random() * cards.length);
        swap(cards,i,j);
    }
    return cards;
}

function getstrategy(n) {
	/*
		Return a function that accepts an argument:	currenthand, and based on 
		the point value of that hand, returns true (to hit), or returns 
		false (to stand). 
		If the current point total of the hand is greater or equal to 'n', then 
		the strategy function will stand. Otherwise, it will return false (to hit).
        You should consider returning with something in a form such as:
          return function(currenthand){...}
        where you fill in the logic for {...}
	*/
	"Replace with your code here"
    return function(currenthand) {
        return (countpoints(currenthand) >= n);
    }
}

/*
This function applies the strategy you define in getstrategy(n): DON'T CHANGE
*/
function applystrategy(hand, n) {
	var strat = getstrategy(n);
		return strat(hand);	
}

/*
	This function swaps the elements in array a indexed by positions i and j.
*/
function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

/*
	HELPER FUNCTIONS: DO NOT MODIFY
*/
(function(j,i,g,m,k,n,o){function q(b){var e,f,a=this,c=b.length,d=0,h=a.i=a.j=a.m=0;a.S=[];a.c=[];for(c||(b=[c++]);d<g;)a.S[d]=d++;for(d=0;d<g;d++)e=a.S[d],h=h+e+b[d%c]&g-1,f=a.S[h],a.S[d]=f,a.S[h]=e;a.g=function(b){var c=a.S,d=a.i+1&g-1,e=c[d],f=a.j+e&g-1,h=c[f];c[d]=h;c[f]=e;for(var i=c[e+h&g-1];--b;)d=d+1&g-1,e=c[d],f=f+e&g-1,h=c[f],c[d]=h,c[f]=e,i=i*g+c[e+h&g-1];a.i=d;a.j=f;return i};a.g(g)}function p(b,e,f,a,c){f=[];c=typeof b;if(e&&c=="object")for(a in b)if(a.indexOf("S")<5)try{f.push(p(b[a],e-1))}catch(d){}return f.length?f:b+(c!="string"?"\0":"")}function l(b,e,f,a){b+="";for(a=f=0;a<b.length;a++){var c=e,d=a&g-1,h=(f^=e[a&g-1]*19)+b.charCodeAt(a);c[d]=h&g-1}b="";for(a in e)b+=String.fromCharCode(e[a]);return b}i.seedrandom=function(b,e){var f=[],a;b=l(p(e?[b,j]:arguments.length?b:[(new Date).getTime(),j,window],3),f);a=new q(f);l(a.S,j);i.random=function(){for(var c=a.g(m),d=o,b=0;c<k;)c=(c+b)*g,d*=g,b=a.g(1);for(;c>=n;)c/=2,d/=2,b>>>=1;return(c+b)/d};return b};o=i.pow(g,m);k=i.pow(2,k);n=k*2;l(i.random(),j)})([],Math,256,6,52);

Math.seedrandom();