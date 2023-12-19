import ButtonChip from "@/designSystem/Button/ButtonChip";
import { spacer4 } from "@/styles/sizes";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

export type ChipButtonControlState<T extends string | number | symbol> = {
	[key in T]: boolean;
};

const Container = styled.div`
	display: flex;
	gap: ${spacer4};
`;

const ChipButtonControl = <T extends string | number | symbol>({
	state,
	setState,
}: {
	state: ChipButtonControlState<T>;
	setState: Dispatch<SetStateAction<ChipButtonControlState<T>>>;
}) => {
	return (
		<Container>
			{Object.entries(state).map(([label, isActive]) => (
				<ButtonChip
					key={label}
					onClick={() => {
						Object.keys(state).forEach((key) => {
							if (key === label) {
								// @ts-ignore
								state[key] = true;
								return;
							}
							// @ts-ignore
							state[key] = false;
						});
						setState({ ...state });
					}}
					isActive={isActive as boolean}
				>
					{label}
				</ButtonChip>
			))}
		</Container>
	);
};

export default ChipButtonControl;
