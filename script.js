var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll("ul button");
console.log(deleteButtons)

//addEventListener to all list items
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggleDone)
	deleteButtons[i].addEventListener("click", deleteEntry)
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	div.className = "listItem"
	var li = document.createElement("li");
	li.addEventListener("click", toggleDone)
	var button = document.createElement("button");
	button.addEventListener("click", deleteEntry)
	var buttonText = document.createTextNode("Delete");
	button.appendChild(buttonText);
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(button);
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done")
}

function deleteEntry(event) {
	console.log(event.path[1])
	event.path[1].remove()
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);