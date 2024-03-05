const start = document.querySelector(".start");
const submit = document.querySelector(".submit");
const resultContainer = document.querySelector(".result-container");
const buttons = document.querySelectorAll(".option");
const finalValue = document.querySelector("#finalValue");
let value = 0;

// add an event listener to each rating button
buttons.forEach(button => {
  button.addEventListener("click", e => {
    value = e.target.value;
  });
});

// When survey is submitted make initial screen disappear and replace with results page
submit.addEventListener("click", () => {
  if (value == 0) {
    alert("Please select a rating");
  } else {
    start.style.display = "none";
    resultContainer.style.display = "block";
    finalValue.textContent = value;
  }
});
