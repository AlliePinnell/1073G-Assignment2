// constants for query selector
const customNumber = document.getElementById("customNumber");
const myStudentId = document.getElementById("myStudentId");
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
	// Set the student ID text content
	myStudentId.textContent = "Allie Pinnell - 1268163";

	// Change background color based on customNumber value
	if (customNumber.value < 0 || customNumber.value > 100) {
		document.body.style.backgroundColor = "red";
	} else if (customNumber.value >= 0 && customNumber.value <= 20) {
		document.body.style.backgroundColor = "green";
	} else if (customNumber.value > 20 && customNumber.value <= 40) {
		document.body.style.backgroundColor = "blue";
	} else if (customNumber.value > 40 && customNumber.value <= 60) {
		document.body.style.backgroundColor = "orange";
	} else if (customNumber.value > 60 && customNumber.value <= 80) {
		document.body.style.backgroundColor = "purple";
	} else if (customNumber.value > 80 && customNumber.value <= 100) {
		document.body.style.backgroundColor = "yellow";
	}
}

// function to change bg color from random no.
function changeRandomColor() {
	// Generate a random number between 1 and 100 and set it to customNumber
	customNumber.value = Math.floor(Math.random() * 100) + 1;
	changeCustomColor();
}

// function to generate options for select list
function addList() {
	const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
	const selectElement = document.getElementById("imageSelect");

	// Tip: you might have to check length condition so that the list does not keep growing when clicked
	if (selectElement.options.length >= images.length) {
		return;
	}

	// Tip: use createElement and appendChild inside every for loop to add elements to select list from array
	for (let i = 0; i < images.length; i++) {
		let option = document.createElement("option");
		option.value = images[i];
		option.textContent = images[i];
		selectElement.appendChild(option);
	}
}

// function to change image
function changeImage() {
	images.src = "img/" + imageSelect.value;
}

// event listeners for on click event of buttons and select
custColor.addEventListener("click", changeCustomColor);
randColor.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener("click", addList);
imageSelect.addEventListener("change", changeImage);
