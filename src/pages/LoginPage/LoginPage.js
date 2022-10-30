import "./LoginPage.css";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";

function LoginPage() {
    return (
        <div className="LoginPage">
            <div className="login-game-logo-container">
                <img
                    id="game-logo-image"
                    src={gameLogo}
                    alt="Game logo"
                />
            </div>
            <h3 style={{ color: "var(--white)", fontWeight: "bold" }}>
                <span style={{ color: "var(--main-color)" }}>Log</span>/in/
            </h3>
            <div className="login-input-container">
                <Input placeholder={"Email"} />
                <Input placeholder={"Password"} />
                <Link to={{ pathname: "/forgot_form" }}>
                    <h6 id="login-forgot-password">Forgot your password?</h6>
                </Link>
            </div>

            <Button id={"login-button"}>Sign In</Button>
        </div>
    );
}

export default LoginPage;
