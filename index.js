let boxes = 4;

function updateTiling() {
	const area = document.getElementById("area");
	const width = area.clientWidth;
	const height = area.clientHeight;
	const longer = Math.max(width, height);
	const shorter = Math.min(width, height);
	const count = boxes;
	const size = algorithm(longer, shorter, count);
	console.log({ width, height, count, size });
	document.documentElement.style.setProperty("--size", `${size}px`);
	document.documentElement.style.setProperty(
		"--direction",
		width > height ? "row" : "column"
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
