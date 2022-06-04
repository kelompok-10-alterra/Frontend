import { Link } from "react-router-dom";

/** Icons */
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

/** Styles */
import styles from "./style.module.css";

const TableData = ({ datas, handleEdit, handleDelete }) => {
    return (
        <ul className={styles.container}>
            <li>1 <Link to="">Detail</Link></li>
            <li>Genta Fatuh</li>
            <li>0895633098496</li>
            <li>Yes</li>
            <li>1 Month</li>
            <li>Non-Active</li>
            <FaEdit className={styles.edit_icon} onClick={handleEdit} />
            <RiDeleteBin5Fill className={styles.delete_icon} onClick={handleDelete} />
        </ul>
    );
};

export default TableData;