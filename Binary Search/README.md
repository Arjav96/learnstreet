
Welcome! Here is a Binary Search project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

The software we all use in our daily lives is powered by the work of thousands of extremely smart programmers. This is most evident in the study of the powerful algorithms developed for various basic tasks like searching an array, sorting an array, scheduling tasks, designing file systems, etc.<br>
<br>
Computer Science deals a lot with this formal study of algorithms and their performance. Nonetheless, while using high-level languages where many functions are already written for us, we rarely encounter the sophistication of some of these algorithms. But learning from these will make you a smarter programmer. <br>
<br>
In this exercise, we will cover an algorithm for searching in a sorted collection of items with the Binary Search algorithm. We will write this code in Python.<br>
<br>
Given a list of numbers which are sorted in some way (let's say ascending order, from the least to the greatest)<br>
<br>
[ 1 2 5 8 11 45 100]<br>
<br>
If you were asked to find a number, say 11, how would you go about it? The most obvious first thought is to just start on one end of the array, and check each and every member. That will surely get the result, but in 5 steps. Binary search will achieve the same in about 3 steps. For searching 45, it's 6 steps versus 2 steps!<br>
<br>
For very large collections of data, like imagine searching through an entire Phonebook, the speed advantages of Binary Search are immense. Curious? Let's start discussing the algorithm.<br>
<br>
The first thing that binary search attempts to do is to take advantage of the fact that the data is sorted. Knowing this, it tries to progressively narrow down the part of the array where the target must be. To illustrate, the array shown above has 7 elements which are numbers in between 1 and 100.<br>
<br>
Let's say we want to find the number 11. Let's check the value in the middle of the array; that is 8. Since 11 is greater than 8 and the array is sorted in ascending order, our target must definitely not be in the first half of the array. So now let's only look at the second half.<br>
<br>
Now we'll look for 11 in between [11 45 100]. Since we've already checked if 8 is more or less or equal to 11, there is no need to include 8 here. Again, just like the last time, we check in the middle of this collection. We find that 11 is less than the middle of this group, which is 45. Hence we don't need to look at any elements from the middle to the end.<br>
<br>
Now we're left looking for 11 in the array [11].  We're done ;-)!<br>
<br>
We hope you're getting the hang of it. If not, please do read it again and run yourself through some hand-written examples. We will start to develop the algorithm when you start the first function.<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		