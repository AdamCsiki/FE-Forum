import "./RotatingCard.css";

function RotatingCard({ frontOfCard, backOfCard, style }) {
	return (
		<div
			className="RotatingCard"
			style={style}
		>
			<div className="the-front">{frontOfCard}</div>
			<div className="the-back">{backOfCard}</div>
		</div>
	);
}

export default RotatingCard;
