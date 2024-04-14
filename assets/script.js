




const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];



const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");
let index = 0

const img = document.querySelector(".banner-img");
let p = document.querySelector("#banner p")


function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
displayDots();


//click Droit///
 arrowRight.addEventListener("click",()=>{
	clickRight();
 })




 function clickRight(){
	const arrayDots = document.querySelectorAll(".dots .dot");
	arrayDots[index].classList.remove("dot_selected");

	index ++

	if (index > slides.length-1) {   
		index = 0	
	}

	arrayDots[index].classList.add("dot_selected");

	img.src = "./assets/images/slideshow/" + slides[index].image
	p.innerHTML = slides[index].tagLine
 }


 
//click gauche///
arrowLeft.addEventListener("click",()=>{
	clickLeft();
 })


 function clickLeft(){
	const arrayDots = document.querySelectorAll(".dots .dot")
	arrayDots[index].classList.remove("dot_selected")

	index --

	if (index < 0) {   
		index = slides.length-1	
	}

	arrayDots[index].classList.add("dot_selected");

	img.src = "./assets/images/slideshow/" + slides[index].image
	p.innerHTML = slides[index].tagLine
 }






