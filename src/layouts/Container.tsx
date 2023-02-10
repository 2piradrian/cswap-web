import React from "react";
import "../global/global.css";

type Props = {
	children: React.ReactNode;
	background?: string;
	height?: string;
};

function Container({ children, background, height }: Props) {
	// Custom styles in container
	const containerStyle = {
		backgroundColor: background ? background : "var(--background)",
		height: height ? height : "auto",
	};

	return (
		<section className="container" style={containerStyle}>
			<div className="content">{children}</div>
		</section>
	);
}

export default Container;
