import { FunctionComponent } from "react";
import './logo.styles.css';
import "@fontsource/poppins";

const Logo: FunctionComponent = () => {
    return (
        <div className="logo">
            <div className="first-layer">
                <p className="remember">Remember</p>
                <p className="me">Me</p>
            </div>
            <div className="second-layer">
                <p className="finance">finance</p>
            </div>
        </div>
    )
}

export default Logo;