import React from "react";
import "./Loading.css";

function Loading({ style }: { style?: React.CSSProperties }) {
	return (
		<div
			className="loading-container"
			style={style}
		>
			<div className="Loading"></div>
		</div>
	);
}

export default Loading;
