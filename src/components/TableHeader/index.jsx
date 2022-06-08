/** Styles */
import styles from "./style.module.css";

const TableHeader = ({ columns }) => {
    return (
        <ul className={styles.container}>
            {
                columns.map((column) => (
                    <li>{column}</li>
                ))
            }
        </ul>
    );
};

export default TableHeader;