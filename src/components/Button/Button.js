import "./Button.css";

function Button({ id, children, style }) {
    return (
        <button
            id={id}
            className="Button"
            type={"button"}
            style={style}
        >
            {children}
        </button>
    );
}

export default Button;
