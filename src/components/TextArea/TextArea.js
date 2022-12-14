import "./TextArea.css";

function TextArea({ id, placeholder, style, name, onChange }) {
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
