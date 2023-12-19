import React, { useState } from "react";

const useKeyPress = (targetKey: string, preventDefault?: boolean) => {
	preventDefault = !!preventDefault;

	const [keyPressed, setKeyPressed] = useState(false);

	// Set state for pressing down on target key
	function downHandler(e: KeyboardEvent) {
		if (preventDefault) {
			e.preventDefault();
		}
		if (e.key === targetKey) {
			setKeyPressed(true);
		}
	}

	// Set state for pressing up on target key
	const upHandler = (e: KeyboardEvent) => {
		if (preventDefault) {
			e.preventDefault();
		}
		if (e.key === targetKey) {
			setKeyPressed(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	});

	return keyPressed;
};

export default useKeyPress;
