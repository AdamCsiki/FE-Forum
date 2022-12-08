import "./Input.css";

function Input({
	id,
	placeholder,
	style,
	name,
	type,
	onChange,
	min,
	max,
	step,
	pattern,
	required,
}) {
	return (
		<input
			id={id}
			className="Input"
			type={type ?? "text"}
			placeholder={placeholder}
			style={style}
			name={name}
			onChange={onChange}
			min={min}
			max={max}
			step={step}
			pattern={pattern}
			required={required}
		></input>
	);
}

export default Input;
