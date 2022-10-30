import "./Input.css";

function Input({ width, height, placeholder }) {
    return (
        <input
            className="Input"
            type={"text"}
            placeholder={placeholder}
            style={{
                width: width ?? "fit-content",
                height: height ?? "fit-content",
            }}
        ></input>
    );
}

export default Input;
