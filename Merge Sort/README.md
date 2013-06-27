
Welcome! Here is a Merge Sort project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

In this exercise, we are going to implement the merge sort algorithm invented by the legendary mathematician John von Neumann back in 1948. He is responsible for many of the ideas behind computers today and was considered a genius in his time. Anyways, we'll try to understand and code a sorting algorithm he developed – nothing too heavy!<br>
<br>
Merge sort achieves sorting by dividing and subdividing a list all the way down to individual members. For example, a list of 8 things is divided into 2 lists of 4 and 4. Each of those 2 lists is subdivided into 4 total lists of 2 and 2. Each of those is subdivided into 8 lists of 1 member each.<br>
<br>
Now starting from 1-member lists, we merge them in a clever way as illustrated below.<br>
<br>
Say, we started with <br>
<code>[ 6 5 3 1 8 7 2 4 ]</code><br>
<br>
It splits up successively into:<br>
<br>
<code>S1: [ 6 5 3 1 ] and [ 8 7 2 4 ]<br>
S2: [ 6 5 ] and [ 3 1 ], [ 8 7 ] and [ 2 4 ]<br>
S3: [6] and [5], [3] and [1], [8] and [7], [2] and [4]<br>
</code><br>
At the 3rd level, we have reached the maximum amount of splitting and we start to merge and sort upwards now. At every stage, we check the 2 lists, and join them such that they are in ascending order in the new list.<br>
<br>
When we join two 1 member lists, we get a 2 member list. Since we check for ascending while joining, we get a sorted 2 member list. When we are joining two 2 member lists to get a 4 member list, we use the following algorithm.<br>
<br>
We check if the element on the left list is less than the element on the right list. If it is, we place it in the new merged list and move to the next left element. If it is not, we place the element from the right list in the new merged list and move to the next right element. We repeat this process till we have finished copying everything from the left and right lists to the merged list.<br>
<br>
With the above steps, we start to merge and return progressively larger sorted lists of 2 members, 4 members, 8 members and so on. We build up the sorted list in this way. I'll illustrate with the following example.<br>
<br>
In the merging round:<br>
<br><code>
M3: [5 6] and [1 3], [7 8] and [2 4]<br>
M2: [1 3 5 6] and [2 4 7 8]<br>
M1: [1 2 3 4 5 6 7 8]<br>
</code><br>
Imagine that we are about to merge [1 3 5 6] and [2 4 7 8] in the M2 round. How did we do that? First we set ourselves two indicators – Lmarker and Rmarker and we point them to the first elements of the left and right list.<br>
<br>
In the next step, we check if the value at Lmarker is less than the value at Rmarker. As 1<2, it is, and we place '1' in a new list M and increase Lmarker to point to the second element of the left list.<br>
<br>
We repeat the same process, checking if the value at Lmarker is less than the value at Rmarker. As 3<2 is not true, we add '2' to M and increase Rmarker to point to the next element of right list.<br>
<br>
Next step, the markers are pointing to the check if 3<4. It is, and 3 gets added to M, and Lmarker gets incremented to point to the next element of the left list.<br>
<br>
And so on.<br>
<br>
When Lmarker points to 6 and Rmarker points to 7, we check if 6<7, it is, and we increment Lmarker by one. But Lmarker has reached the end of the left list. At this point, we just take all the remaining elements of right and add them to M. If in case we had reached the end of the right list, we would have simply added all the remaining elements of the left list.<br>
<br>
That's how the merging operation is done.<br>
<br>
With this understood, we'll start with writing the functions. We are going to write 2 functions – mergeSort() and mergeList() which split the above problem into the following steps:<br>
<br>
mergeSort() is given a list to sort. If the list has more than 1 element, it splits up the list into 2 lists and recursively calls mergeSort() for each of them. When the hand-off eventually comes back, with 2 sorted sub-lists, it merges them and returns that.<br>
<br>
Hence the program flow is as follows:<br><code>
<br>
mergeSort [ 6 5 3 1 8 7 2 4 ]<br>
* mergeSort [ 6 5 3 1 ]<br>
** mergeSort [ 6 5 ]<br>
*** mergeSort [6]<br>
*** return [6]<br>
*** mergeSort [5]<br>
*** return [5]<br>
** return mergeList [6], [5] = [5 6]<br>
** mergeSort [ 3 1 ]<br>
*** mergeSort [3]<br>
*** return [3]<br>
*** mergeSort [1]<br>
*** return [1]<br>
** return mergeList [3],[1] = [1 3]<br>
* return mergeList [5 6], [1 3] = [ 1 3 5 6 ]<br>
* mergeSort [ 8 7 2 4 ]<br>
…<br>
…<br>
…<br>
return mergeList [1 3 5 6], [2 4 7 8] = [ 1 2 3 4 5 6 7 8 ]<br>
<br></code>
The number of '*'s indicate the chain of recursion. Thus, for each mergeSort() call, two split lists are created and mergeSort() is called again on them. Things proceed this way till we are down to individual elements. When the results come back from mergeSort(), the lists are joined with mergeList().<br>
<br>
It is a bit complicated to understand this algorithm, but it'll get clearer as we start writing the code. Let's start with mergeLists()<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		