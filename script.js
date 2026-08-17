var memoryValue = 0;

function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num === "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num === "-") return "";
  if (num.toString().includes(".")) {
    var parts = num.toString().split(".");
    return Number(parts[0]).toLocaleString("en") + "." + parts[1];
  }
  var n = Number(num);
  return isNaN(n) ? num : n.toLocaleString("en");
}

function reverseNumberFormat(num) {
  return num.replace(/,/g, '');
}

// ==========================================
//Number and dot handle
// ==========================================
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    var output = getOutput();
    var rawOutput = reverseNumberFormat(output);

    if (this.id === "dot") {
      if (!rawOutput.includes(".")) {
        printOutput(rawOutput === "" ? "0." : rawOutput + ".");
      }
    } else {
      if (!isNaN(rawOutput)) {
        rawOutput = rawOutput + this.id;
        printOutput(rawOutput);
      }
    }
  });
}

// ==========================================
// operator and output
// ==========================================
var operators = document.getElementsByClassName("operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function () {

    // A. Clear All (C)
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    }
    // Clear Entry / Backspace (CE)
    else if (this.id === "backspace") {
      var output = reverseNumberFormat(getOutput());
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    }
    // Memory Plus (M+)
    else if (this.id === "m+") {
      var output = reverseNumberFormat(getOutput());
      if (output !== "") {
        memoryValue += Number(output);
        printOutput("");
      }
    }
    // Memory Minus (M-)
    else if (this.id === "m-") {
      var output = reverseNumberFormat(getOutput());
      if (output !== "") {
        memoryValue -= Number(output);
        printOutput("");
      }
    }
    // Memory Recall (MRC)
    else if (this.id === "mrc") {
      printOutput(memoryValue.toString());
    }
    // Memory Clear (MC)
    else if (this.id === "mc") {
      memoryValue = 0; // empty memory will set 0
    }
    // Percentange % fix
    else if (this.id === "%") {
      var output = reverseNumberFormat(getOutput());
      var history = getHistory();

      if (output !== "") {
        if (history !== "") {
          var lastOperator = history[history.length - 1];
          var baseNum = Number(history.substr(0, history.length - 1));
          
          // plus, minus, multiplication and percentange
          if (lastOperator === "+" || lastOperator === "-") {
            var percentValue = (baseNum * Number(output)) / 100;
            printOutput(percentValue.toString());
          } 
          // * , / percentage
          else if (lastOperator === "*" || lastOperator === "/") {
            var percentValue = Number(output) / 100;
            printOutput(percentValue.toString());
          }
        } else {
          // directly calculate percentage
          var percentValue = Number(output) / 100;
          printOutput(percentValue.toString());
        }
      }
    }
    // +, -, *, /, =
    else {
      var output = getOutput();
      var history = getHistory();

      if (output === "" && history !== "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }

      if (output !== "" || history !== "") {
        output = output === "" ? output : reverseNumberFormat(output);
        history = history + output;

        if (this.id === "=") {
          try {
            var result = eval(history);
            printOutput(result.toString());
            printHistory("");
          } catch (e) {
            printOutput("Error");
          }
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

// ==========================================
// Keyboard Support
// ==========================================
document.addEventListener('keydown', function (event) {
  var key = event.key;

  if (typeof isPowerOn !== "undefined" && !isPowerOn) return;

  // Number and dot (.)
  if ((key >= '0' && key <= '9') || key === '.') {
    var output = getOutput();
    var rawOutput = reverseNumberFormat(output);

    if (key === '.') {
      if (!rawOutput.includes(".")) {
        printOutput(rawOutput === "" ? "0." : rawOutput + ".");
      }
    } else {
      if (!isNaN(rawOutput)) {
        rawOutput = rawOutput + key;
        printOutput(rawOutput);
      }
    }
  }

  // +, -, *, /, %
  else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    var output = getOutput();
    var history = getHistory();

    if (output === "" && history !== "") {
      if (isNaN(history[history.length - 1])) {
        history = history.substr(0, history.length - 1);
      }
    }

    if (output !== "" || history !== "") {
      output = output === "" ? output : reverseNumberFormat(output);
      history = history + output + key;
      printHistory(history);
      printOutput("");
    }
  }

  // hit Enter  to get result
  else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    var output = getOutput();
    var history = getHistory();

    if (output !== "" || history !== "") {
      output = output === "" ? output : reverseNumberFormat(output);
      history = history + output;

      try {
        var result = eval(history);
        printOutput(result.toString());
        printHistory("");
      } catch (e) {
        printOutput("Error");
      }
    }
  }

  // Backspace
  else if (key === 'Backspace') {
    var output = reverseNumberFormat(getOutput());
    if (output) {
      output = output.substr(0, output.length - 1);
      printOutput(output);
    }
  }

  //screen clear by delete button
  else if (key === 'Delete' || key === 'Escape') {
    printHistory("");
    printOutput("");
  }
});