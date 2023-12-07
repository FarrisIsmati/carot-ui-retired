import Type from "@/components/common/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer4, spacer8 } from "@/styles/sizes";
import { Props as LegendProps } from "recharts/types/component/Legend";
import { styled } from "styled-components";

const LegendContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;

const LegenedItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${spacer12};
	padding: ${spacer12};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

const LegendCircle = styled.div<{ color?: string }>`
	width: ${spacer12};
	height: ${spacer12};
	border-radius: 50%;
	background-color: ${(props) =>
		props.color || colorBaseMap[ColorBaseCore.BLACK]};
`;

export default (props: LegendProps) => {
	const { payload } = props;

	if (payload) {
		return (
			<LegendContainer>
				{payload.map((entry, index) => (
					<LegenedItem key={`item-${index}`}>
						<LegendCircle color={entry.color} />
						<Type semanticfont={semanticFonts.bodyLarge}>{entry.value}</Type>
					</LegenedItem>
				))}
			</LegendContainer>
		);
	}

	// TODO: Fix
	return <p>EMPTY</p>;
};
