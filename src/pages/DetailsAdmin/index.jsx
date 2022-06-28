import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { editUserData, getUserDataById } from "../../api";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVpnKey } from "react-icons/md";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Container from "../../components/Layouts/Container";
import Details from "../../components/Details";
import Form from "../../components/Form";

const DetailsUser = () => {
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
    getUserDataById(params.uid).then((response) => {
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
          disabled: true,
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
      phone: firstInput[1].value,
      address: secondInput[1].value,
    })
      .then((result) => {
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageTitle icon={<MdVpnKey />} title="Manage Admin" />
      <Container title="Details Admin">
        <div className="container no-pl mt-2">
          <div className="row">
            <div className="col">
              <Details title="ID Admin" text={data?.userId} />
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

export default DetailsUser;
