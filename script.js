const startButton = document.getElementById("startButton");
const textInput = document.getElementById("textInput");
const result = document.getElementById("result");
const output = document.getElementById("output");

let startTime, endTime;

startButton.addEventListener("click", () => {
  textInput.value = "";
  result.textContent = "";
  startTime = new Date();
  if (textInput.value.trim() === "") {
    result.textContent = "Please start typing to see your speed.";
  }
  textInput.focus();
});

textInput.addEventListener("input", () => {
  if (!startTime) return;
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;
  const wordsTyped = textInput.value.split(" ").length;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);
  result.textContent = `Your typing speed is ${wpm} words per minute.`;
});

stopButton.addEventListener("click", () => {
  textInput.disabled = true;
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;
  const wordsTyped = textInput.value.split(" ").length;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);
  result.style.display = "none";
  output.textContent += " Your typing speed is " + wpm + " words per minute.";
});
