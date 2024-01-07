import Footer from "@/sections/footer/Footer";
import "../style/globals.css";
import Header from "@/components/header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<title>C-Swap</title>
				<meta name="description" content="Diseño web en Córdoba, Argentina." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
