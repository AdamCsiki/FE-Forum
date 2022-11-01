import "./Input.css";

function Input({ placeholder, style }) {
    return (
        <input
            className="Input"
            type={"text"}
            placeholder={placeholder}
            style={style}
        ></input>
    );
}

export default Input;
