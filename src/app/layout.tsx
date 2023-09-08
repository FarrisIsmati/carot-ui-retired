import type { Metadata } from "next";
import "./globals.css";

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
				<header>
					<p>Header</p>
					<nav>Navigate</nav>
					{/* Basic Sans */}
					<link rel="stylesheet" href="https://use.typekit.net/wak4qgj.css" />
				</header>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
