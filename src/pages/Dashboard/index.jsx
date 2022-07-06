import React, { useState } from "react";

import { Line } from "react-chartjs-2";

/** Icon */
import { navItems } from "../../utils/navItems";

/** Styles */
import styles from "./style.module.css";

/** Components */
import PageTitle from "../../components/PageTitle";
import Information from "../../components/Information";
import CustomCalendar from "../../components/Calendar";
import Table from "../../components/Table";
import { useEffect } from "react";
import {
  getClass,
  getGraph,
  getInstructor,
  getSumBooking,
  getSumMembership,
  getSumUser,
} from "../../api";
import { MonthView } from "react-calendar";

const Dashboard = () => {
  const [sumMember, setSumMember] = useState(0);
  const [sumUser, setSumUser] = useState(0);
  const [sumBooking, setSumBooking] = useState(0);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total User",
        data: [0],
        fill: false,
        borderColor: "rgba(236, 155, 39)",
      },
      {
        label: "Total Member",
        data: [0],
        fill: false,
        borderColor: "rgba(54, 159, 0)",
      },
    ],
  });

  const [trainerData, setTrainerData] = useState([]);

  const [memberData, setMemberData] = useState([
    {
      id: 1,
      class: "Zumba",
      type: "Online",
      member: 20,
    },
    {
      id: 2,
      class: "Yoga",
      type: "Online",
      member: 40,
    },
    {
      id: 3,
      class: "Zumba",
      type: "Online",
      member: 30,
    },
    {
      id: 4,
      class: "Yoga",
      type: "Online",
      member: 40,
    },
  ]);
  useEffect(() => {
    getSumBooking().then((respond) => setSumBooking(respond.data));
    getSumMembership().then((respond) => setSumMember(respond.data));
    getSumUser().then((respond) => setSumUser(respond.data));
    getInstructor().then((respond) => setTrainerData(respond.data));
    getClass().then((respond) => setMemberData(respond.data));
    let user = [];
    let member = [];
    let months = [];
    getGraph()
      .then(async (respond) => {
        respond.data.map((data) => {
          user.push(data.totalUser);
          member.push(data.totalMember);
          months.push(data.month);
        });
      })
      .then(
        setData({
          labels: months,
          datasets: [
            {
              label: "Total User",
              data: user,
              fill: false,
              borderColor: "rgba(236, 155, 39)",
            },
            {
              label: "Total Member",
              data: member,
              fill: false,
              borderColor: "rgba(54, 159, 0)",
            },
          ],
        })
      );
  }, []);

  return (
    <>
      <PageTitle icon={navItems[0].logo} title="Dashboard" />
      <div className={styles.content_wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.info_wrapper}>
            <Information title={"Membership"} icon={navItems[2].logo}>
              {sumMember}
            </Information>
            <Information title={"User"} icon={navItems[1].logo}>
              {sumUser}
            </Information>
            <Information title={"Booking"} icon={navItems[4].logo}>
              {sumBooking}
            </Information>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Analytics</h4>
            <div className={styles.graph_wrapper}>
              <Line data={data} />
            </div>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Trainer</h4>
            <div className={styles.table_wrapper}>
              {trainerData && (
                <Table
                  headers={["ID", "Name", "Contact", "Address"]}
                  datas={trainerData}
                  name="trainer"
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <CustomCalendar />
          <div className={styles.container}>
            <div className={styles.side_wrapper}>
              <Table
                headers={["Class", "Member"]}
                datas={memberData}
                name="dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
