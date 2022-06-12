/** Icons */
import { MdDeleteForever } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

/** Styles */
import styles from "./style.module.css";

const TableData = ({ data, handleDetail, handleDelete }) => {
  return (
    <ul className={styles.container}>
      {Object.keys(data).map((key, keyIdx) => {
        return key === "status" ? (
          data[key] ? (
            <li style={{ color: "#189F00", fontWeight: "bold" }} key={keyIdx}>
              {data[key]}
            </li>
          ) : (
            <li style={{ color: "red", fontWeight: "bold" }} key={keyIdx}>
              {data[key]}
            </li>
          )
        ) : (
          <li key={keyIdx}>{data[key]}</li>
        );
      })}
      <CgDetailsMore className={styles.detail_icon} onClick={handleDetail} />
      <MdDeleteForever className={styles.delete_icon} onClick={handleDelete} />
    </ul>
  );
};

export default TableData;
