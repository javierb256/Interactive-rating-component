const start = document.querySelector(".start");
const submit = document.querySelector(".submit");
const resultContainer = document.querySelector('.result-container');

// resultContainer.style.display = 'block'

submit.addEventListener("click", ()=> {
    start.style.display = 'none';
    resultContainer.style.display = 'block';
})