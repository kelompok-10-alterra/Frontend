import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Form from "../../components/Form";
import TitleLogo from "../../components/TitleLogo";

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

    // axios.post(
    //   "/auth/login",
    //   JSON.stringify({
    //     username: inputs[0].value,
    //     password: inputs[1].value,
    //   }),
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     withCredentials: true,
    //   }
    // );

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
      withCredentials: true,
    };
    axios
      .post(
        "/auth/login",
        {
          username: inputs[0].value,
          password: inputs[1].value,
        },
        axiosConfig
      )
      .then((result) => {
        console.log(result.data);
        // localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
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
