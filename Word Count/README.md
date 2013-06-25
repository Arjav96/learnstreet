
Welcome! Here is a Word Count project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

In this programming exercise, we will try to count and extract the words in a user's input. This may span one or more sentences, may include all sorts of alphabets, numbers and characters. And we are not going to use split and count functions, but instead perform it ourselves to learn the logic of how many of these operations are performed.<br>
<br>
If you come across a sentence like, "Leaves are green, roses are red" it's easy for us to see that there are 6 words. But how do we make a computer carry out this task? Let's try to arrive at a logic for doing such a thing.<br>
<br>
At first look, it seems to me that if we count the number of spaces, that could definitely tell us something. In the above string, if we count the occurrence of a space character, " ", we get 5. Hmm, not bad, add 1 to it and we should have the number of words. But alas, it's not that simple. As this will not work if the user had typed something like this, "Leaves are   green,roses are red. "<br>
<br>
How do we handle that? Well, keeping track of two things could help - if we pass through the string one character at a time, maybe we can check if are we in a word, or if we are in a separator / gap between words. That could help us arrive at a logic on how to count and extract words from sentences.<br>
<br>
Let's see what happens when we do such a thing. The first line is an example sentence. This is followed by a True or Fales (T or F) line which shows if the character above seems like a part of a word or a part of space, comma, period or some separator.<br>
<br><code>
Sentence: "Leaves are   green,roses are red. "<br>
In word?:  TTTTTTFTTTFFFTTTTTFTTTTTFTTTFTTTFF<br>
In sep.?:  FFFFFFTFFFTTTFFFFFTFFFFFTFFFTFFFTT<br>
Count   :  1------2-----3-----4-----5---6----<br>
<br></code>
After spending time to look at the checks of In Word and In Separator, we see if there is a pattern which could indicate when to increase the word count from 1 to 2 to 3 to 4 and so on.<br>
<br>
We add another layer to make this point clear:<br>
<br><code>
Sentence: "Leaves are   green,roses are red. "<br>
In word?:  TTTTTTFTTTFFFTTTTTFTTTTTFTTTFTTTFF<br>
In sep.?:  FFFFFFTFFFTTTFFFFFTFFFFFTFFFTFFFTT<br>
Count   :  1------2-----3-----4-----5---6----<br>
Interest:  ------**----**----**----**--**----<br></code>
<br>
See if you can notice a trend near the ** signs. Everytime we count another word, there is a pattern in the lines of In Word an In Sep. To make it clear, we rewrite as:<br>
<br><code>
Sentence: "Leaves are   green,roses are red. "<br>
In word?:  ------FT----FT----FT----FT--FT----<br>
In sep.?:  ------TF----TF----TF----TF--TF----<br>
Count   :  1------2-----3-----4-----5---6----<br>
Interest:  ------**----**----**----**--**----<br>
<br></code>
A word has begun everytime we encounter an alphabet following a space or some separating character. So if we have a True in space followed by True in alphabet for the next character, we have come across a new word.<br>
<br>
Knowing that a character belongs to a word or not, and keeping count of words, we can also save that character to a new place and hence extract all the words of the sentence. With this logic, let's start writing our first function!<br>

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		