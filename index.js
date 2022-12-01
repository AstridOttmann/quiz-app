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

// answerButton.addEventListener("click", () => {
//   answerButton.innerHTML = "is true";
//   console.log(answerButton);
// });

const output = document.querySelector('[data-js="answer1"]');
answerButton.addEventListener("click", () => {
  output.textContent = "The statement is true.";
  answerButton.innerHTML = "Hide Answer";
});

// const output = document.querySelector('[data-js="answer1"]');

// answerButton.addEventListener("click", function (showAnswer) {}, {
//   once: true,
// });

// function showAnswer() {
//   output.textContent = "The statement is true.";
//   answerButton.innerHTML = "Hide Answer";
// }

// if (answerButton.click == true) {
//   answerButton.innerHTML = "Hide Answer";
//   output.textContent = "The statement is true.";
// } else {
//   answerButton.innerHTML = "Show Answer";
//   output.textContent = "";
// }

// const output = document.querySelector('[data-js="answer1"]');
// answerButton.addEventListener("click", (i) => {
//   for (let i = 0; i++; ) {
//     if (i % 2 === 0) {
//       output.textContent = "";
//       answerButton.innerHTML = "Show Answer";
//     } else {
//       output.textContent = "The statement is true.";
//       answerButton.innerHTML = "Hide Answer";
//     }
//   }
// });

// answerButton.addEventListener("mouseup", (e) => {
//   let output = document.querySelector('[data-js="answer1"]');
//   switch (e.answerButton) {
//     case 0:
//       output.textContent = "The statement is true.";
//       answerButton.innerHTML = "Hide Answer";
//       break;
//     case 1:
//       output.textContent = "";
//       answerButton.innerHTML = "Show Answer";
//       break;
//   }
// });
