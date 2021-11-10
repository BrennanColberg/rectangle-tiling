let boxes = 4;

function updateTiling() {
	const area = document.getElementById("area");
	const width = area.clientWidth;
	const height = area.clientHeight;
	const count = boxes;
	const size = computeSizeOfEachVideo(width, height, count);
	console.log({ width, height, count, size });
	document.documentElement.style.setProperty("--size", `${size}px`);
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
