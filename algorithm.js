function v1(longer, shorter, count) {
	return longer > shorter * count ? shorter : longer / count;
}

function v2(longer, shorter, count) {
	if (shorter * count < longer) return shorter;
	if (shorter * count > longer * 2) return shorter / 2;
	return longer / count;
}

function expensive(longer, shorter, count) {
	// `shorter` is the largest possible size, so we count
	// the size down from there until all the boxes fit for one!
	for (let size = shorter; size > 0; size--) {
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
		if (y + size <= shorter) return size;
	}
}

const algorithm = expensive;
