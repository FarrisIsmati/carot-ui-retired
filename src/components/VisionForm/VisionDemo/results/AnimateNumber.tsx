import { useRef } from "react";
import CountUp from "react-countup";

interface AnimateNumberProps {
	value: number;
	decimals?: number;
	duration?: number;
}

const AnimateNumber = ({
	value,
	decimals = 2,
	duration = 1,
}: AnimateNumberProps) => {
	// Revenue
	const valueRef = useRef(value ?? 0);
	const curVal = value ?? 0;
	const prevVal = valueRef.current === undefined ? 0 : valueRef.current;
	if (valueRef.current !== undefined) {
		valueRef.current = curVal;
	}

	return (
		<CountUp
			start={prevVal}
			end={curVal}
			delay={0}
			decimals={decimals}
			duration={duration}
		>
			{({ countUpRef }) => (
				<div>
					<span ref={countUpRef} />
				</div>
			)}
		</CountUp>
	);
};

export default AnimateNumber;
