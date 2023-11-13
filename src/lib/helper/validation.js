export const validateEmail = (txt) => {
	const regexp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

	return regexp.test(txt);
};

export const validateSubdomain = (txt) => {
	// only lowercase letters and numbers
	const regexp = /^[a-z0-9]*$/gm;
	// const regexp = /^[a-zA-Z0-9_.-]*$/gm;

	return regexp.test(txt);
};
