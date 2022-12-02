//bookmark function
const bookmarkButton1 = document.querySelector('[data-js="bookmark-button1"]');
bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("active");
});

const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');
bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("active");
});

const bookmarkButton3 = document.querySelector('[data-js="bookmark-button3"]');
bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("active");
});

const bookmarkButton4 = document.querySelector('[data-js="bookmark-button4"]');
bookmarkButton4.addEventListener("click", () => {
  bookmarkButton4.classList.toggle("active");
});

const bookmarkButton5 = document.querySelector('[data-js="bookmark-button5"]');
bookmarkButton5.addEventListener("click", () => {
  bookmarkButton5.classList.toggle("active");
});

// show answer function
const answerButton = document.querySelector('[data-js="answer-button1"]');
const answerText = document.querySelector('[data-js="answer1"]');

/* answerButton.addEventListener("click", () => {
  output.textContent = "The statement is true.";
  answerButton.innerHTML = "Hide Answer";
});*/

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");

  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
