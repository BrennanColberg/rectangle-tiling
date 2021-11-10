let boxes = 4;

function updateTiling() {
	const area = document.getElementById("area");
	document.documentElement.style.setProperty(
		"--size",
		`${computeSizeOfEachVideo(area.clientWidth, area.clientHeight, boxes)}px`
	);
}

function renderBoxes() {
	const area = document.getElementById("area");
	area.innerHTML = "";
	for (let i = 0; i < boxes; i++)
		area.appendChild(document.createElement("div"));
	document.getElementById("count").innerHTML = boxes;
	updateTiling();
}

window.onload = renderBoxes;
window.onresize = updateTiling;
