import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdEventAvailable } from "react-icons/md";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useEffect } from "react";
import { getBooking, getBookingById } from "../../api";

const Booking = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState([]);
  const [bookingSelectedOption, setBookingSelectedOption] = useState([]);
  const [bookingOptions, setBookingOptions] = useState();
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const options = [
    [],
    [],
    [],
    [
      { value: 0, label: "Online" },
      { value: 1, label: "Offline" },
    ],
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];

  useEffect(() => {
    getBooking().then(response => {
      setDatas(response.data);
      setShow(response.data);
    });
  }, []);

  useEffect(() => {
    setBookingOptions([{ value: 0, label: "All" }]);

    datas?.map((data) => {
      let temp = {
        value: data.bookingId,
        label: `${data.bookingId} - ${data.userName}`,
      };
      return setBookingOptions((oldData) => [...oldData, temp]);
    });
  }, [datas]);

  useEffect(() => {
    console.log(bookingSelectedOption.value)
    if (
      bookingSelectedOption.value === 0 ||
      bookingSelectedOption.value === undefined
    ) {
      getBooking().then((response) => {
        setShow(response.data);
      });
    } else {
      getBookingById(bookingSelectedOption.value).then((response) => {
        console.log(response)
        setShow([response.data]);
      });
    }
  }, [bookingSelectedOption]);

  const handleDelete = (id) => {
    // Delete
  };

  const handleDetail = (id) => {
    // Detail

    navigate("details-booking");
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<MdEventAvailable />} title="Booking" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={bookingSelectedOption}
              onChange={setBookingSelectedOption}
              options={bookingOptions}
              placeholder="Booking"
            />
            <Button
              className={styles.btn_add}
              text="+ Add New Booking"
              type="button"
              onClick={() => navigate("add-booking")}
            />
            {/* <Select
              className={styles.select_input}
              defaultValue={instructureOption}
              onChange={setInstructureSelectedOption}
              options={options[1]}
              placeholder="Instructure"
            />
            <Select
              className={styles.select_input}
              defaultValue={classSelectedOption}
              onChange={setClassSelectedOption}
              options={options[2]}
              placeholder="Class"
            /> */}
          </div>
          <div className={styles.filter_wrapper_bottom}>
            <div>
              {/* <Select
                className={styles.select_input}
                defaultValue={categorySelectedOption}
                onChange={setCategorySelectedOption}
                options={options[3]}
                placeholder="Category"
              />
              <Select
                className={styles.select_input}
                defaultValue={statusSelectedOption}
                onChange={setStatusSelectedOption}
                options={options[4]}
                placeholder="Status"
              /> */}
            </div>
          </div>
        </section>
        <section>
          <Table
            headers={[
              "ID Booking",
              "User",
              "Instructure",
              "Class",
              "Category",
              "Status",
            ]}
            name="booking"
            datas={show ? show : datas}
            handleDetail={() => handleDetail()}
            handleDelete={() => { }}
          />
        </section>
      </main>
    </div>
  );
};

export default Booking;
