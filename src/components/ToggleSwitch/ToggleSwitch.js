import "./ToggleSwitch.css";

function ToggleSwitch({ id, onClick }) {
	return (
		<label
			id={id}
			className="ToggleSwitch"
		>
			<input
				className="toggleswitch-input"
				type="checkbox"
				onClick={onClick}
			/>
			<span className="toggleswitch-slider"></span>
		</label>
	);
}

export default ToggleSwitch;
