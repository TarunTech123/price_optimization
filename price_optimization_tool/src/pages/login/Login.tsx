import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { ButtonField, InputField, Loader } from "../../components";
import { handleLoginSignupAPI } from "../../services/Login_Service";
import { ProviderContext } from "../../context/ContextProvider";
import { ContextType } from "../../utils/types/Types";

type LoginSignUpFormData = {
    email: string;
    password: string;
    role_id?: number
}

const Login: React.FC = () => {

    const { isLoading, setIsLoading } = useContext<ContextType>(ProviderContext);

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [formData, setFormData] = useState<LoginSignUpFormData>({ email: "", password: "" });

    // On User Input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    //Handle API call
    const handleSubmit = async () => {
        if (isLogin) {
            setIsLoading(true);
            await handleLoginSignupAPI('/login', formData).then((res) => {
                localStorage.setItem('token', res?.token as string)
                navigate('/home');
                setIsLoading(false);
                setFormData({ email: "", password: "" })
            }).catch((err) => {
                console.log('oops login', err);
                setIsLoading(false);
            })
        } else {
            setIsLoading(true);
            const data = { ...formData, role_id: 1 }
            await handleLoginSignupAPI('/signup', data).then((res) => {
                localStorage.setItem('token', res?.token as string)
                navigate('/home');
                setIsLoading(false);
                setFormData({ email: "", password: "" })
            }).catch((err) => {
                console.log('oops login', err);
                setIsLoading(false);
            })
        }
        setFormData({ email: "", password: "" })
    };

    return (
        <div className="auth-container">
            {/* Loader */}
            <Loader isVisible={isLoading} />
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