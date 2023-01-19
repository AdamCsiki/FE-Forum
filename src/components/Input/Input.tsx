import { HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";
import "./Input.css";

function Input({
	ref,
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
	value,
}: {
	ref?: any;
	id?: string;
	placeholder?: string;
	style?: React.CSSProperties;
	name?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: (e: any) => void;
	min?: number;
	max?: number;
	step?: number;
	pattern?: string;
	required?: any;
	value?: any;
}) {
	return (
		<input
			ref={ref}
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
			value={value}
		></input>
	);
}

export default Input;
