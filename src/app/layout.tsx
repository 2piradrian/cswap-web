import "../style/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>C-Swap</title>
				<meta name="description" content="Diseño web en Córdoba, Argentina." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
