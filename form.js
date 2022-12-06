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
  // create bookmark
  const myCardBookmarkButton = document.createElement("button");
  myCardBookmarkButton.classList.add("question-card__bookmark-button");
  myCard.append(myCardBookmarkButton);

  function renderIcon(node) {
    const bookmarkSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const bookmarkPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    //bookmarkSvg.setAttribute("fill", "currentColor");
    bookmarkSvg.setAttribute("viewBox", "0 0 24 24");
    bookmarkPath.setAttribute("fill", "currentColor");
    bookmarkPath.setAttribute(
      "d",
      "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
    );
    bookmarkSvg.appendChild(bookmarkPath);
    return node.appendChild(bookmarkSvg);
  }
  renderIcon(myCardBookmarkButton);

  myCardBookmarkButton.addEventListener("click", () => {
    myCardBookmarkButton.classList.toggle("active");
  });

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

  const categoryButtons = Array.from(
    document.querySelectorAll(".category-button")
  );
  console.log(categoryButtons);

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const badge = document.createElement("img");
      badge.setAttribute("src", button.value);
      //badge.classList.add("hidden");
      myCard.append(badge);
      console.log(button.value);
    });
  });

  /*
  const badgeHtml = document.createElement("img");
  badgeHtml.setAttribute("src", "./assets/html5-badge.svg");
  badgeHtml.classList.add("hidden");
  myCard.append(badgeHtml);

  const badgeCss = document.createElement("img");
  badgeCss.setAttribute("src", "./assets/html5-badge.svg");
  badgeCss.classList.add("hidden");
  myCard.append(badgeCss);

  const badgeVsCode = document.createElement("img");
  badgeVsCode.setAttribute("src", "./assets/html5-badge.svg");
  badgeVsCode.classList.add("hidden");
  myCard.append(badgeVsCode);

  const badgeJs = document.createElement("img");
  badgeJs.setAttribute("src", "./assets/html5-badge.svg");
  badgeJs.classList.add("hidden");
  myCard.append(badgeJs);
*/

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
