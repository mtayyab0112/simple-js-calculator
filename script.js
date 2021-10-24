const outputScreen = document.getElementById("output-screen");

const numbers = (n) => {
  outputScreen.value += n;
};
function operator(o) {
  outputScreen.value += o;
}

const calculate = () => {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid Operation");
    outputScreen.value = "";
  }
};

const allClear = () => {
  outputScreen.value = "";
};
