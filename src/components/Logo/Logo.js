import "./Logo.css";
import TimaraLogo from "../../img/TimaraFinal5WCut.png";

function Logo({ style }) {
    return (
        <div className="Logo">
            <img
                className="logo-image"
                src={TimaraLogo}
                alt={"Logo"}
                style={{
                    ...style,
                }}
            />
        </div>
    );
}

export default Logo;
