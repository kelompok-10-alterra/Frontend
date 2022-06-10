/** Styles */
import styles from "./style.module.css";

const TableHeader = ({ columns }) => {
    return (
        <ul className={styles.container}>
            {
                columns.map((column, columnIdx) => (
                    <li key={columnIdx}>{column}</li>
                ))
            }
        </ul>
    );
};

export default TableHeader;