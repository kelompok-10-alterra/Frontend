import React, { useState } from "react";
import Select from "react-select";

/** Components */
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Form from "../../components/Form";

/** Icons */
import { IoIosPeople } from "react-icons/io";

/** Style */
import styles from "./style.module.css";
import { useEffect } from "react";
import {
  addClass,
  getCategory,
  getInstructor,
  getRoom,
  getType,
} from "../../api";

const AddClass = () => {
  const tomorrow = new Date(new Date());

  tomorrow.setDate(tomorrow.getDate() + 1);

  const temp =
    tomorrow.getFullYear() +
    "-" +
    String(tomorrow.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(tomorrow.getDate()).padStart(2, "0");

  const [roomSelectedOption, setRoomSelectedOption] = useState(null);
  const [roomOptions, setRoomOptions] = useState(null);

  const [instructureSelectedOption, setInstructureSelectedOption] =
    useState(null);
  const [instructureOptions, setInstructureOptions] = useState(null);

  const [typeSelectedOption, setTypeSelectedOption] = useState(null);
  const [typeOptions, setTypeOptions] = useState(null);

  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState(null);

  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const [capacityInput, setCapacityInput] = useState([
    {
      label: "Capacity",
      name: "capacity",
      type: "number",
      placeholder: "Type class capacity...",
      value: "",
    },
  ]);

  const [descriptionInput, setDescriptionInput] = useState([
    {
      label: "Description",
      name: "description",
      type: "textarea",
      placeholder: "Type class details...",
      value: "",
    },
  ]);

  const [scheduleInput, setScheduleInput] = useState([
    {
      label: "Schedule",
      name: "schedule",
      type: "date",
      placeholder: "dd/mm/yy",
      value: "",
      min: temp,
    },
  ]);

  const [priceInput, setPriceInput] = useState([
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Type class price...",
      value: "",
    },
  ]);

  const options = [
    //status
    { value: true, label: "Active" },
    { value: false, label: "Non-Active" },
  ];
  useEffect(() => {
    getRoom().then((response) => {
      let temp = [];
      response.data.map((data) => {
        return temp.push({ value: data.roomId, label: data.name });
      });
      setRoomOptions(temp);
      console.log(...temp);
    });
    getInstructor().then((response) => {
      let temp = [];

      response.data.map((data) => {
        return temp.push({ value: data.instructorId, label: data.name });
      });
      setInstructureOptions(temp);
    });
    getType().then((response) => {
      let temp = [];
      response.data.map((data) => {
        return temp.push({ value: data.typeId, label: data.name });
      });
      console.log(...temp);
      setTypeOptions(temp);
    });
    getCategory().then((response) => {
      let temp = [];
      response.data.map((data) => {
        return temp.push({ value: data.categoryId, label: data.name });
      });
      setCategoryOptions(temp);
    });
  }, []);
  const handleSave = (e) => {
    e.preventDefault();
    addClass({
      status: statusSelectedOption.value,
      description: descriptionInput[0].value,
      capacity: capacityInput[0].value,
      schedule: scheduleInput[0].value,
      price: priceInput[0].value,
      instructureId: instructureSelectedOption.value,
      categoryId: categorySelectedOption.value,
      roomId: roomSelectedOption.value,
      typeId: typeSelectedOption.value,
    });
  };

  return (
    <>
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
                  options={roomOptions}
                  placeholder="Room"
                />

                <label className="label">Instructure</label>
                <Select
                  className={styles.select_input}
                  defaultValue={instructureSelectedOption}
                  onChange={setInstructureSelectedOption}
                  options={instructureOptions}
                  placeholder="Instructure"
                />

                <label className="label">Type</label>
                <Select
                  className={styles.select_input}
                  defaultValue={typeSelectedOption}
                  onChange={setTypeSelectedOption}
                  options={typeOptions}
                  placeholder="Type"
                />
                <span className={styles.input}>
                  <Form
                    inputs={descriptionInput}
                    setInputs={setDescriptionInput}
                  />
                </span>
              </div>
              <div className="col">
                <label className="label">Category</label>
                <Select
                  className={styles.select_input}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={categoryOptions}
                  placeholder="Category"
                />

                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options}
                  placeholder="Status"
                />

                <span className={styles.input}>
                  <Form inputs={capacityInput} setInputs={setCapacityInput} />
                </span>

                <Form inputs={scheduleInput} setInputs={setScheduleInput} />
                <Form inputs={priceInput} setInputs={setPriceInput} />
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
