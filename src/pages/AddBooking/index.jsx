import React, { useState } from "react";
import Select from "react-select";

/** Components */
import Container from "../../components/Layouts/Container";
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

  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);
  const [scheduleInput, setScheduleInput] = useState([
    {
      label: "Schedule",
      name: "schedule",
      type: "date",
      placeholder: "mm/dd/yyyy",
      value: "",
      min: temp,
    },
  ]);
  const handleSave = () => {};
  return (
    <>
      <PageTitle icon={<MdEventAvailable />} title="Booking" />
      <Container title="Add New Booking">
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label">Class</label>
                <Select
                  className={styles.select_input}
                  defaultValue={classSelectedOption}
                  onChange={setClassSelectedOption}
                  options={options[2]}
                  placeholder="Class"
                />
                <span className={styles.input}>
                  <Form inputs={scheduleInput} setInputs={setScheduleInput} />
                </span>
              </div>
              <div className="col">
                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[4]}
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
    </>
  );
};

export default AddBooking;
