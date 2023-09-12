import React, { useState } from "react";

export default function (targetKey: string) {
	const [keyPressed, setKeyPressed] = useState(false);

	function downHandler({ key }: { key: string }) {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	}

	const upHandler = ({ key }: { key: string }) => {
		if (key === targetKey) {
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
