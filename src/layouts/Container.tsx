import React from "react";
import "../global/global.css";

type Props = {
	children: React.ReactNode;
	background?: string;
	heigth?: string;
};

function Container({ children, background, heigth }: Props) {
	// Custom styles in container
	const containerStyle = {
		backgroundColor: background ? background : "var(--background)",
		heigth: heigth ? heigth : "auto",
	};

	return (
		<div className="container" style={containerStyle}>
			<div className="content">{children}</div>
		</div>
	);
}

export default Container;
