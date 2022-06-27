import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { FaUserCircle } from "react-icons/fa";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Container from "../../components/Layouts/Container";
import Details from "../../components/Details";
import Form from "../../components/Form";
import { editUserData, getUserDataById } from "../../api";

const DetailsAdmin = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [firstInput, setFirstInput] = useState([
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "",
      value: "",
    },
    {
      label: "Contact",
      name: "contact",
      type: "text",
      placeholder: "",
      value: "",
    },
  ]);
  const [secondInput, setSecondInput] = useState([
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "",
      value: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "",
      value: "",
    },
  ]);

  useEffect(() => {
    getUserDataById(params.uid).then(function (response) {
      setData(response.data);
      setFirstInput([
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "",
          value: response.data.name,
        },
        {
          label: "Contact",
          name: "contact",
          type: "text",
          placeholder: "",
          value: response.data.phone,
        },
      ]);
      setSecondInput([
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "",
          value: response.data.email,
        },
        {
          label: "Address",
          name: "address",
          type: "text",
          placeholder: "",
          value: response.data.address,
        },
      ]);
    });
  }, []);
  const handleSave = (e) => {
    e.preventDefault();
    editUserData({
      id: params.uid,
      name: firstInput[0].value,
      username: data.username,
      imageURL: data.imageURL,
      phone: firstInput[1].value,
      email: secondInput[0].value,
      address: secondInput[1].value,
    })
      .then((result) => {
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageTitle icon={<FaUserCircle />} title="User" />
      <Container title="Details Admin">
        <div className="container no-pl mt-2">
          <div className="row">
            <div className="col">
              <Details title="ID User" text={data?.userId} />
              <Details title="Name" text={data?.name} />
            </div>
            <div className="col">
              <Details title="Contact" text={data?.phone} />
              <Details title="Email" text={data?.email} />
            </div>
            <div className="col">
              <Details title="Address" text={data?.address} />
            </div>
          </div>
        </div>
      </Container>
      <Container title="Edit Admin">
        <div className="container mt-3 no-pl">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <Form inputs={firstInput} setInputs={setFirstInput} />
              </div>
              <div className="col">
                <Form inputs={secondInput} setInputs={setSecondInput} />
                <span className={styles.button}>
                  <Button
                    text="Save"
                    type="submit"
                    onClick={(e) => {
                      handleSave(e);
                    }}
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default DetailsAdmin;
