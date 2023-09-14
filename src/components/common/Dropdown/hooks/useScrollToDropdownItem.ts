export default ({
	parent,
	target,
}: {
	parent: HTMLElement | null;
	target: HTMLElement | null;
}) => {
	if (parent && target) {
		console.log(parent.scrollTop);
		// 12 is padding height
		// 48 is line item height
		if (target.offsetTop > parent.offsetHeight - 48) {
			parent.scrollTo({
				top: target.offsetTop - parent.offsetHeight + 48 + 12,
			});
		} else {
			// console.log("LOL", target.offsetTop, parent.offsetHeight);
		}
	}
};
