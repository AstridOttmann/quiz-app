console.clear();

// show answer function
const answerButton = document.querySelector('[data-js="answer-button1"]');
const answerText = document.querySelector('[data-js="answer1"]');
console.log(answerButton);

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");

  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
    answerButton.classList.add("switchtohide");
  } else {
    answerButton.textContent = "Show Answer";
    answerButton.classList.remove("switchtohide");
  }
});

const bookmarkButtonAll = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
console.log(bookmarkButtonAll);

bookmarkButtonAll.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

/*
// bookmark function - meine erste Version
const bookmarkButtonAll = Array.from(
  document.getElementsByClassName("question-card__bookmark-button")
);
console.log(bookmarkButtonAll);

for (let i = 0; i <= bookmarkButtonAll.length; i++) {
  bookmarkButtonAll[i].addEventListener("click", () => {
    bookmarkButtonAll[i].classList.toggle("active");
  });
}
*/

/*
// show answer function 
(< am Ende funktioniert nicht - warum eigentlich?)
const answerButton = document.querySelector('[data-js="answer-button1"]');
const answerText = document.querySelector('[data-js="answer1"]');
console.log(answerButton);

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");

  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
*/
