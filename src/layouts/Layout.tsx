import React from "react";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
