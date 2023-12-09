import ButtonChip from "@/designSystem/Button/ButtonChip";
import { spacer4 } from "@/styles/sizes";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

export interface ChipButtonControlState {
	[chip: string]: boolean;
}

const Container = styled.div`
	display: flex;
	gap: ${spacer4};
`;

export default ({
	state,
	setState,
}: {
	state: ChipButtonControlState;
	setState: Dispatch<SetStateAction<ChipButtonControlState>>;
}) => {
	return (
		<Container>
			{Object.entries(state).map(([label, isActive]) => (
				<ButtonChip
					onClick={() => {
						Object.keys(state).forEach((key) => {
							if (key === label) {
								state[key] = true;
								return;
							}
							state[key] = false;
						});
						setState({ ...state });
					}}
					isActive={isActive}
				>
					{label}
				</ButtonChip>
			))}
		</Container>
	);
};
