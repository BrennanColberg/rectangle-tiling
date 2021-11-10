let boxes = 4;

function updateTiling() {
	renderBoxes();
}

function renderBoxes() {
	const area = document.getElementById("area");
	area.innerHTML = "";
	for (let i = 0; i < boxes; i++) {
		console.log("box");
		area.appendChild(document.createElement("div"));
	}
	document.getElementById("count").innerHTML = boxes;
}

window.onload = updateTiling;
window.onresize = updateTiling;
