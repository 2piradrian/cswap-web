import React from "react";
import "../global/global.css";

type Props = {
	children: React.ReactNode;
	background?: string;
	height?: boolean;
	id?: string;
};

function Container({ children, background, height, id }: Props) {
	// Custom styles in container
	const containerStyle = {
		backgroundColor: background ? background : "var(--background)",
		minHeight: height ? "100vh" : "auto",
	};

	return (
		<section className="container" style={containerStyle} id={id}>
			<div className="content">{children}</div>
		</section>
	);
}

export default Container;
