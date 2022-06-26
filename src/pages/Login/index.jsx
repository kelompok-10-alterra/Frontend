import { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Form from "../../components/Form";
import TitleLogo from "../../components/TitleLogo";
import { getLoginToken } from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Type your username...",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Type your password...",
      value: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    getLoginToken({
      username: inputs[0].value,
      password: inputs[1].value,
    })
      .then((result) => {
        localStorage.setItem(
          "SPORTLY_ACCESS",
          JSON.stringify({
            token: result.data.access_token,
            user: jwtDecode(result.data.access_token),
          })
        );
        navigate("/dashboard");
      })
      .catch((error) => {
        localStorage.setItem("SPORTLY_ACCESS", "");
      });

    setInputs([...inputs], (inputs[0].value = ""), (inputs[1].value = ""));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <TitleLogo />
        <Form inputs={inputs} setInputs={setInputs} />
        <button type="submit" className={styles.login_btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
