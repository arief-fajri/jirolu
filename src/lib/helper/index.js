export const foundItem = (val = '', arr = []) => {
	const found = arr.find((f) => f.value === val);
	if (found) {
		return found.name;
	} else {
		return;
	}
};

export const formatNumber = (number) => new Intl.NumberFormat('id-ID').format(number);

export const formatCurrency = (number) =>
	new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumSignificantDigits: 3
	}).format(number);

export const slugify = (text) => {
	return text
		.trim()
		.toLowerCase()
		.replace(/[^\w\s\-]+/g, '')
		.replace(/ +/g, '-');
};

export const formatNumberCompact = (num, digits) => {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'rb' },
		{ value: 1e6, symbol: 'jt' },
		{ value: 1e9, symbol: 'M' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var item = lookup
		.slice()
		.reverse()
		.find(function (item) {
			return num >= item.value;
		});
	return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const debounce = (f, timeToWaitBeforeFiringInMs = 1000) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			f.apply(this, args);
		}, timeToWaitBeforeFiringInMs);
	};
};
