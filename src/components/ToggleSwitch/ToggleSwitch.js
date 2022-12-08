import "./ToggleSwitch.css";

function ToggleSwitch({ onClick }) {
	return (
		<label className="ToggleSwitch">
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
