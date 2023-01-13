import "./InvisButton.css";

function InvisButton({
	children,
	style,
	onClick,
	id,
}: {
	children?: any;
	style?: React.CSSProperties;
	onClick?: () => void;
	id?: string;
}) {
	return (
		<button
			id={id}
			className="InvisButton"
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default InvisButton;
