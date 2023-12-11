import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer16, spacer24, spacer32, spacer4 } from "@/styles/sizes";
import { Calendar } from "@/types/VisionForm/calendar";
import numeral from "numeral";
import { styled } from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer16};
	padding: ${spacer16} ${spacer24} 0 ${spacer24};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

const ResultsContainer = styled.div`
	display: flex;
	gap: ${spacer32};
	align-items: center;
	justify-content: space-between;
`;

const Divider = styled.div`
	width: 1px;
	height: 44px;
	background-color: ${colorBaseMap[ColorBaseCore.NEUTRAL_8]};
`;

const ResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer4};
	justify-content: flex-start;
	width: 100%;
`;

const AmountContainer = styled.div`
	display: flex;
`;

export interface ResultsOverviewProps {
	currencySymbol: string;
	calendar?: Calendar;
}

export const ResultsOverview = ({
	currencySymbol,
	calendar,
}: ResultsOverviewProps) => {
	const invested = numeral(calendar?.lifetimeInvested ?? 0).format("0,0[.]00");
	const revenue = numeral(calendar?.lifetimeRevenue ?? 0).format("0,0[.]00");
	const profit = numeral(calendar?.lifetimeProfit ?? 0).format("0,0[.]00");
	const expenses = numeral(calendar?.lifetimeExpenses ?? 0).format("0,0[.]00");
	const years = calendar?.years.length;
	return (
		<Container>
			<Type semanticfont={semanticFonts.headlineSmall}>
				Projected {years} year growth
			</Type>
			<ResultsContainer>
				{/* Invested */}
				<ResultContainer>
					<Type
						semanticfont={semanticFonts.bodySmall}
						color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
					>
						Invested
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.bodyMedium}>
							{currencySymbol}
						</Type>
						<Type semanticfont={semanticFonts.headlineLarge}>{invested}</Type>
					</AmountContainer>
				</ResultContainer>

				<Divider />
				<Divider />

				{/* Revenue */}
				<ResultContainer>
					<Type
						semanticfont={semanticFonts.bodySmall}
						color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
					>
						Revenue
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.bodyMedium}>
							{currencySymbol}
						</Type>
						<Type semanticfont={semanticFonts.headlineLarge}>{revenue}</Type>
					</AmountContainer>
				</ResultContainer>
				{/* Expenses */}
				<ResultContainer>
					<Type
						semanticfont={semanticFonts.bodySmall}
						color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
					>
						Expenses
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.bodyMedium}>
							{currencySymbol}
						</Type>
						<Type semanticfont={semanticFonts.headlineLarge}>{expenses}</Type>
					</AmountContainer>
				</ResultContainer>

				<Divider />

				{/* Profit */}
				<ResultContainer>
					<Type
						semanticfont={semanticFonts.bodySmall}
						color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
					>
						Profit
					</Type>
					<AmountContainer>
						<Type semanticfont={semanticFonts.bodyMedium}>
							{currencySymbol}
						</Type>
						<Type semanticfont={semanticFonts.headlineLarge}>{profit}</Type>
					</AmountContainer>
				</ResultContainer>
			</ResultsContainer>
		</Container>
	);
};
