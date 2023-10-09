import Dropdown from "@/components/common/Dropdown";
import { DropdownData } from "@/components/common/Dropdown/types";
import React, { useEffect, useState } from "react";
import { useField } from "react-final-form";
import useFormErrorState from "../hooks/useFormErrorState";

export interface FormDropdownProps {
	fieldName: string;
	dataset: DropdownData[];
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default ({
	fieldName,
	dataset,
	onChange,
	onBlur,
}: FormDropdownProps) => {
	const field = useField(fieldName);
	const input = field.input;

	// Local field value state
	const [localValue, setLocalValue] = useState("");
	useEffect(() => {
		setLocalValue(input.value || "");
	}, [input.value]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setLocalValue(newValue);
		onChange?.(e);
	};

	const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		input.onChange(newValue);
		input.onBlur(e);
		onBlur?.(e);
	};

	const { erroredFieldName } = useFormErrorState({
		validateFields: [fieldName],
	});

	return (
		<>
			<Dropdown
				label="Industry"
				placeholder="Select"
				dataset={dataset}
				error={!!erroredFieldName}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
			/>
		</>
	);
};
