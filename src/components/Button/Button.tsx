import "./Button.css";

function Button({
	id,
	children,
	onClick,
	type,
	style,
	disabled,
}: {
	id?: string;
	children?: any;
	onClick?: () => void;
	type?: any;
	style?: React.CSSProperties;
	disabled?: boolean;
}) {
	return (
		<button
			id={id}
			className="Button"
			type={type}
			onClick={onClick}
			style={style}
			disabled={disabled ?? false}
		>
			{children}
		</button>
	);
}

export default Button;
