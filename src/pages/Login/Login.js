import "./Login.css";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";

function LoginPage() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className="LoginPage">
            <div className="login-header">
                <img
                    id="game-logo-image"
                    src={gameLogo}
                    alt="Game logo"
                />
            </div>
            <form
                className="login-main"
                onSubmit={(e) => setFormData(e)}
            >
                <div className="login-title-container">
                    <h2>
                        <span
                            style={{
                                color: "var(--main-color)",
                                fontSize: "inherit",
                            }}
                        >
                            Log
                        </span>
                        /in/
                    </h2>
                </div>

                <div className="login-input-container">
                    <Input placeholder={"Email"} />
                    <Input placeholder={"Password"} />
                    <Link
                        to={{ pathname: "/forgot_form" }}
                        id="login-forgot-password"
                    >
                        <span>Can't sign in?</span>
                    </Link>
                </div>
                <div className="login-button-container">
                    <Button id={"login-button"}>
                        <span>Sign In</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
