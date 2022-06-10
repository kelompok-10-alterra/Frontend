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
    [], //Class
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
    [
      //user
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
  const [userSelectedOption, setUserSelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

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
                  options={options[0]}
                  placeholder="Select class"
                />
                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[1]}
                  placeholder="Select Status"
                />
              </div>
              <div className="col">
                <label className="label">User</label>
                <Select
                  className={styles.select_input}
                  defaultValue={userSelectedOption}
                  onChange={setUserSelectedOption}
                  options={options[2]}
                  placeholder="Select User"
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
