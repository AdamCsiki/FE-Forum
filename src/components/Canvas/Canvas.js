import "./Canvas.css";
import frontCardImage from "../../assets/kisspng-yu-gi-oh-trading-card-game-yu-gi-oh-gx-duel-acad-yugioh-cards-5b3fcb51e168d1.1319636315309074739233(1).png";
import backCardImage from "../../assets/Yugioh_Card_Back.jpg";
import RotatingCard from "../RotatingCard/RotatingCard";
import { useEffect } from "react";

function Canvas({ active }) {
	let cardList = [];
	let swt = true;

	console.log(active);

	const handleStart = (active) => {
		if (active) {
			for (let i = 0; i < 100; i++) {
				swt = !swt;
				cardList.push(
					<RotatingCard
						key={i}
						frontOfCard={
							<img
								src={swt ? backCardImage : frontCardImage}
								alt="front of card"
							/>
						}
						backOfCard={
							<img
								src={!swt ? backCardImage : frontCardImage}
								alt="back of card"
							/>
						}
						style={{
							width: "50px",
							height: "100px",
							position: "absolute",
							top: -Math.floor(Math.random() * 101) - 100 + "%",
							left: Math.floor(Math.random() * 101) + "%",
							animation: `8s ${
								Math.random() < 0.5
									? `rotatecardfallleft`
									: `rotatecardfallright`
							} ease infinite`,
							animationDelay:
								Math.floor(Math.random() * 101) + "s",
						}}
					/>
				);
			}
		}
	};

	handleStart(active);

	useEffect(() => {
		handleStart(active);
	}, [active]);

	return <div className="Canvas">{cardList}</div>;
}

export default Canvas;
