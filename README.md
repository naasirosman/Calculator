# Calculator


Improvements to be made:

- when wanting to start a new operation after a completing another operation, the calculator doesn't refresh i.e. the old answer is not a placeholder

- the calculator is not good with decimals (it always rounds down/up)

- if you try use another operator on an answer, the new answer is not accurate e.g. 2 + 3 = 5 ... * 2 should give an answer of 10 but it comes out as 20. answer gets less accurate the more operators you use

- a/c doesn't remove the memory therefore i had to change a/c  button into a refresh button

- once you use an operator, there is no going back e.g. if you type 5 * - 3, it should give an answer of 2 but it gives an answer of -15.
This may be good as the calculator is reading it as 5 multiplied by negative three. however if the second operator used is * or /, it returns 0

- the calculator does not round recurring numbers e.g. 2/3 is 0.667, the calculator return 0.6666666666666666666 until it overflows the screen