/** Icons */
import { MdDeleteForever } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

/** Styles */
import styles from "./style.module.css";

const Table = ({ name, headers, datas, handleDetail, handleDelete }) => {
  return (
    <table>
      <tr>
        {headers.map((header, headerIdx) => (
          <th key={headerIdx}>{header}</th>
        ))}
      </tr>
      {datas.map((data, dataIdx) => {
        let dataList = {};
        if (name === "user" || name === "admin") {
          dataList = {
            id: data.userId,
            name: data.name,
            contact: data.phone,
            email: data.email,
            address: data.address,
          };
        }
        if (name === "class") {
          dataList = {
            id: data.classId,
            room: data.roomName,
            instructure: data.instructureName,
            type: data.typeName,
            category: data.categoryName,
            status: data.status,
            joinedAt: data.created_at,
          };
        }
        if (name === "trainer") {
          dataList = {
            id: data.id,
            name: data.name,
            contact: data.phone,
            address: data.address,
          };
        }
        if (name === "dashboard") {
          dataList = {
            class: `${data.class} - ${data.type}`,
            member: data.member,
          };
        }
        if (name === "member") {
          dataList = {
            id: data.membershipId,
            name: data.name,
            contact: data.contact,
            membership: data.memberName,
            status: data.status,
          };
        }

        return (
          <>
            {name === "trainer" || name === "dashboard" ? (
              <tr key={dataIdx}>
                {Object.keys(dataList).map((key, keyIdx) => {
                  return key === "status" ? (
                    dataList[key] ? (
                      <td
                        style={{ color: "#189F00", fontWeight: "bold" }}
                        key={keyIdx}
                      >
                        Active
                      </td>
                    ) : (
                      <td
                        style={{ color: "red", fontWeight: "bold" }}
                        key={keyIdx}
                      >
                        Not-Active
                      </td>
                    )
                  ) : (
                    <td key={keyIdx}>{dataList[key]}</td>
                  );
                })}
              </tr>
            ) : (
              <tr>
                {Object.keys(dataList).map((key, keyIdx) => {
                  return key === "status" ? (
                    dataList[key] ? (
                      <td
                        style={{ color: "#189F00", fontWeight: "bold" }}
                        key={keyIdx}
                      >
                        Active
                      </td>
                    ) : (
                      <td
                        style={{ color: "red", fontWeight: "bold" }}
                        key={keyIdx}
                      >
                        Not-Active
                      </td>
                    )
                  ) : (
                    <td key={keyIdx}>{dataList[key]}</td>
                  );
                })}
                <td key={dataIdx}>
                  <CgDetailsMore
                    className={styles.detail_icon}
                    onClick={() => handleDetail(dataList.id)}
                  />
                  <MdDeleteForever
                    className={styles.delete_icon}
                    onClick={() => handleDelete(dataList.id)}
                  />
                </td>
              </tr>
            )}
          </>
        );
      })}
    </table>
  );
};

export default Table;
