import "./globals.css";

export const metadata = {
	title: "Landing Codeo",
	description: "Test d'integration pour CODEO",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
