console.clear();

const form = document.querySelector('[data-js="create-card-form"]');
const formSection = document.querySelector('[data-js="create-card"]');

//für counter:
const questionInputField = document.querySelector(
  '[data-js="questionInputField"]'
);
const answerInputField = document.querySelector('[data-js="answerInputField"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');

function counterReset() {
  amountLeftQuestion.textContent = "150";
  amountLeftAnswer.textContent = "150";
}
counterReset();

//submit event:
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //input-object
  const formularData = new FormData(event.target);
  const data = Object.fromEntries(formularData);
  console.log(data);
  //create card
  const myCard = document.createElement("section");
  myCard.classList.add("question-card");
  formSection.append(myCard);

  const myCardBookmarkButton = document.createElement("button");
  myCardBookmarkButton.classList.add("question-card__bookmark-button");
  myCard.append(myCardBookmarkButton);

  const questionTitle = document.createElement("h2");
  questionTitle.textContent = "Question #";
  myCard.append(questionTitle);

  const myQuestion = document.createElement("p");
  myCard.append(myQuestion);

  const myAnswerButton = document.createElement("button");
  myAnswerButton.classList.add("question-card__answer-button");
  myAnswerButton.textContent = "Show Answer";
  myCard.append(myAnswerButton);

  const myAnswer = document.createElement("p");
  myAnswer.classList.add("answer", "hidden");
  myCard.append(myAnswer);
  //insert the form's data
  const questionInput = data["your-question"];
  myQuestion.textContent = questionInput;

  const answerInput = data["your-answer"];
  myAnswer.textContent = answerInput;

  myAnswerButton.addEventListener("click", () => {
    myAnswer.classList.toggle("hidden");
    if (myAnswerButton.textContent === "Show Answer") {
      myAnswerButton.textContent = "Hide Answer";
      myAnswerButton.classList.add("switchtohide");
    } else {
      myAnswerButton.textContent = "Show Answer";
      myAnswerButton.classList.remove("switchtohide");
    }
  });
  event.target.reset();
  form["your-question"].focus();
  counterReset();
});

//counter:
function countBackwards(event) {
  const inputField = event.target;
  const maxLength = inputField.getAttribute("maxlength");

  const updateAmountLeft = (value) => {
    inputField === questionInputField
      ? (amountLeftQuestion.innerText = value)
      : (amountLeftAnswer.innerText = value);
  };
  updateAmountLeft(maxLength - inputField.value.length);
}

questionInputField.addEventListener("input", countBackwards);
answerInputField.addEventListener("input", countBackwards);

/*const questionInputField = document.querySelector(
  '[data-js="questionInputField"]'
);
const answerInputField = document.querySelector('[data-js="answerInputField"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');

function countBackwards(event) {
  const inputField = event.target;
  const maxLength = inputField.getAttribute("maxlength");

  const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
  };

  updateAmountLeft(maxLength);
  updateAmountLeft(maxLength - inputField.value.length);
}

questionInputField.addEventListener("input", countBackwards);
answerInputField.addEventListener("input", countBackwards);
*/
