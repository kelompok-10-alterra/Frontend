import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Components */
import Button from "../../components/Button";
import Container from "../../components/Layouts/Container";
import Form from "../../components/Form";
import PageTitle from "../../components/PageTitle";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVerifiedUser } from "react-icons/md";
import { useEffect } from "react";
import {
  addMembership,
  addUserData,
  getAllMembership,
  getMembershipData,
  getUserData,
} from "../../api";

const AddMembership = () => {
  const navigate = useNavigate();
  /**
   * user select options came from api
   * fetch from api then put it in user state
   */
  const [userSelectedOption, setUserSelectedOption] = useState([]);
  const [membershipSelectedOption, setMembershipSelectedOption] = useState([]);
  const [userOptions, setUserOptions] = useState(null);
  const [membershipOptions, setMembershipOptions] = useState(null);

  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Type your name...",
      value: "",
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Type your username...",
      value: "",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Type your email...",
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

  const [secondInputs, setSecondInputs] = useState([
    {
      label: "Contact",
      name: "contact",
      type: "number",
      placeholder: "Type your phone number...",
      value: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Type your address...",
      value: "",
    },
  ]);

  const options = [
    [
      { value: 1, label: "1 Month" },
      { value: 3, label: "3 Months" },
      { value: 6, label: "6 Months" },
    ],
  ];
  useEffect(() => {
    getUserData().then((response) => {
      let temp = [];
      response.data.map((data) => {
        return temp.push({
          value: data.userId,
          label: `${data.userId} - ${data.name}`,
        });
      });
      setUserOptions(temp);
    });
    getMembershipData().then((response) => {
      let temp = [];
      response.data.map((data) => {
        if (data.memberId > 1) {
          return temp.push({
            value: data.memberId,
            label: `${data.memberId} Months`,
          });
        } else {
          return temp.push({
            value: data.memberId,
            label: `${data.memberId} Month`,
          });
        }
      });
      setMembershipOptions(temp);
    });
  }, []);
  const handleAddMembership = (e) => {
    e.preventDefault();
    addMembership({
      userId: userSelectedOption.value,
      memberId: membershipSelectedOption.value,
    }).then((response) => console.log(response));
    // navigate("/membership")
  };
  const handleAddAcount = (e) => {
    e.preventDefault();
    addUserData({
      name: inputs[0].value,
      username: inputs[1].value,
      password: inputs[3].value,
      email: inputs[2].value,
      phone: secondInputs[0].value,
      address: secondInputs[1].value,
    }).then((response) => console.log(response));
  };

  return (
    <div className="content_wrapper">
      <PageTitle icon={<MdVerifiedUser />} title="Membership" />
      <Container title={"Add New Membership"}>
        <div className="container no-pl mt-4">
          <form onSubmit={handleAddMembership}>
            <div className="row">
              <div className="col">
                <label className="label">User</label>
                <Select
                  className={styles.select_input}
                  defaultValue={userSelectedOption}
                  onChange={setUserSelectedOption}
                  options={userOptions}
                  placeholder="User"
                />
              </div>
              <div className="col">
                <label className="label">Membership</label>
                <Select
                  className={styles.select_input}
                  defaultValue={membershipSelectedOption}
                  onChange={setMembershipSelectedOption}
                  options={membershipOptions}
                  placeholder="Membership"
                />
              </div>
            </div>
            <span className={styles.button}>
              <Button
                text="Save"
                type="submit"
                onClick={(e) => {
                  handleAddMembership(e);
                }}
              />
            </span>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddMembership;
