//Basic units conversion tool
function temperature(n, from){
    var result = [];
    var celcius, kelvin, fahrenheit;
    if(from == 'fahrenheit'){
        celcius = (5 / 9.0) * (n - 32);
        kelvin = ((5/9.0)*(n-32)+273.15); 
        result[0] = celcius;
        result[1] = kelvin;
        return res ;
    }
    if(from == 'celsius'){
        fahrenheit = (n * (9 / 5.0) + 32);
        kelvin = (n + 273.15);
        result[0] = fahrenheit;
        result[1] = kelvin;
        return res;
    }
    if(from == 'kelvin'){
        fahrenheit = (((n - 273.15) * (9 / 5.0)) + 32);
        celsius = (n - 273.15);
        result[0] = fahrenheit;
        result[1] = celsius;
        return res;
    }
}

function length(n, from){
    //REPLACE THIS CODE WITH YOUR LENGTH CONVERSION METHOD
    var mi, m, km, ft;
    var result = [];
    if (from == "miles") {
        km = n * 1.609;
        ft = n * 5280;
        m = n * 1609;
        result[0] = km;
        result[1] = ft;
        result[2] = m;
        return result;
        
    }
    if (from == "feet") {
        km = n * 0.0003047;
        m = n * 0.3047;
        mi = n / 5280.0;
        result[0] = km;
        result[1] = m;
        result[2] = mi;
        return result;
        
    }
    if (from == "kilometers") {
        mi = n / 1.609;
        m = n * 1000;
        ft = n*3280.85;
        result [0] = mi;
        result[1] = m;
        result[2] = ft;
        return result;
    }
    if (from == "meters") {
        mi = n/1609;
        km = n/1000;
        ft = n * 3.28085;
        result[0] = mi;
        result[1] = km;
        result[2] = ft;
        return result;
    }

}

function volume(n, from){
    //REPLACE THIS CODE WITH YOUR VOLUME CONVERSION METHOD
    var ml, cubic_in, gal, cubic_m;
    var result = [];
    if (from == "cubic_meter") {
        ml = 1000000 * n;
        cubic_in = n * 61023.74;
        gal = n * 264.17;
        result[0] = ml;
        result[1] = cubic_in;
        result[2] = gal;
        return result;  
    }
    if (from == "milliliters") {
        cubic_m = n * 0.000001;
        cubic_in = n * 0.061;
        gal = n * 0.00026;
        result[0] = cubic_m;
        result[1] = cubic_in;
        result[2] = gal;
        return result;  
    }
    if (from == "cubicInches") {
        cubic_m = n*0.000016;
        ml = n * 16.38;
        gal = n*0.0043;
        result [0] = cubic_m;
        result[1] = ml;
        result[2] = gal;
        return result;
    }
    if (from == "gallons") {
        cubic_m = n*0.0037;
        ml = n*3785.4;
        cubic_in = n * 231;
        result[0] = cubic_m;
        result[1] = ml;
        result[2] = cubic_in;
        return result;
    }
    
}

function weight(n, from){
    //REPLACE THIS CODE WITH YOUR OWN WEIGHT CONVERSION METHOD
    var lb, kg, oz;
    var result = [];
    
    if (from == "pounds") {
        kg = n * 0.45;
        oz = n * 16;
        result[0] = kg;
        result[1] = oz;
        return result;
    }
    if (from == "kilograms") {
        lb = 2.2*n;
        oz = n* 35.27;
        result[0] = lb;
        result[1] = oz;
        return result;
    }
    if (from == "ounces") {
        lb = n *0.0625;
        kg = n*0.028;
        result[0] = lb;
        result[1] = kg;
        return result;
    }
}