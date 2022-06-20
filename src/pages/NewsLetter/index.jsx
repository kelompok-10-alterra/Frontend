import React, { useState } from "react";

/** Component */
import Button from "../../components/Button";
import Form from "../../components/Form";
import PageTitle from "../../components/PageTitle";

/** Styles */
import styles from "./style.module.css";

/** Icons */
import { TiNews } from "react-icons/ti";

const NewsLetter = () => {
  const [inputs, setInputs] = useState([
    {
      label: "",
      name: "title",
      type: "text",
      placeholder: "Type your Title",
      value: "",
    },
    {
      label: "",
      name: "content",
      type: "textarea",
      placeholder: "Type your text here",
      value: "",
    },
  ]);
  const handleClick = () => {
    //
  };
  return (
    <>
      <PageTitle icon={<TiNews />} title="NewsLetter" />
      <div className={styles.container}>
        <div className={styles.head}>
          <h5>Add New Newsletter</h5>
          <Button text="Send" type="submit" onClick={() => handleClick()} />
        </div>
        <div className={styles.wrapper}>
          <Form inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
