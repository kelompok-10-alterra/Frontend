/** Styles */
import styles from "./style.module.css";

const TableHeader = ({ columns }) => {
    return (
        <ul className={styles.container}>
            <li>ID</li>
            <li>Name</li>
            <li>Contact</li>
            <li>Membership</li>
            <li>Time</li>
            <li>Status</li>
        </ul>
    );
};

export default TableHeader;