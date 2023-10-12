// Data type required to pass into the dropdown array to render them
export interface DropdownData<T> {
	value: string;
	id: T;
	disabled?: boolean;
}

// Up and down press types on keyboard
export enum PressType {
	DOWN = "DOWN",
	UP = "UP",
}

// Type of dropdown
export enum DropdownType {
	NORMAL = "NORMAL",
	SELECT = "SELECT",
}
