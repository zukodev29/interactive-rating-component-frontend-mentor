/*This is my second js project and after bit of understanding I ass starter in js
will try to explain this code best as best as I can */
/* So first we have consts for buttons that you see on page for 
1,2,3,4,5 rating buttons and submit rating button/submit button,we are selecting them*/
const firstButton = document.querySelector('.number-one-rate button');
const secondButton = document.querySelector('.number-two-rate button');
const thirdButton = document.querySelector('.number-three-rate button');
const fourthButton = document.querySelector('.number-four-rate button');
const fifthButton = document.querySelector('.number-five-rate button');
const submitButton = document.querySelector('.submit-button');
/*To appear when clicked */
/* This part of code reffers to part of the web page that
appears when you click one out of five rating and then
submit the rating*/
const ratingContainer = document.querySelector('.selected');
const thanksnote =  document.querySelector('#thank-you-note');
const text = document.querySelector('.rating-selected');
const ratingImage = document.querySelector('#rating-image');
const subText = document.querySelector('#sub-title');
/** These consts are for the elements that will disappear once you submit the rating */
const starImage = document.querySelector('.image');
const titleText = document.querySelector('.title');
const ratingText = document.querySelector('.rating-text');
/**This const is for rating buttons */
const ratingButtons = document.querySelectorAll('.rating-buttons button');
/*This variable is for values that you will give to each button in 
code,butt it doesnt have any value,it's null */
let selectedRating = null;
/*Basically ever button here has addEventListener that allows you 
possibility to click the button and it works,we have color of the button
when you click it,value of selected rating,and also it will display
a meesage of the value from button,and for all five buttons its almost the same,
except that it has different value of rating*/
firstButton.addEventListener('click', () => {
    firstButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
    firstButton.style.color = 'rgb(255, 255, 255)';
    selectedRating = 1;
    console.log('Selected rating:' + selectedRating);
});
secondButton.addEventListener('click', () =>{
    secondButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
    secondButton.style.color = 'rgb(255, 255, 255)';
    selectedRating = 2;
    console.log('Selected rating:' + selectedRating);
});
thirdButton.addEventListener('click', () =>{
    thirdButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
    thirdButton.style.color = 'rgb(255, 255, 255)';
    selectedRating = 3;
    console.log('Selected rating:' + selectedRating);
});
fourthButton.addEventListener('click', () =>{
    fourthButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
    fourthButton.style.color = 'rgb(255, 255, 255)';
    selectedRating = 4;
    console.log('Selected rating:' + selectedRating);
});
fifthButton.addEventListener('click', () =>{
    fifthButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
    fifthButton.style.color = 'rgb(255, 255, 255)';
    selectedRating = 5;
    console.log('Selected rating:' + selectedRating);
});
/*Till fifth button it' the same */

/*Submit button works that so when you click sumbit button it's displays elements that appear
only when you click it.Elements before you clicked button "disappears" and only elements that need to
appear after you clicked appears.Block is for elements to display,none are for elements to disappear */

submitButton.addEventListener('click', () => {
    if (selectedRating !== null) {
        ratingContainer.style.display = 'block';
        thanksnote.style.display = 'block';
        ratingImage.style.display = 'block';
        subText.style.display = 'block';
        text.textContent = `You selected ${selectedRating} out of 5`;
        starImage.style.display = 'none';
        titleText.style.display = 'none';
        ratingText.style.display = 'none';
        document.querySelector('.rating-buttons').style.display = 'none';
        submitButton.style.display = 'none';
    }
    /*It's shows you message if you clicked the submit but you haven't chossen rating */
    else if (selectedRating === null) {
        alert('Please select a rating before submitting!');
    }
});
/*When you click button this part of code executes so that rating you have choosen goes in orange color
and other buttons stays the same */
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => {
            btn.style.backgroundColor = 'hsl(213, 19%, 18%)';
            btn.style.color = 'hsl(217, 12%, 63%)';
        });
        button.style.backgroundColor = 'hsl(25, 97%, 53%)';
        button.style.color = 'rgb(255, 255, 255)';
    });
});