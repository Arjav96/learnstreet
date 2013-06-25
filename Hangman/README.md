
Welcome! Here is a Hangman project I built on LearnStreet's Code Garage using javascript.
===============================================================================================================

Project description
-------------------------

Hangman is a guessing game for two or more players. One player thinks of a word and the other tries to guess it by suggesting letters. 
<br>
The word to guess is represented by a row of dashes, giving the number of letters. If the guessing player suggests a letter which occurs in the word, the other player writes it in all its correct positions. If the suggested letter does not occur in the word, the other player draws one element of the hangman diagram. 
<br>
The game is over when the guessing player guesses the whole word correctly or the other player completes the diagram. This diagram is designed to look like a hanging man.
<br>
In this case, the computer will be choosing the word and completing the diagram whereas you will be guessing. 
<br><br>
<b>This game has the following sequence of actions :-</b>
<br>                               
1. The computer chooses a word randomly, in our case a fruit.                
<br>
2. Based on the length of the word, those many “_” appear in the UI which serve as the placeholder for the correctly guessed letters.
<br>                        
3. You guess a letter from the alphabet displayed. It needs to be figured out if the letter is present in the word chosen.
<br>                                  
4. If present,  then the computer strikes it off the alphabet.                       
<br>
5. After striking off the correct letter from the alphabet, it updates the word display with the letter in all correct positions. 
  <br>                                        
6. If the chosen letter does not appear in the word, the computer incrementally draws the hanging man. After 7 missed chances it               completes the drawing and you lose.  
                                                   
Your task in this project is to fill in the missing piece of code which will help accomplish tasks 2, 3, 5 and 6 above.                                             

Try it out!
--------------

Want to see my project for yourself? [Click here](http://www.learnstreet.com//view_profile/51c89d7576b99c7cca00018f/project)

Check out out more coding projects you can do in LearnStreet's Code Garage
		