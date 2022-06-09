import React, { useState } from "react";
import Select from "react-select";

/** Components */
import Container from "../../components/Layouts/Container";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Form from "../../components/Form";

/** Icons */
import { IoIosPeople } from "react-icons/io";

/** Style */
import styles from "./style.module.css";
const AddClass = () => {
  const options = [
    [], //room
    [
      { value: 1, label: "Laverna" }, // instructure
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
    ],
    [], //type
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
  const [roomSelectedOption, setRoomSelectedOption] = useState(null);
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [typeSelectedOption, setTypeSelectedOption] = useState(null);
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);
  const [capacityInput, setCapacityInput] = useState([
    {
      label: "Capacity",
      name: "capacity",
      type: "number",
      placeholder: "Type room capacity... ",
      value: "",
    },
  ]);

  const handleSave = () => {};
  return (
    <>
      <Header name="Kevin C" role="Super Admin" />
      <PageTitle icon={<IoIosPeople />} title="Class" />
      <Container title="Add New Class">
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label">Room</label>
                <Select
                  className={styles.select_input}
                  defaultValue={roomSelectedOption}
                  onChange={setRoomSelectedOption}
                  options={options[0]}
                  placeholder="Room"
                />

                <label className="label">Instructure</label>
                <Select
                  className={styles.select_input}
                  defaultValue={instructureOption}
                  onChange={setInstructureSelectedOption}
                  options={options[1]}
                  placeholder="Instructure"
                />

                <label className="label">Type</label>
                <Select
                  className={styles.select_input}
                  defaultValue={typeSelectedOption}
                  onChange={setTypeSelectedOption}
                  options={options[2]}
                  placeholder="Type"
                />
              </div>
              <div className="col">
                <label className="label">Category</label>
                <Select
                  className={styles.select_input}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={options[3]}
                  placeholder="Category"
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

export default AddClass;
