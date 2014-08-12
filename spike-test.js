/*********TinyTest******** 
* The test function will test if two returned values are exactly the same
* //Pass and Fail Examples
* test(square(3), 9) -> Pass : 9 === 9
* test(square(3), 6) -> Fail : 9 expected but got 6
**/

function test(conditionToTest, expectedResult) {
  var failMsg = 'Fail: ' + expectedResult + ' expected but got ' + conditionToTest,
      passMsg = 'Pass: ' + expectedResult + ' === ' + conditionToTest,
      conditionPasses = conditionToTest === expectedResult;

  console.log(conditionPasses ? passMsg : failMsg);
}
