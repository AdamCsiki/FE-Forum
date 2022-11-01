import "./Button.css";

function Button({ id, children, onClick, type, style }) {
    return (
        <button
            id={id}
            className="Button"
            type={type}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
}

export default Button;
