import "./CardsBg.css";

import card1 from "../../assets/creature_13.png";
import card2 from "../../assets/counter-strategy_6.png";
import card3 from "../../assets/strategy_9.png";

import backCard from "../../assets/card_back.png";

import RotatingCard from "../RotatingCard/RotatingCard";
import { useEffect, useState } from "react";

const frontList = [card1, card2, card3];
const backCardImage = backCard;

function frontCardImage() {
	return frontList[Math.floor(Math.random() * 3)];
}

function CardsBg({ active }: { active?: boolean }) {
	const [isPhone, setIsPhone] = useState(false);

	const [cardList, setCardList] = useState<any>([]);
	const cardNumber = 100;
	let swt = true;

	const handleCards = (active: boolean, nrOfCards: number) => {
		const tempCardList: any = [];
		if (active) {
			for (let i = 0; i < nrOfCards; i++) {
				swt = !swt;
				tempCardList.push(
					<RotatingCard
						key={i}
						frontOfCard={
							<img
								src={swt ? backCardImage : frontCardImage()}
								alt="front of card"
							/>
						}
						backOfCard={
							<img
								src={!swt ? backCardImage : frontCardImage()}
								alt="back of card"
							/>
						}
						style={{
							width: "50px",
							height: "100px",
							position: "absolute",
							top: -Math.floor(Math.random() * 101) - 100 + "%",
							left: Math.floor(Math.random() * 101) + "%",
							animation: `7s ${
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
			setCardList(tempCardList);
		} else {
			setCardList([]);
		}
	};

	useEffect(() => {
		handleCards(!isPhone, cardNumber);
	}, [isPhone, cardNumber]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsPhone(document.body.clientWidth < 768);
		});
	}, []);

	return <div className="CardsBg">{cardList}</div>;
}

export default CardsBg;
