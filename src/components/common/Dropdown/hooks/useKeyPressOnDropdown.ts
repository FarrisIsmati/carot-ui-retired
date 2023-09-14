import React, { useState } from "react";

export default function (targetKey: string, preventDefault: boolean) {
	const [keyPressed, setKeyPressed] = useState(false);

	function downHandler(e: KeyboardEvent) {
		if (preventDefault) {
			e.preventDefault();
		}
		if (e.key === targetKey) {
			setKeyPressed(true);
		}
	}

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
}
