
Welcome! Here is a Seven Segment project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

In this simple project, you'll try to illuminate a mock-up of a 7 segment LCD, all done with Javascript. In a text box, we would like the user to enter a number or many numbers, and we would like to display that as a 7 segment LCD.<br>
<br>
In a seven segment LCD display, like the one's you may have seen in certain electronic displays, numbers are represented by 7 lines. Various combinations of switching on line 1, switching off line 3, on for line 4 and so on show shapes which look like numbers.<br>
<br>
The seven segments are :<br>
<br><code>
 -<br>
| |<br>
 -<br>
| |<br>
 -<br></code>
<br>
And they are labelled from the top clockwise as a,b,c,d,e,f and g for the center. As an example, the digit 1 is shown by switching on (b,c) and switching off everything else. The digit 8 is shown by switching on everything, and the digit 0 by switching on all except g.<br>
<br>
If you're working with electronics, you'll quite often come across these sort of displays. At the core of operating these displays is the fact that we have to set up a mapping of sorts, such that 1 -&gt; "off, on, on, off, off, off, off" and so on. This is what we will attempt to do in our first function.<br>
<br>
To show a 7-segment LCD like display to the user, we have created a table of 5 rows and 3 columns. we have changed their sizes to make it look like lines where needed. Further, to make these elements modifiable, we have given an id to the table cells and using Javascript, we can change the color of these segments to illuminate or switch off corresponding portions of the 7 segment display. This happens in the back-end when you return the appropriate pattern.<br>
<br>
We have to produce a pattern which is equivalent to the seven segment display from it. Based on this pattern we have to switch on or switch off that corresponding portion of the display.<br>
<br>
First, some background about the HTML used to setup the display and what sort of pattern it expects. An excerpt of the HTML used to set up the display is as follows:<br>
<br>
&lt;table&gt;<br>
....<br>
&lt;td id="seg0" class="n" ...&gt;<br>
&lt;td id="seg5" class="n" ...&gt;<br>
&lt;td class="n" ...&gt;<br>
&lt;td id="seg1" class="n" ...&gt;<br>
<br>
By switching the class from "n" to "y" for a segment, its color from white to red. Using Javascript, the class names can be changed based on the digits entered.<br>
<br>
Further, input can be extracted from a textbox using Javascript and change class names of the table cells to alter the color. With this in mind, let's start the first function and watch the associated hints.<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		