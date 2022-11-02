import "./Input.css";

function Input({
    placeholder,
    style,
    name,
    type,
    onChange,
    min,
    max,
    step,
    pattern,
}) {
    return (
        <input
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
        ></input>
    );
}

export default Input;
