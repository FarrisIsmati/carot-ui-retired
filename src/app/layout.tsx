import Navbar from "@/components/Navbar";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
	title: "Carot - Financial Vision tool",
	description: "Envision the buisness of your dreams",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ backgroundColor: colorBaseMap[ColorBaseCore.NEUTRAL_10] }}>
				<StyledComponentsRegistry>
					<header>
						<Navbar />
						{/* Basic Sans & Filson Pro */}
						<link rel="stylesheet" href="https://use.typekit.net/wak4qgj.css" />
					</header>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
