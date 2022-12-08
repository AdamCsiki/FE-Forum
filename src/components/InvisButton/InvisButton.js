import "./InvisButton.css";

function InvisButton({ children, style, onClick, id }) {
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
