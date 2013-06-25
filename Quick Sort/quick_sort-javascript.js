function quickSort(array, left, right) {
    run.ctr += 1;
    //"REPLACE THIS CODE WITH YOUR quickSort METHOD"
 if (left < right) {
 
      var pivot = array[(left + right) >> 1];
      var left_new = left, right_new = right;
 
      do {
        while (array[left_new] < pivot)
          left_new++;
          
        while (pivot < array[right_new])
          right_new--;
          
        if (left_new <= right_new)
          swap(array, left_new++, right_new--);
          
      } while (left_new  <= right_new);
 
      quickSort(array, left, right_new);
      quickSort(array, left_new, right);
 
    }
    return array;
    
}
  
function swap(array, i, j)
     { 
      var t = array[i];
      array[i] = array[j];
      array[j] = t
    }

function run(array) {
    run.ctr = 0;
    arr = quickSort(array, 0, array.length-1);
    return arr;
}