// Your code goes here


const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('keydown', e => {
  console.log(`this is the blank key: ${e.code}`)
})
const navLogoHeading = document.querySelector('.logo-heading');
navLogoHeading.addEventListener('mouseleave', (e) => e.target.style.transform = "scale(1.0)");

// Hover over the header to make the header reappear. 
const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("mouseenter", () => {
navContainer.style.opacity = "1";
});

const newNav = document.querySelector("nav");
newNav.addEventListener("mouseover", e => {   
    e.target.style.color = "orange";
})

newNav.addEventListener('click', (e) => 
{e.preventDefault(); console.log("clicked on navlink");
}); 

const textContent = document.querySelector('.text-content');
// dblclick to make underlined
textContent.addEventListener('dblclick', e => {
  e.target.style.textDecoration = "underline";
});

const div = document.querySelector('.btn');

div.addEventListener('click', (e) => {
div.innerHTML = `click count: ${e.detail}`;
});

const destination = document.querySelectorAll(`.destination`);

destination[0].addEventListener('click', function(e) {
 console.log('Hello');
});


const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.addEventListener('click', e => {

//  target you are clicking on
console.log(`this is my target: ${e.target}`) 
  
// target that you added the event listener to.
console.log(`this is my current target: ${e.currentTarget}`)

    e.stopPropagation();
})

const funBusBanner = document.querySelector(".intro > img" );
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.25)');


const button = document.querySelectorAll('.btn');
button.forEach(node => {node.addEventListener('dblclick', function()
{let name = prompt('Enter name'); alert(`${name} you are signed up!`);})});


footer = document.querySelector('.footer');
footer.addEventListener('contextmenu', (e) => 
{e.target.style.backgroundColor = 'MediumTurquoise';})


const allExpeditionsTitle = document.querySelectorAll('.destination h4')
allExpeditionsTitle.forEach(node => {node.addEventListener('mousemove', (e) => {e.target.style.color = 'MediumSeaGreen'})});


const adventureAwaits = document.querySelectorAll('.text-content h2')
adventureAwaits.forEach(node => {node.addEventListener('mousemove', (e) => {e.target.style.color = 'Maroon'})});
