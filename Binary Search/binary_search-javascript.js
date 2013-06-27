function binarySearch(arr, val){
    var lo = 0;
    var hi = arr.length -1 ;
    var ctr = 0;
    var result = []
    var mid = 0;
    //REPLACE THIS CODE WITH YOUR binarySearch METHOD
    while (lo <= hi) {
        mid = parseInt((lo + hi) / 2);
        ctr++;
        if (arr[mid] == val) {
            result.push(mid);
            result.push(ctr);
            return result;
        } else if (arr[mid] > val) {
            hi = mid - 1;
        } else {
            lo = mid+1;
        }
    }
	return [-1 ,ctr];
}