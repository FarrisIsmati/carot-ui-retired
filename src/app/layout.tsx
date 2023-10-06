import Navbar from "@/components/Navbar";
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
			<body>
				<StyledComponentsRegistry>
					<header>
						<Navbar />
						{/* Basic Sans & Filson Pro */}
						<link rel="stylesheet" href="https://use.typekit.net/wak4qgj.css" />
					</header>
					{children}
					<footer>Footer</footer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
