import { FunctionComponent } from 'react';
import './login.styles.css';
import Logo from "../logo/logo.component"

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div className="login">
        <Logo></Logo>
        </div>
    );
}
 
export default Login;