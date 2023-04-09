const firstSideInput = document.getElementById("firstSide");
const secondSideInput = document.getElementById("secondSide");
const thirdSideInput = document.getElementById("thirdSide");
const output = document.getElementById("output");
const calculateButton = document.getElementById("submit");

function calculateArea(firstSideNumber, secondSideNumber, thirdSideNumber) {
  const semiPerimeter = calculatePerimeter(
    firstSideNumber,
    secondSideNumber,
    thirdSideNumber
  );
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - firstSideNumber) *
      (semiPerimeter - secondSideNumber) *
      (semiPerimeter - thirdSideNumber)
  );
  output.value = area.toFixed(2);
}

function calculatePerimeter(
  firstSideNumber,
  secondSideNumber,
  thirdSideNumber
) {
  return (firstSideNumber + secondSideNumber + thirdSideNumber) / 2;
}

calculateButton.addEventListener("click", function () {
  const firstSideNumber = Number(firstSideInput.value);
  const secondSideNumber = Number(secondSideInput.value);
  const thirdSideNumber = Number(thirdSideInput.value);

  //!Conditions
  if (firstSideNumber <= 0 || secondSideNumber <= 0 || thirdSideNumber <= 0) {
    alert(
      "Error: Invalid input. The length of a side cannot be less than or equal to zero."
    );
    console.log(
      "Error: Invalid input. The length of a side cannot be less than or equal to zero."
    );
  } else if (
    firstSideNumber + secondSideNumber <= thirdSideNumber ||
    firstSideNumber + thirdSideNumber <= secondSideNumber ||
    secondSideNumber + thirdSideNumber <= firstSideNumber
  ) {
    alert(
      "Error: Invalid input. The sum of the lengths of any two sides must be greater than the length of the third side."
    );

    console.log(
      "Error: Invalid input. The sum of the lengths of any two sides must be greater than the length of the third side."
    );
  } else {
    calculateArea(firstSideNumber, secondSideNumber, thirdSideNumber);
  }
});
