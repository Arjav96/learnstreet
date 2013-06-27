function mergeLists(left, right){
    var result = []
    "REPLACE THIS CODE WITH YOUR mergeLists METHOD"
    var markerI = 0, markerJ = 0;
    while(markerI <left.length && markerJ < right.length) {
        if(left[markerI] < right[markerJ]) {
            result.push(left[markerI]);
            markerI++;
        } else {
            result.push(right[markerJ]);
            markerJ++;
        }
    }
    for (var i = markerI; i < left.length; ++i) {
        result.push(left[i]);
    }
    for (var i = markerJ; i < right.length; ++i) {
        result.push(right[i]);
    }
    return result;
}

function mergeSort(l){
    run.ctr += 1;
    "REPLACE THIS CODE WITH YOUR mergeSort METHOD"
    if (l.length <= 1) {
        return l;
    }
    var mid = l.length/2;
    var left = mergeSort(l.slice(0, mid));
    var right = mergeSort(l.slice(mid, l.length));
    return mergeLists(left, right);
    
}

//Take things from text box and output
function run(text){
    run.ctr = 0;
    var outstring = "";
    numbers =[];
    var rest = text.split(' ');
    for(var i=0;i<rest.length;i++){
          numbers.push(parseInt(rest[i]));
    }
    outstring += "Sorted Numbers: " + String(mergeSort(numbers)) ;
    outstring += "<br></br>Recursions : " + String(run.ctr);
    return outstring;
}