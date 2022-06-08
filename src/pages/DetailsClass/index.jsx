import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Container from "../../components/Layouts/Container";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Details from "../../components/Details";
import Form from "../../components/Form";
import Button from "../../components/Button";
import TableMembers from "../../components/TableMembers";

/** Icon */
import { IoIosPeople } from "react-icons/io";

/** React js  chart */
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DetailsClass = () => {
  const navigate = useNavigate();
  const props = {
    id: 1123,
    type: "Yoga",
    room: "A",
    instructure: "Ahmad Fauze",
    contact: "08219398",
    address: "Jakarta",
    status: "Active",
    category: 1,
    members: 10,
    capacity: 20,
  };
  const options = [
    [
      { value: 1, label: "A" },
      { value: 2, label: "B" },
    ], //room
    [
      { value: 1, label: "Laverna" }, // instructure
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
      { value: 4, label: "Ahmad Fauze" },
    ],
    [
      { value: 1, label: "Yoga" },
      { value: 2, label: "Zumba" },
    ], //type
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
  const [roomSelectedOption, setRoomSelectedOption] = useState(
    options[0][options[0].findIndex((option) => option.label === props.room)]
  );
  const [instructureOption, setInstructureSelectedOption] = useState(
    options[1][
      options[1].findIndex((option) => option.label === props.instructure)
    ]
  );
  const [typeSelectedOption, setTypeSelectedOption] = useState(
    options[2][options[2].findIndex((option) => option.label === props.type)]
  );
  const [categorySelectedOption, setCategorySelectedOption] = useState(
    options[3][
      options[3].findIndex((option) => option.value === props.category)
    ]
  );
  const [statusSelectedOption, setStatusSelectedOption] = useState(
    options[4][options[4].findIndex((option) => option.label === props.status)]
  );
  const [capacityInput, setCapacityInput] = useState([
    {
      label: "Capacity",
      name: "capacity",
      type: "number",
      placeholder: props.capacity,
      value: props.capacity,
    },
  ]);
  const handleSave = () => {
    //save to database
    navigate("/class");
  };

  const [data, setData] = useState({
    datasets: [
      {
        data: [props.members, props.capacity],
        backgroundColor: ["#0583d2", "#E8F4FC"],
      },
    ],
    labels: ["Members", "Available"],
  });
  return (
    <div className={styles.content_wrapper}>
      <Header name="Kevin C" role="Super Admin" />
      <PageTitle icon={<IoIosPeople />} title="Class" />

      <Container title={"Details Membership"}>
        <div className="container no-pl mt-2">
          <div className="row">
            <div className="col">
              <Details title={"ID Class"} text={props.id} />
              <Details title={"Type"} text={props.type} />
              <Details title={"Room"} text={props.room} />
            </div>
            <div className="col">
              <Details title={"Instructure"} text={props.instructure} />
              <Details title={"Contact Instructure"} text={props.contact} />
              <Details title={"Address"} text={props.address} />
            </div>
            <div className="col">
              <Details title={"Status"} text={props.status} />

              {props.category === 1 ? (
                <Details title={"Category"} text={"Online"} />
              ) : (
                <Details title={"Category"} text={"Offline"} />
              )}
              {props.members > 1 ? (
                <Details
                  title={"Total Members"}
                  text={`${props.members} persons`}
                />
              ) : (
                <Details
                  title={"Total Members"}
                  text={`${props.members} person`}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
      <Container title={"Edit Membership"}>
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
                  placeholder={props.room}
                />

                <label className="label">Instructure</label>
                <Select
                  className={styles.select_input}
                  defaultValue={instructureOption}
                  onChange={setInstructureSelectedOption}
                  options={options[1]}
                  placeholder={props.instructure}
                />

                <label className="label">Type</label>
                <Select
                  className={styles.select_input}
                  defaultValue={typeSelectedOption}
                  onChange={setTypeSelectedOption}
                  options={options[2]}
                  placeholder={props.type}
                />
              </div>
              <div className="col">
                <label className="label">Category</label>
                <Select
                  className={styles.select_input}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={options[3]}
                  placeholder={props.category}
                />

                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[4]}
                  placeholder={props.status}
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

      <PageTitle icon={<IoIosPeople />} title="Class Members" />
      <div className={styles.wrapper}>
        <TableMembers />
        <section className={styles.doughnut}>
          <h5>Current Students</h5>
          <Doughnut data={data} />
        </section>
      </div>
    </div>
  );
};

export default DetailsClass;
