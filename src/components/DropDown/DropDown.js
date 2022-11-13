import { useEffect, useRef, useState } from "react";
import "./DropDown.css";

function DropDown({ id, listId, element, list, style, listStyle }) {
	const containerRef = useRef();
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();
	const [x, setX] = useState();
	const [y, setY] = useState();
	const [visible, setVisible] = useState(false);

	const getPosition = () => {
		setX(containerRef.current.offsetLeft);
		setY(containerRef.current.offsetTop);
		setHeight(containerRef.current.clientHeight);
		setWidth(containerRef.current.clientWidth);
	};

	useEffect(() => {
		getPosition();
		console.log(x, y, height, width);
		window.addEventListener("resize", getPosition);
	});

	return (
		<>
			<button
				id={id}
				className="DropDown"
				style={{
					backgroundColor: visible
						? "var(--full-black-90)"
						: "transparent",
					borderRadius: visible ? "1rem 1rem 0 0" : 0,
					borderTop: visible ? "1px solid var(--full-black)" : "none",
					borderLeft: visible
						? "1px solid var(--full-black)"
						: "none",
					borderRight: visible
						? "1px solid var(--full-black)"
						: "none",
					boxShadow: visible ? "0 1px 1px var(--full-black)" : "none",
					...style,
				}}
				ref={containerRef}
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{element}
			</button>

			<div
				id={listId}
				className="dropdown-list"
				style={{
					top: y + height,
					left: x,
					width: width + 1,
					display: visible ? "flex" : "none",
					...listStyle,
				}}
			>
				{list}
			</div>
		</>
	);
}

export default DropDown;
