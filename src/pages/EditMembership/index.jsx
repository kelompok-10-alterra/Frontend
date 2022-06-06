import React, { useState } from "react";
import Select from "react-select";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Container from "../../components/Layouts/Container";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Details from "../../components/Details";
import Form from "../../components/Form";
import Button from "../../components/Button";

/** Constant */
import { navItems } from "../../utils/navItems";

/** Images */
import picture from "../../assets/img/profile_picture.png";
import { useNavigate } from "react-router-dom";

const EditMembership = () => {
  const navigate = useNavigate();
  const props = {
    id: 1,
    nama: "Genta Fatuh",
    email: "Gentafatuh@gmail.com",
    contact: "081315484421",
    address: "Jakarta",
    class: ["Zumba A - Online", "Cardio A - Online"],
    status: "Active",
    membership: 3,
    expired: 1,
  };

  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Type your username...",
      value: props.nama,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Type your email...",
      value: props.email,
    },
    {
      label: "Contact",
      name: "contact",
      type: "number",
      placeholder: "Type your phone number ...",
      value: props.contact,
    },
  ]);
  const [addressInp, setAddressInp] = useState([
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Type your address here ...",
      value: props.address,
    },
  ]);
  const options = [
    [
      { value: 1, label: "1 Month" },
      { value: 3, label: "3 Months" },
      { value: 6, label: "6 Months" },
    ],
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];
  const handleSave = () => {
    //save to database
    navigate("/membership");
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content_wrapper}>
        <Header
          icon={navItems[1].logo}
          title="Membership"
          name="Kevin C"
          role="Super Admin"
          picture={picture}
          url="/membership"
        />
        <Container title={"Details Membership"}>
          <div className="container no-pl mt-2">
            <div className="row">
              <div className="col">
                <Details title={"ID User"} text={props.id} />
                <Details title={"Nama"} text={props.nama} />
                <Details title={"Email"} text={props.email} />
              </div>
              <div className="col">
                <Details title={"Contact"} text={props.contact} />
                <Details title={"Address"} text={props.address} />
                <Details
                  title={"Class"}
                  text={props.class?.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                />
              </div>
              <div className="col">
                <Details title={"Status"} text={props.status} />

                {props.membership > 1 ? (
                  <Details
                    title={"Membership"}
                    text={`${props.membership} Months`}
                  />
                ) : (
                  <Details
                    title={"Membership"}
                    text={`${props.membership} Month`}
                  />
                )}
                {props.expired > 1 ? (
                  <Details title={"Expired"} text={`${props.expired} Months`} />
                ) : (
                  <Details title={"Expired"} text={`${props.expired} Month`} />
                )}
              </div>
            </div>
          </div>
        </Container>
        <Container title={"Edit Membership"}>
          <div className="container mt-3 no-pl">
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col">
                  <Form inputs={inputs} setInputs={setInputs} />
                </div>
                <div className="col">
                  <Form inputs={addressInp} setInputs={setAddressInp} />
                  <label className="label mt-3">Status</label>
                  <Select
                    className={` mt-3 ${styles.select_input}`}
                    defaultValue={
                      options[0][
                        options[0].findIndex(
                          (option) => option.value === props.membership
                        )
                      ]
                    }
                    options={options[0]}
                    placeholder="Membership"
                  />
                  <label className="label mt-3"> Membership</label>
                  <Select
                    className={` mt-3 ${styles.select_input}`}
                    defaultValue={
                      options[1][
                        options[1].findIndex(
                          (option) => option.label === props.status
                        )
                      ]
                    }
                    options={options[1]}
                    placeholder="Status"
                  />
                </div>
              </div>
              <span className={styles.button}>
                <Button
                  text="Save"
                  type="submit"
                  onClick={(e) => {
                    handleSave(e);
                  }}
                />
              </span>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EditMembership;
