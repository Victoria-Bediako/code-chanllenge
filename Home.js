const change = document.getElementById("change");
const redbox = document.getElementById("redbox");

change.addEventListener("click", () => {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  // Change the background color of the content div
  redbox.style.backgroundColor = randomColor;
});

















