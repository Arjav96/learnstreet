function beerSong(start){
    start = parseInt(start)
    var lyric = "";
    //REPLACE THIS CODE WITH YOUR beerSong METHOD
    for (var i = start; i >= 0; --i) {
        if (i > 2) {
            lyric += i.toString() + " bottles of beer on the wall, " + i.toSring() + " bottles of beer.";
            lyric += "Take 1 down, pass it around, " + (i-1).toString() + " bottles of beer on the wall.";
        }
        if (i == 2) {
            lyric += "2 bottles of beer on the wall, 2 bottles of beer."
            lyric += "Take 1 down, pass it around, 1 bottle of beer on the wall."
        }
        if (i == 1) {
            lyric += "1 bottle of beer on the wall, 1 bottle of beer."
            lyric += "Take 1 down, pass it around, no more bottles of beer on the wall."
        }
    }
    return lyric;
    
}