import Loading from "../../components/Loading/Loading";

function Canvas() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Loading />
		</div>
	);
}

export default Canvas;
