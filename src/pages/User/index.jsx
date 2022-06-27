import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { FaUserCircle } from "react-icons/fa";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { deleteUserData, getUserData, getUserDataById } from "../../api";

const User = () => {
  const navigate = useNavigate();

  const [userSelectedOption, setUserSelectedOption] = useState([]);
  const [userOption, setUserOption] = useState([{ value: 0, label: "All" }]);
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    getUserData().then((response) => {
      setDatas(response.data);
      setShow(response.data);
    });
  }, []);

  useEffect(() => {
    setUserOption([]);

    datas?.map((user) => {
      let temp = { value: user.userId, label: `${user.userId} - ${user.name}` };
      return setUserOption((oldData) => [...oldData, temp]);
    });
  }, [datas]);

  useEffect(() => {
    if (
      userSelectedOption.value === 0 ||
      userSelectedOption.value === undefined
    ) {
      getUserData().then((response) => {
        setShow(response.data);
      });
    } else {
      getUserDataById(userSelectedOption.value).then((response) => {
        setShow([response.data]);
      });
    }
  }, [userSelectedOption]);

  const handleDelete = (id) => {
    deleteUserData(id).then(navigate("/user"));
    getUserData().then((response) => {
      setShow(response.data);
      setDatas(response.data);
      window.location.reload(true);
    });
  };

  const handleDetail = (id) => {
    navigate(`details-user/${id}`);
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<FaUserCircle />} title="User" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={userSelectedOption}
              onChange={setUserSelectedOption}
              options={userOption}
              placeholder="User"
            />

            <Button
              className={styles.btn_add}
              text="+ Add New User"
              type="button"
              onClick={() => navigate("add-user")}
            />
          </div>
        </section>
        <section>
          {show ? (
            <Table
              name="user"
              headers={["ID", "Name", "Contact", "Email", "Address"]}
              datas={show}
              handleDetail={handleDetail}
              handleDelete={handleDelete}
            />
          ) : (
            <Table
              name="user"
              headers={["ID", "Name", "Contact", "Email", "Address"]}
              datas={datas}
              handleDetail={handleDetail}
              handleDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default User;
