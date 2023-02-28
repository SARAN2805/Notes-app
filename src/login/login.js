import { useState } from "react";
import '../login/login.css'
const LoginForm = () =>{
    const [Uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
      }
    return(
        <form onSubmit={handleSubmit}>
            <div className="login_main">
                <div className="login_form">
                    <h2>Welcome to Login page</h2>
                    <div>
                        <label htmlFor="Uname">Username</label>
                        <input type="text" id="Uname" value={Uname} onChange={(e) => setUname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit"> Login</button>
                </div>
            </div>
        </form>
)}

export default LoginForm;