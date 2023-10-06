"use client";
import React from "react";

export const keyboardDetectionContextDefaut = {
	isUsingKeyboard: true,
};

const KeyboardDetectionContext = React.createContext(
	keyboardDetectionContextDefaut
);

KeyboardDetectionContext.displayName = "KeyboardDetection";

export { KeyboardDetectionContext };
