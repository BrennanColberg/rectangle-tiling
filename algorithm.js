function v1(longer, shorter, count) {
	return longer > shorter * count ? shorter : longer / count;
}

function v2(longer, shorter, count) {
	if (shorter * count < longer) return shorter;
	if (shorter * count > longer * 2) return shorter / 2;
	return longer / count;
}

// helper for later algorithms
function sizeOverflows(longer, shorter, count, size) {
	// simulate putting in `count` boxes
	let x = 0; // same axis as `longer`
	let y = 0; // same axis as `shorter`
	for (let i = 0; i < count; i++) {
		x += size;
		// wrap around whenever we overflow on the long side
		if (x > longer) {
			x = size;
			y += size;
		}
	}
	// if we *aren't* overflowing on the short side, this is
	// the biggest size that fits, so we should return it!
	return y + size > shorter;
}

function expensive(longer, shorter, count) {
	// `shorter` is the largest possible size, so we count
	// the size down from there until all the boxes fit for one!
	for (let size = shorter; size > 0; size--) {
		if (!sizeOverflows(longer, shorter, count, size)) return size;
	}
}

// relies on the assumption that above a certain width *all* insertions
// overflow, and below it *none* do
function binarySearch(longer, shorter, count) {
	let size = Math.floor(shorter / 2);
	let delta = Math.floor(shorter / 4);

	do {
		console.log(size, delta);
		size += (sizeOverflows(longer, shorter, count, size) ? -1 : 1) * delta;
		delta = Math.floor(delta / 2);
	} while (delta > 0);

	return size;
}

const algorithm = binarySearch;
