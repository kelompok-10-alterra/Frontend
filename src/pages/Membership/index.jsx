import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";

import {
  deleteMembership,
  getMember,
  getMembershipData,
  getUserData,
} from "../../api";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVerifiedUser } from "react-icons/md";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";

const Membership = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);

  const [userOptions, setUserOptions] = useState();
  const [userSelectedOption, setUserSelectedOption] = useState(null);
  const [membershipOptions, setMembershipOptions] = useState([]);
  const [membershipSelectedOption, setMembershipSelectedOption] =
    useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const options = [
    [],
    [
      { value: 1, label: "Platinum" },
      { value: 2, label: "Gold" },
      { value: 3, label: "Silver" },
    ],
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];

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
        deleteMembership(id).then(
          getMember().then((response) => {
            setDatas(response.data);
            window.location.reload(true);
          })
        );

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleDetail = (id) => {
    // Detail
    navigate(`details-membership/${id}`);
  };

  useEffect(() => {
    getMember().then((response) => {
      setDatas(response.data);
      console.log(response.data);
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
  }, []);

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<MdVerifiedUser />} title="Membership" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper}>
            <Select
              className={styles.select_input}
              defaultValue={userSelectedOption}
              onChange={setUserSelectedOption}
              options={userOptions}
              placeholder="User"
            />
            <Select
              className={styles.select_input}
              defaultValue={membershipSelectedOption}
              onChange={setMembershipSelectedOption}
              options={options[1]}
              placeholder="Membership"
            />
            <Select
              className={styles.select_input}
              defaultValue={statusSelectedOption}
              onChange={setStatusSelectedOption}
              options={options[2]}
              placeholder="Status"
            />
          </div>
          <Button
            className={styles.btn_add}
            text="+ Add New Member"
            type="button"
            onClick={() => navigate("add-membership")}
          />
        </section>
        <section>
          {datas ? (
            <Table
              headers={[
                "ID",
                "Name",
                "Contact",
                "Membership",
                "Expired",
                "Status",
              ]}
              name="member"
              datas={datas}
              handleDetail={handleDetail}
              handleDelete={handleDelete}
            />
          ) : (
            <Table
              headers={[
                "ID",
                "Name",
                "Contact",
                "Membership",
                "Expired",
                "Status",
              ]}
              name="member"
              datas={[]}
              handleDetail={handleDetail}
              handleDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default Membership;
