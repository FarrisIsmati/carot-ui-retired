import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer4, spacer8 } from "@/styles/sizes";
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

const Legend = ({
	payload,
}: {
	payload: { color: string; value: string }[];
}) => {
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
};

export default Legend;
