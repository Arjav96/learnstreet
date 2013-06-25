function happyNum(number) {
    var sqr, digit;
    var cycle = [];
    while (number != 1 && cycle[number] != true) {
        cycle[number] = true;
        sqr = 0;
        while (number > 0) {
            digit = number % 10;
            sqr += digit*digit;
            number = (number - digit)/10;
        }
        number = sqr;
    }
    if(number == 1) {
        return "Happy Number";
    } else {
        return "Unhappy Number";
    }
}