import "./Button.css";

function Button({
	id,
	children,
	onClick,
	type,
	style,
}: {
	id?: string;
	children?: any;
	onClick?: () => void;
	type?: any;
	style?: React.CSSProperties;
}) {
	return (
		<button
			id={id}
			className="Button"
			type={type}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
}

export default Button;
