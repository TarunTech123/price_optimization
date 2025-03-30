import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { ButtonField, InputField } from "../../components";

const Login: React.FC = () => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (isLogin) {
            console.log("Logging in with:", formData);
            navigate('/home');
        } else {
            console.log("Signing up with:", formData);
            navigate('/home');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? "Login" : "Signup"}</h2>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'email')}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'password')}
                    />
                    <ButtonField
                        type='button'
                        onClick={handleSubmit}
                        label={isLogin ? "Login" : "Signup"}
                        isPrimary={true}
                    />
                </form>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default Login;