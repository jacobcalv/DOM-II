// Your code goes here

//1
const mainHead = document.querySelector('.logo-heading');
function hightlight(){
    mainHead.style.backgroundColor = 'yellow';
}
mainHead.addEventListener('mouseover', hightlight);
 
//2 
const mainImage = document.querySelector('.intro img');
const img1 = document.querySelector('.img-content img');
const img2 = document.querySelector('.inverse-content .img-content img');
const img3 = document.querySelector('.content-destination img');
function imageSwap(){
    mainImage.src = 'https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    img1.src = 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    img2.src = 'https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    img3.src = 'https://images.pexels.com/photos/2650468/pexels-photo-2650468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
mainImage.addEventListener('dblclick', imageSwap);

//3
let nav = document.querySelector('nav');
let nightMode = document.createElement('a');
let mainNav = document.querySelector('main-navigation');
nightMode.setAttribute("href", "#");
nightMode.textContent = 'Night Mode';
nav.appendChild(nightMode);

function nightFunc(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.mainNav.style.color = 'black';
}

nightMode.addEventListener('click', nightFunc);

//4
// const mainImage = document.querySelector('.intro img');
// const img1 = document.querySelector('.img-content img');
// const img2 = document.querySelector('.inverse-content .img-content img');
// const img3 = document.querySelector('.content-destination img');

function disapear(){
    mainImage.style.width = '0';
    mainImage.style.height = '0';
}

function disapear2(){
    img1.style.width = '0';
    img1.style.height = '0';
}

function disapear3(){
    img2.style.width = '0';
    img2.style.height = '0';
}

function disapear4(){
    img3.style.width = '0';
    img3.style.height = '0';
}

mainImage.addEventListener('drag', disapear);
img1.addEventListener('drag', disapear2);
img2.addEventListener('drag', disapear3);
img3.addEventListener('drag', disapear4);


//5

function keypress(){
    if (event.key === 'z') {
        alert('How many words actually have the letter Z in it?')
    }
}

document.addEventListener('keydown', keypress);

//6

const introText = document.querySelector('.intro p');

introText.addEventListener('mouseenter', func =>{
    introText.style.border = '3px solid black';
    introText.style.padding = '5px';
});

//7

introText.addEventListener('mouseleave', exit =>{
    introText.style.border = 'none';
    introText.style.padding = '0px';
})


