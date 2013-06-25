//Zeller Method project
// We'll be using Zeller's congruence, which is an algorithm devised by Christian Zeller to 
//calculate the day of the week for any Julian or Gregorian calendar date:
//h = ( ( q +( (m+1) * 26 // 10)+ Y +( Y // 4)+ 6 * (Y // 100)+ (Y // 400)) % 7 )
//... all of which translates to this:
//dayOfWeek = (dayOfMonth + ((month + 1) * 26 // 10) + year + (year // 4) +
//   6 * (year/ / 100) + (year // 400)) % 7)
// Note that in this algorithm, January and February are counted as
//months #13 & #14 of the previous year, which will need to factor into your method.

function zeller(q, m, Y){
    // Where: q = day of month; m = month of the year (string); y = year
    // This method should return the day of the week as a string
    //REPLACE THIS CODE WITH YOUR ZELLER CONGRUENCE METHOD
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var weekDay=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(var  i=0; i<12;i++){
        if(month[i]==m){
            m=i+1;
            break;
        }
    }
    if (m<3){
        m += 12;
        Y--;
    }
    var h = (q+ parseInt(((m + 1) * 26) / 10) + Y + parseInt(Y / 4) + 6 * parseInt(Y / 100) + parseInt(Y / 400) - 1) % 7
    return weekDay[h];


}