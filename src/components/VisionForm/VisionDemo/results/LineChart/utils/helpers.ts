/**
 * Generates a number by N digits entered
 * If you enter 1 you'll get 1
 * If you enter 3 you'll get 100
 * @param n
 * @returns
 */
export const generateNumberByDigits = (n: number) => {
	if (n === 1) {
		return 1;
	}

	let str = "1";
	for (let i = 1; i < n; i++) {
		str += "0";
	}
	return parseInt(str);
};
