const darkModeButton = document.querySelector('input[data-js="dark-mode"]');
const bodyElement = document.querySelector('[data-js="body"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

