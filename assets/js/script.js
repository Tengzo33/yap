const myButton = document.querySelector('#myButton');
const myBox = document.querySelector('#myBox');
let isBoxColorChanged = false;

// Add event listener for transition start on myBox
myBox.addEventListener('transitionstart', () => {
  console.log('Box transition started');
});

// Add event listener for transition end on myBox
myBox.addEventListener('transitionend', () => {
  console.log('Box transition ended');
});

myButton.addEventListener('click',() => {
  if (!isBoxColorChanged) {
    myBox.style.backgroundColor = '#010203';
    isBoxColorChanged = true;
    alert('transition started!');
  } else {
    myBox.style.backgroundColor = '#c23934';
    isBoxColorChanged = false;
    alert('transition ended!');
  }
});
