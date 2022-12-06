import "./Logo.css";
import TimaraLogo from "../../img/TimaraFinal5WCut.png";

function Logo({ style }) {
	return (
		<img
			className="logo-image"
			src={TimaraLogo}
			alt={"Logo"}
			style={{
				...style,
			}}
		/>
	);
}

export default Logo;
