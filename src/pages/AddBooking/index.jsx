import React, { useState } from "react";
import Select from "react-select";

/** Components */
import Container from "../../components/Layouts/Container";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Form from "../../components/Form";

/** Icons */
import { MdEventAvailable } from "react-icons/md";

/** Style */
import styles from "./style.module.css";

const AddBooking = () => {
  const options = [
    [], //user
    [
      { value: 1, label: "Laverna" }, // instructure
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
    ],
    [], //Class
    [
      { value: 1, label: "Online" }, //category
      { value: 0, label: "Offline" },
    ],
    [
      { value: "all", label: "All" }, //status
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];
  const tomorrow = new Date(new Date());
  tomorrow.setDate(tomorrow.getDate() + 1);
  const temp =
    tomorrow.getFullYear() +
    "-" +
    String(tomorrow.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(tomorrow.getDate()).padStart(2, "0");

  const [userSelectedOption, setUserSelectedOption] = useState(null);
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);
  const [capacityInput, setCapacityInput] = useState([
    {
      label: "Schedule",
      name: "schedule",
      type: "date",
      placeholder: "DD/MM/YY",
      value: "",
      min: temp,
    },
  ]);
  const handleSave = () => {};
  return (
    <>
      <Header name="Kevin C" role="Super Admin" />
      <PageTitle icon={<MdEventAvailable />} title="Booking" />
      <Container title="Add New Booking">
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label">Room</label>
                <Select
                  className={styles.select_input}
                  defaultValue={userSelectedOption}
                  onChange={setUserSelectedOption}
                  options={options[0]}
                  placeholder="Class room"
                />

                <label className="label">Instructure</label>
                <Select
                  className={styles.select_input}
                  defaultValue={instructureOption}
                  onChange={setInstructureSelectedOption}
                  options={options[1]}
                  placeholder="Class instructure"
                />

                <label className="label">Class</label>
                <Select
                  className={styles.select_input}
                  defaultValue={classSelectedOption}
                  onChange={setClassSelectedOption}
                  options={options[2]}
                  placeholder="Select class"
                />
              </div>
              <div className="col">
                <label className="label">Category</label>
                <Select
                  className={styles.select_input}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={options[3]}
                  placeholder="Class category"
                />

                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[4]}
                  placeholder="Status"
                />
                <span className={styles.input}>
                  <Form inputs={capacityInput} setInputs={setCapacityInput} />
                </span>
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
    </>
  );
};

export default AddBooking;
