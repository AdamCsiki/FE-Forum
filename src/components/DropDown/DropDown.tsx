import { useEffect, useRef, useState } from "react";
import "./DropDown.css";

function DropDown({
	id,
	listId,
	element,
	list,
	onClick,
	active,
	style,
	listStyle,
	backgroundColor,
	activeBackgroundColor,
}: {
	id?: string;
	listId?: string;
	element: any;
	list: any;
	onClick?: () => void;
	active?: boolean;
	style?: React.CSSProperties;
	listStyle?: React.CSSProperties;
	backgroundColor?: any;
	activeBackgroundColor?: any;
}) {
	const containerRef = useRef<any>();
	const containerListRef = useRef<any>();
	const [visible, setVisible] = useState(false);

	const handleClickedOutside = (event: any) => {
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
					borderRadius: visible
						? active
							? "1rem 1rem 0 0"
							: "1rem"
						: 0,
					boxShadow: visible
						? "var(--full-black) 0px 1px 4px"
						: "none",
					...style,
				}}
				ref={containerRef}
				onClick={() => {
					setVisible(!visible);
					onClick?.();
				}}
			>
				{element}
			</button>
			{active && (
				<div
					id={listId}
					className="dropdown-list"
					style={{
						backgroundColor: visible
							? activeBackgroundColor ?? ""
							: "transparent",

						display: visible ? "flex" : "none",
						...listStyle,
					}}
					ref={containerListRef}
				>
					{list ?? "Please add items"}
				</div>
			)}
		</div>
	);
}

export default DropDown;
