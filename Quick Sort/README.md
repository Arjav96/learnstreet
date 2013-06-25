
Welcome! Here is a Quick Sort project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

QuickSort is an advanced efficient sorting algorithm developed by Tony Hoare. He developed it in the 1960s when he was a visiting student in Moscow trying to sort words for an algorithm he was developing! Imagine coming up with a world famous efficient sorting algorithm as just another part of your student project!<br>
<br>
Anyhow, quick sort works by taking a list, picking out an element, preparing 2 lists – everything greater than and everything lesser than the picked element, and then executing quick sort on them. This branching sorting divides the list into smaller and smaller bits, and sorts them. Then the algorithm works it's way back up the branches and assembles the complete sorted list.<br>
<br>
This process is recursive. To illustrate, let's look at the following example list:<br>
<br><code>
Step 1: Sort [ 6 9 2 4 8 ]<br>
<br></code>
Let's say we choose 6 as our pivot. Now, we prepare 2 lists:<br>
<br><code>
Lesser : [ 2 4 ]<br>
Greater : [ 9 8 ]<br>
<br></code>
Now, for each of the above lists of Lesser and Greater, we QuickSort them. We first start with Lesser.<br>
<br><code>
Step 2: Sort [2 4]<br>
<br></code>
We choose 2 as our pivot. Now we prepare the lists<br>
<br><code>
Lesser : [ ]<br>
Greater : [ 4 ]<br>
<br>
Step 3: Sort [] <br>
<br></code>
It has no elements, so it is sorted.<br>
<br><code>
Step 4: Sort [4]<br>
<br></code>
It has one element, so it is also sorted.<br>
<br><code>
Step 5: [2 4]'s lesser and greater subdivisions sorted.<br>
Return [Lesser, Pivot, Greater]<br>
<br>
Step 6: Sort [9 8]<br>
<br></code>
We choose 9 as our pivot.<br>
<br><code>
Lesser: [8]<br>
Greater: []<br>
<br></code>
Quicksort both these lists.<br>
<br><code>
Step 7: Sort [8]<br>
<br></code>
It has one element, it is sorted. Return.<br>
<br><code>
Step 8: Sort []<br>
<br></code>
It has one element, it is sorted. Return<br>
<br><code>
Step 9: Both lesser and greater of [9 8] have finished sorting.<br>
We return [Lesser, Pivot, Greater] = [8 9]<br>
<br>
Step 10: Both lesser and greater of [6 9 2 4 8] have finished sorting.<br>
We return [Lesser, Pivot, Greater] = [ 2 4 6 8 9 ] as the final sorted list.<br>
<br></code>
In the above 10 steps, the whole list has been sorted. You could try recreating the above steps with another list with pen and paper. You'll notice that everytime we generate the Lesser and Greater lists, we branch off and start sorting them. Subsequently, in the branches' own Lesser and Greater lists, we again repeat the same operation till we are down to a list with 1 or 0 elements, which is obviously sorted. When we encounter that, we climb back upwards through the branches. We can be sure that by doing this, our list will be sorted.<br>
<br>
The algorithm is a bit tricky, and our implementation will not be the most efficient one, nonetheless, let's start with writing the function!<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		