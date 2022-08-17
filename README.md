# Calculator

How the calculator works (JavaScript):

- Calc is split into to the screen (sumBox) number buttons and operator buttons

- Clicking of a number button adds numbers to the screen via the inner HTML of whatever is clicked

- Clicking of a function button stores whatevers on the screen at the time into a preOperation variable and allows user to input more numbers, and then when the user presses the equals operator, the calc carries out the operation using whatever is on the screen and whatever was on the screen (preOperation variable)

- A/C operator refreshes the page as to remove memory (reset what is stored in the preOperation variable)

- Error messages include "NaN" when the answer is not a number and "infinity" when something is divided by 0
(Both of these are built-in into JavaScript)

- When first using the calculator, "0" is manually treated as a placeholder so when a number button is clicked, the number replaces 0



Improvements to be made:

- when wanting to start a new operation after a completing another operation, the calculator doesn't refresh i.e. the preOperation variable from the previous operation is still stored.

- a/c doesn't remove the memory therefore i had to change a/c  button into a refresh button

- the calculator is not good with decimals (it always rounds down/up)

- if you try use another operator on an answer, the new answer is not accurate e.g. 2 + 3 = 5 ... * 2 should give an answer of 10 but it comes out as 20. answer gets less accurate the more operators you use

- once you use an operator, there is no going back e.g. if you type 5 * - 3, it should give an answer of 2 but it gives an answer of -15.
This may be good as the calculator is reading it as 5 multiplied by negative three. however if the second operator used is * or /, it returns 0

- the calculator does not round recurring numbers e.g. 2/3 is 0.667, the calculator return 0.6666666666666666666 until it overflows the screen



The Repository (HTML & CSS):

- buttons use the < button > tag
- the calc is subdivided into rows (divs)
    - first row - the screen
    - second row - the a/c, +/-, %, ÷ and so on...
- each row is given the flexbox style and contents (buttons are spread out)
- each button is styled to fit the iOS style calculator
