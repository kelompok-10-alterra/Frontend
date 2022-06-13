/** Icons */
import { MdDeleteForever } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

/** Styles */
import styles from "./style.module.css";
import { useState } from "react";

const Table = ({ name, headers, datas, handleDetail, handleDelete }) => {
  return (
    <table>
      <tr>
        {headers.map((header, headerIdx) => (
          <th key={headerIdx}>{header}</th>
        ))}
      </tr>
      {datas.map((data) => {
        let dataList = {};
        if (name === "user" || name === "admin") {
          dataList = {
            id: data.id,
            name: data.name,
            contact: data.phone,
            email: data.email,
            address: data.address,
          };
        }
        return (
          <tr>
            {Object.keys(dataList).map((key, keyIdx) => {
              return key === "status" ? (
                dataList[key] ? (
                  <td
                    style={{ color: "#189F00", fontWeight: "bold" }}
                    key={keyIdx}
                  >
                    {dataList[key]}
                  </td>
                ) : (
                  <td style={{ color: "red", fontWeight: "bold" }} key={keyIdx}>
                    {dataList[key]}
                  </td>
                )
              ) : (
                <td key={keyIdx}>{dataList[key]}</td>
              );
            })}
            <td>
              <CgDetailsMore
                className={styles.detail_icon}
                onClick={() => handleDetail(data.id)}
              />
              <MdDeleteForever
                className={styles.delete_icon}
                onClick={handleDelete}
              />
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
