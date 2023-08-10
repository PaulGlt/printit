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
] 

document.querySelector(".arrow_left").addEventListener("click", change_img_left)
document.querySelector(".arrow_right").addEventListener("click", change_img_right)

const alldots = document.querySelectorAll(".dot")


let i = 0
function change_img_left() {
	if (i===0){
		i = slides.length - 1
	}
	else{
		i--
	}
	console.log(i)
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[i].image
	document.querySelector("#banner p").innerHTML = slides[i].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	alldots[i].classList.add("dot_selected")
}
function change_img_right() {
	if (i===slides.length - 1){
		i = 0
	}
	else{
		i++
	}
	console.log(slides[i].image)
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[i].image
	document.querySelector("#banner p").innerHTML = slides[i].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	alldots[i].classList.add("dot_selected")
}







