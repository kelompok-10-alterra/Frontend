import { useState } from "react";
import Select from "react-select";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import Button from "../../components/Button";
import TableHeader from "../../components/TableHeader";
import TableData from "../../components/TableData";


const Membership = () => {

    const [membershipSelectedOption, setMembershipSelectedOption] = useState(null);

    const [statusSelectedOption, setStatusSelectedOption] = useState(null);

    const [inputs, setInputs] = useState([
        {
            label: null,
            name: "search",
            type: "text",
            placeholder: "Search by Name",
            value: "",
        },
    ]);

    const options = [
        [
            { value: "all", label: "All" },
            { value: 1, label: "Yes" },
            { value: 0, label: "No" },
        ],
        [
            { value: "all", label: "All" },
            { value: 1, label: "Active" },
            { value: 0, label: "Non-Active" },
        ],
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Search
    }

    const handleEdit = (id) => {
        // Edit
    }

    const handleDelete = (id) => {
        // Delete
    }

    const handleDetail = (id) => {
        // Detail
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content_wrapper}>
                {/* <header>Membership</header> */}
                <main>
                    <section>
                        <form onSubmit={handleSearch} className={styles.form_container}>
                            <Form inputs={inputs} setInputs={setInputs} />
                            <Button text="Search" type="submit" onClick={() => { }} />
                        </form>
                        <div className={styles.filter_wrapper}>
                            <Select
                                className={styles.select_input}
                                defaultValue={membershipSelectedOption}
                                onChange={setMembershipSelectedOption}
                                options={options[0]}
                                placeholder="Membership"
                            />
                            <Select
                                className={styles.select_input}
                                defaultValue={statusSelectedOption}
                                onChange={setStatusSelectedOption}
                                options={options[1]}
                                placeholder="Status"
                            />
                        </div>
                        <div className={styles.btn_bottom}>
                            <Button text="Filter" type="button" onClick={() => { }} />
                            <Button text="+ Add New Member" type="button" onClick={() => { }} />
                        </div>
                    </section>
                    <section>
                        <TableHeader />
                        <TableData handleEdit={() => { }} handleDelete={() => { }} handleDetail={() => { }} />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Membership;