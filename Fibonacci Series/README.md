
Welcome! Here is a Fibonacci Series project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

The invention and development of computers was pioneered by scientists who really needed answers to questions – mathematical questions. Questions ranging from knowing if a NASA rocket will not miss Mars millions of kilometers away to determining strategies for a chess game or understanding the shape of DNA. Computers are used for heavy-duty calculation tasks, and today, with this exercise, we take our first baby step towards it by seeing how fibonacci numbers approach the golden ratio!<br>
<br>
Fibonacci series is a sequence of numbers where the next number is the sum of the previous two numbers. The first 2 numbers are taken to be 0 and 1. To illustrate:<br>
<br>
1st Fibonacci number = 0<br>
2nd Fibonacci number = 1<br>
3rd Fibonacci number = 0 + 1 = 1<br>
4th Fibonacci number = 1 + 1 = 2<br>
5th Fibonacci number = 2 + 1 = 3<br>
6th Fibonacci number = 3 + 2 = 5<br>
…<br>
…<br>
10th Fibonacci number = 34<br>
…<br>
And so on.<br>
<br>
This pattern of numbers is curiously found in several interesting places in nature. One particular property, the ratio of two consecutive fibonacci numbers, like 5/3, or 3/2, or 8/5, or 13/8 approaches the value 1.618. This number, 1.618 is known as the golden ratio – a number with it's own Wikipedia page showing it's occurrence in art, nature, design, music, etc!<br>
<br>
The thing is, the exact Golden ratio number is something like 1.6180339887... and the initial terms of the series give values like 3/2 = 1.5 or 13/8 = 1.625. It is not exactly equal to 1.6180339887..., but it comes closer to the value as we keep moving ahead with the fibonacci series.<br>
<br>
In problems like these, we often have to set a tolerance to know when to end the computation. The tolerance lets us stop the computation when the answer is within 0.01 of the value, or within 0.001 of the value. So if the answer is between (1.618 – 0.01 and 1.618 + 0.01), we can stop generating more fibonacci terms and be done with it.<br>
<br>
In this exercise, we will do the above calculation. The fibRatio(N, threshold) function generates fibonacci numbers and calculates the ratio of the last and last-but-one numbers. The function executes as long as the number of fibonacci terms are lesser than 'N' or the desired accuracy of 'threshold' is reached.<br>
<br>
Using the text-box, the program is given input of the form “5 0.01, 20 0.01, 20 0.0001, 20 0.00001". This is list of the following format - “&lt;number of terms&gt; &lt;threshold&gt;, &lt;number of terms&gt; &lt;threshold&gt;,....”. This text is read by the run() function which we have written, and that calls the fibRatio() function that you will write.<br>
<br>
With this background, let's get started with writing the function!<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		