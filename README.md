# MorseCode
Nology tech test using Test Driven Development.

## What is it
To build a function, from priorly set tests, that take a users input and convert it into morse code.  Using DOM manipulation to get the input and to display the result in the DOM.

Testing the function to ensure that all requirements of the function work correctly and to remedy any problems as and when they arise.

## Work In Progess


## Issues
  - Issues with testing while having DOM refs in the main js file
    : Looked at Jest doc, fix not working.  Will come back later and     just disable doc references during testing.
  - Flow of functions needs to be corrected
  - Styling & responsiveness need more work

  TEST FAILS
  1 - Can't handle numbers.  Fix by using number to string/split and treat as a char.
  2 - no user input throws up error, need check before going through if statemem to check if empty and returning empty error before going any furter (Set dataHandle.engToMorse to show error in "display) 
