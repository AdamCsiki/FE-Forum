import "./TextArea.css";

function TextArea({
	id,
	placeholder,
	style,
	name,
	onChange,
}: {
	id?: string;
	placeholder?: string;
	style?: React.CSSProperties;
	name?: string;
	onChange?: (e: any) => void;
}) {
	return (
		<textarea
			id={id}
			className="TextArea"
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			style={style}
		></textarea>
	);
}

export default TextArea;
