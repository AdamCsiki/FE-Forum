import "./ToggleSwitch.css";

function ToggleSwitch({ onClick }: { onClick: () => void }) {
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
