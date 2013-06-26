
Welcome! Here is a Email Interpreter project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

In this programming exercise, we will try to take a list of email addresses and split the local and domain portions of the address. That sounds like a useful and simple objective, but in doing so, we will have to build several aspects - taking a list and splitting out individual values, parsing an individual value, extracting the username and domain name of the email address and checking for validity. Sounds simple!<br>
<br>
For maximum learning, we will do this without regex and without in-built split functions. And this takes a bit of thinking. This exercise will teach us a lot of programming practices and techniques. Let's start by defining the problem statement in more detail.<br>
<br>
In a typical input from the text box, we expect a comma separated list of email addresses. Such as, " john@google.com, jake@yahoo.com, andrew@hotmail.com". Given this input, we should be able to take out "john", "google.com", "jake", "yahoo.com" and "andrew", "hotmail.com".<br>
<br>
But we must also take care to handle erroneous inputs, like " john@google.com,,123@, spaces are here.com, andrew@hotmail.com". As a programmer, going through strings and handling all these possible cases is a very important skill. Let's start with the first step of extracting values which we expect to be separated by a comma, ",".<br>
<br>
We've designed this exercise to be accomplished in the following way.<br>
1) First, we obtain a string of all the email addresses from the user.<br>
2) From this string, the addresses separated by comma are extracted.<br>
3) For each of these addresses, the local and domain portions of the email address are extracted if they are proper valid inputs.<br>
<br>
So let's get started with the first method to extract comma separated values from a string!<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		