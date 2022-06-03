import { useState } from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Form from "../../components/Form";
import TitleLogo from "../../components/TitleLogo";

const Login = () => {

    const [inputs, setInputs] = useState([
        {
            label: "Username",
            name: "username",
            type: "text",
            value: "",
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: "",
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Panggil API untuk check username & password
        // Jika valid maka masukkan token ke localStorage
        // Jika tidak valid maka muncul alert error

        setInputs([...inputs], inputs[0].value = "", inputs[1].value = "");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <TitleLogo />
                <Form inputs={inputs} setInputs={setInputs} />
                <button type="submit" className={styles.login_btn}>Login</button>
            </form>
        </div>
    );
};

export default Login;