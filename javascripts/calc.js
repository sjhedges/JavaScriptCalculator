var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';
var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');

function setScreen() {
  screen.innerText = leftHand + operator + rightHand;
}

for(var i = 0; i < operatorButtons.length; i++) {
  var button = operatorButtons[i];
  button.addEventListener('click', function() {
    if (leftHand) {
      operator = this.innerText;
      setScreen();
    }
  });
}

for(var i = 0; i < numberButtons.length; i++) {
  var button = numberButtons[i];
  button.addEventListener('click', function() {
  if(operator.length) {
    rightHand += this.innerText;
    if (rightHand === '0' && operator === '/') {
      alert('Invalid Equation!');
      clear();
    }
  }
  else
    leftHand += this.innerText;
  setScreen();
  });
}

function clear () {
  leftHand = '';
  rightHand = '';
  operator = '';
  screen.innerText = '';
}

clearButton.addEventListener('click', function(){
  clear ();
});

equalButton.addEventListener('click', function() {
  console.log(leftHand);
  console.log(operator);
  console.log(rightHand);

  if(leftHand && operator && rightHand) {
    switch(operator) {
      case '+':
        result = parseInt(leftHand) + parseInt(rightHand);
        break;
      case '-':
        result = parseInt(leftHand) - parseInt(rightHand);
        break;
      case 'X':
        result = parseInt(leftHand) * parseInt(rightHand);
        break;
      case '/':
        result = parseInt(leftHand) / parseInt(rightHand);
        break;
      default:
        alert('Invalid Operator');
        return;
    }
    clear ();
    screen.innerText = result;
  } else {
    alert('Invalid Equation!')
  }
});
