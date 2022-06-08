import React from "react";

/** Styles */
import styles from "./style.module.css";

const TableMembers = ({ list }) => {
  const DATA = [
    {
      id: 1,
      name: "Duff",
      status: false,
      created_at: "05/08/2022",
    },
    {
      id: 2,
      name: "Hailee",
      status: true,
      created_at: "04/30/2022",
    },
    {
      id: 3,
      name: "Angele",
      status: true,
      created_at: "08/11/2021",
    },
    {
      id: 4,
      name: "Philippe",
      status: true,
      created_at: "10/11/2021",
    },
    {
      id: 5,
      name: "Tymon",
      status: false,
      created_at: "11/07/2021",
    },
    {
      id: 6,
      name: "Verile",
      status: true,
      created_at: "08/27/2021",
    },
    {
      id: 7,
      name: "Eudora",
      status: true,
      created_at: "01/16/2022",
    },
    {
      id: 8,
      name: "Harland",
      status: true,
      created_at: "11/22/2021",
    },
    {
      id: 9,
      name: "Evyn",
      status: false,
      created_at: "10/09/2021",
    },
    {
      id: 10,
      name: "Darwin",
      status: true,
      created_at: "12/05/2021",
    },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.header}>
        <li>ID</li>
        <li>Name</li>
        <li>Status</li>
        <li>Joined At</li>
      </ul>
      {DATA?.length !== 1 ? (
        DATA.map((data) => {
          const temp = data.status ? (
            <li className={styles.active}>Active</li>
          ) : (
            <li className={styles.notActive}>Not Active</li>
          );
          return (
            <ul className={styles.list_container} key={data.id}>
              <li>{data.id}</li>
              <li>{data.name}</li>
              {temp}
              <li>{data.created_at}</li>
            </ul>
          );
        })
      ) : (
        <ul className={styles.list_container} key={DATA.id}>
          <li>{DATA.name}</li>
          <li>{DATA.status}</li>
          <li>{DATA.created_at}</li>
        </ul>
      )}
    </div>
  );
};

export default TableMembers;
