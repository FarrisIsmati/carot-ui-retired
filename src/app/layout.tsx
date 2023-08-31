import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<header>
					<p>Header</p>
					<nav>Navigate</nav>
					{/* Basic Sans & Poppins */}
					<link rel="stylesheet" href="https://use.typekit.net/wak4qgj.css" />
				</header>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
