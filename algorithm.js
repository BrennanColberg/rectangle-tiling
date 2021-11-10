function v1(longer, shorter, count) {
	return longer > shorter * count ? shorter : longer / count;
}

function v2(longer, shorter, count) {
	if (shorter * count < longer) return shorter;
	if (shorter * count > longer * 2) return shorter / 2;
	return longer / count;
}

const algorithm = v2;
