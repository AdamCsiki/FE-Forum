import { useEffect, useRef, useState } from "react";
import "./DropDown.css";

function DropDown({
	id,
	listId,
	element,
	list,
	style,
	listStyle,
	backgroundColor,
	activeBackgroundColor,
}) {
	const containerRef = useRef();
	const containerListRef = useRef();
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();
	const [visible, setVisible] = useState(false);

	const getPosition = () => {
		setHeight(containerRef.current.getBoundingClientRect().height);
		setWidth(containerRef.current.getBoundingClientRect().width);
	};

	const handleClickedOutside = (event) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.target) &&
			containerListRef.current &&
			!containerListRef.current.contains(event.target)
		) {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", getPosition);
		document.addEventListener("mousedown", handleClickedOutside);
	}, []);

	return (
		<div className="DropDown">
			<button
				id={id}
				className="dropdown-button"
				style={{
					backgroundColor: visible
						? activeBackgroundColor ?? "var(--full-black-90)"
						: backgroundColor ?? "transparent",
					borderRadius: visible ? "1rem 1rem 0 0" : 0,
					boxShadow: visible
						? "var(--full-black) 0px 1px 4px"
						: "none",
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
					backgroundColor: visible
						? activeBackgroundColor ?? "var(--full-black-90)"
						: "transparent",
					boxShadow:
						"var(--full-black) 0px 1px 4px, var(--black) 0px 0px 0px 3px",

					width: width,
					display: visible ? "flex" : "none",
					...listStyle,
				}}
				ref={containerListRef}
			>
				{list ?? "Please add items"}
			</div>
		</div>
	);
}

export default DropDown;
