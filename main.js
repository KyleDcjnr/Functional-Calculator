const btnEl = document.querySelector(".color");
const inputEl = document.querySelector(".output");
const numBox = document.querySelectorAll(".num");
const aritBox = document.querySelectorAll(".arit");
const calcContain = document.querySelector(".calculator");
const formContain = document.querySelector(".form");
const refreshEl = document.querySelector(".refresh");

// Genereate random color value and return it.

const getRandomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

btnEl.addEventListener("click", () => {
  const generateGradient = () => {
    // get two random colors for gradients.
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    // Apply to the elements you'd want it to run on
    calcContain.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
    formContain.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
    inputEl.style.backgroundColor = `#${color1}`;
    inputEl.style.color = `#${color2}`;
    formContain.style.background = `linear-gradient(to left top, #${color1}, #${color2})`;
    // Loop through the elements in a node list
    aritBox.forEach(function (arit) {
      // Do something with each element
      arit.style.backgroundColor = `#${color2}`;
      arit.style.color = `#${color1}`;

      return arit;
    });

    // Loop through the elements in a node list
    numBox.forEach(function (number) {
      // Do something with each element
      number.style.backgroundColor = `#${color1}`;
      number.style.color = `#${color2}`;

      return number;
    });
  };
  generateGradient();
});

// To refersh the page so everything goes back it's original state

// set a function for Refresh

// Attach the refresh function to the button click event
refreshEl.addEventListener("click", () => {
    
    function refreshPage() {
        // Reload the webpage
        location.reload();
      }
      refreshPage()
  });