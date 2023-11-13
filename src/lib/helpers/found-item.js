export const foundItem = (val = '', arr = []) => {
	const found = arr.find((f) => f.value === val);
	if (found) {
		return found.name;
	} else {
		return;
	}
};
