/*En caso de querer cambiar tanto las imagenes como el texto de su respectivo botón, se debe modificar el objeto usoX. la imagen debe encontrarse en la ruta img, y solo hay que indicar en el objeto el nombre y la extensión. En caso de no entender, guíese por los valores predeterminados. */


//Directorio
const directorio = "../img/";

//usoX

const uso1 = {
	text: "Naves Industriales",
	img: "img1.jpg"
}

const uso2 = {
	text: "Cámaras Frigoríficas",
	img: "img2.jpg"
}

const uso3 = {
	text: "Sector Avícola",
	img: "img3.jpg"
}

const uso4 = {
	text: "Sector Porcino",
	img: "img4.jpg"
}

const uso5 = {
	text: "Celdas de Acopio",
	img: "img5.jpg"
}

const uso6 = {
	text: "Fermentos Industriales",
	img: "img6.jpg"
}

const uso7 = {
	text: "Furgones",
	img: "img7.jpg"
}


/* No modificar lo que sigue abajo */


//GET from DOM

const divImagen = document.getElementById("img-uso");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");


//set
btn1.innerHTML = uso1.text;
btn2.innerHTML = uso2.text;
btn3.innerHTML = uso3.text;
btn4.innerHTML = uso4.text;
btn5.innerHTML = uso5.text;
btn6.innerHTML = uso6.text;
btn7.innerHTML = uso7.text;


btn1.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso1.img}")`;

}
btn2.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso2.img}")`;

}
btn3.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso3.img}")`;

}
btn4.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso4.img}")`;

}
btn5.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso5.img}")`;

}
btn6.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso6.img}")`;

}
btn7.onclick = () => { 
	divImagen.style.backgroundImage = `url("${directorio}${uso7.img}")`;

}

window.onload = () => {
	btn1.click();
}























