import { Link } from "react-router-dom";

/** Icons */
import { MdDeleteForever } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

/** Styles */
import styles from "./style.module.css";

const TableData = ({ datas, handleDetail, handleDelete }) => {
    return (
        <ul className={styles.container}>
            <li>1</li>
            <li>Genta Fatuh</li>
            <li>0895633098496</li>
            <li>Yes</li>
            <li>1 Month</li>
            {
                true ?
                    <li style={{ color: "#189F00", fontWeight: "bold" }}>Active</li>
                    :
                    <li style={{ color: "red", fontWeight: "bold" }}>Non-Active</li>
            }
            <CgDetailsMore className={styles.detail_icon} onClick={handleDetail} />
            <MdDeleteForever className={styles.delete_icon} onClick={handleDelete} />
        </ul >
    );
};

export default TableData;