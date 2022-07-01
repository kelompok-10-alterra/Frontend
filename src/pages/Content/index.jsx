import React, { useState } from "react";

/** Component */
import Button from "../../components/Button";
import Form from "../../components/Form";
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import ContentCard from "../../components/ContentCard";

/** Styles */
import styles from "./style.module.css";

/** Icons */
import { MdLibraryAdd } from "react-icons/md";
import { useEffect } from "react";
import { addContent, getContent } from "../../api";
import Swal from "sweetalert2";

const Content = () => {
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
      placeholder: "Type your link youtube here",
      value: "",
      content: true,
    },
  ]);

  const [lists, setLists] = useState([]);

  const handleClick = () => {
    let message = "";
    const title = inputs[0].value;
    const link = inputs[1].value;
    if (title === "" || link === "") {
      message = "Please fill out title and youtube link";
    }
    if (title === "") {
      message = "Title cannot be empty";
    } else if (link === "") {
      message = "Link cannot be empty";
    }
    if (message !== "") {
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
      });
    } else {
      addContent({
        title: title,
        videoUrl: link,
      }).then(async () =>
        getContent().then((response) => setLists(response.data))
      );
      Swal.fire({
        title: "Success!",
        text: "Content has been posted sucessfully!",
        icon: "success",
      });
    }
  };
  useEffect(() => {
    getContent().then((response) => setLists(response.data));
  }, []);

  return (
    <>
      <PageTitle icon={<MdLibraryAdd />} title="Content" />
      <div className={styles.container}>
        <div className={styles.head}>
          <h5>Add New Content</h5>
          <Button text="Send" type="submit" onClick={() => handleClick()} />
        </div>
        <div className={styles.wrapper}>
          <Form inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
      <Container>
        <ContentCard lists={lists} />
      </Container>
    </>
  );
};

export default Content;
