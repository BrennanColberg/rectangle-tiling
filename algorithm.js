// function v1(longer, shorter, count) {
// 	return longer > shorter * count ? shorter : longer / count;
// }

// function v2(longer, shorter, count) {
// 	if (shorter * count < longer) return shorter;
// 	if (shorter * count > longer * 2) return shorter / 2;
// 	return longer / count;
// }

// // helper for later algorithms
// function expensiveOverflows(longer, shorter, count, size) {
// 	// simulate putting in `count` boxes
// 	let x = 0; // same axis as `longer`
// 	let y = 0; // same axis as `shorter`
// 	for (let i = 0; i < count; i++) {
// 		x += size;
// 		// wrap around whenever we overflow on the long side
// 		if (x > longer) {
// 			x = size;
// 			y += size;
// 		}
// 	}
// 	// if we *aren't* overflowing on the short side, this is
// 	// the biggest size that fits, so we should return it!
// 	return y + size > shorter;
// }

// function expensive(longer, shorter, count) {
// 	// shorter side is the largest possible size
// 	let size = shorter;
// 	// count down until one size doesn't overflow
// 	while (!overflows(longer, shorter, count, size)) size--;
// 	// return the biggest (integer) option that doesn't overflow
// 	return size;
// }

// function overflows(longer, shorter, count, size) {
// 	const boxesPerRow = Math.floor(longer / size);
// 	const totalHeight = Math.ceil(count / boxesPerRow) * size;
// 	return totalHeight > shorter;
// }

// // relies on the assumption that above a certain width *all* insertions
// // overflow, and below it *none* do
// function binarySearch(longer, shorter, count) {
// 	// binary search to get close
// 	let size = Math.floor(shorter / 2);
// 	let delta = Math.floor(shorter / 4);
// 	do {
// 		if (overflows(longer, shorter, count, size)) size -= Math.ceil(delta);
// 		else size += Math.ceil(delta);
// 		delta /= 2;
// 	} while (delta > 1);
// 	// go up then down to confirm in case search is off
// 	size++;
// 	while (overflows(longer, shorter, count, size)) size--;
// 	return size;
// }

function maxSizeWithRowCount(longer, shorter, boxesInRow, boxes) {
	const boxesInColumn = Math.ceil(boxes / boxesInRow);
	const areaAspectRatio = longer / shorter;
	const boxesAspectRatio = boxesInRow / boxesInColumn;
	if (areaAspectRatio > boxesAspectRatio) return shorter / boxesInColumn;
	else return longer / boxesInRow;
}

function direct(longer, shorter, boxes) {
	// number of boxes in row/columns if aspect ratios matched perfectly
	const x = Math.min(Math.sqrt(boxes / (shorter / longer)), boxes);
	const y = Math.sqrt(boxes / (longer / shorter));
	console.log({ x, y });

	let size = 0;
	for (let boxesInRow = Math.floor(x); boxesInRow <= boxes; boxesInRow++) {
		const newSize = maxSizeWithRowCount(longer, shorter, boxesInRow, boxes);
		if (newSize < size) break;
		size = newSize;
		console.log({
			boxesInRow,
			size,
			constrainedBy: size * boxesInRow === longer ? "longer" : "shorter",
		});
	}
	return size;
}

const algorithm = direct;
