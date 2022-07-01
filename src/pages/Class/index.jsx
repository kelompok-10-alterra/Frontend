import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { IoIosPeople } from "react-icons/io";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useEffect } from "react";
import { deleteClass, getClass } from "../../api";
import Swal from "sweetalert2";

const Class = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState([]);
  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [typeSelectedOption, setTypeSelectedOption] = useState(null);
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
    getClass().then((response) => {
      setDatas(response.data);
      setShow(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0583d2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClass(id).then(async () => {
          getClass().then((response) => {
            setDatas(response.data);
            setShow(response.data);
          });
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleDetail = (id) => {
    // Detail

    navigate(`details-class/${id}`);
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<IoIosPeople />} title="Class" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={classSelectedOption}
              onChange={setClassSelectedOption}
              options={options[0]}
              placeholder="Class"
            />
            <Select
              className={styles.select_input}
              defaultValue={instructureOption}
              onChange={setInstructureSelectedOption}
              options={options[1]}
              placeholder="Instructure"
            />
            <Select
              className={styles.select_input}
              defaultValue={typeSelectedOption}
              onChange={setTypeSelectedOption}
              options={options[2]}
              placeholder="Type"
            />
          </div>
          <div className={styles.filter_wrapper_bottom}>
            <div>
              <Select
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
              />
            </div>
            <Button
              className={styles.btn_add}
              text="+ Add New Class"
              type="button"
              onClick={() => navigate("add-class")}
            />
          </div>
        </section>
        <section>
          <Table
            headers={[
              "ID Class",
              "Room",
              "Instructure",
              "Type",
              "Category",
              "Status",
            ]}
            datas={datas}
            name="class"
            handleDetail={handleDetail}
            handleDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
};

export default Class;
