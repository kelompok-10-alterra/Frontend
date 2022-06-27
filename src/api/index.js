import axios from "axios";

const CONFIG = {
  withCredentials: true,
};
const auth = () => {
  let respond = {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("SPORTLY_ACCESS")).token
      }`,
      "Content-Type": "application/json",
    },
  };
  return respond;
};
export const getLoginToken = async (payload) => {
  const { username, password } = payload;
  return axios.post(
    "/auth/login?username=" + username + "&password=" + password,
    JSON.stringify({
      username: username,
      password: password,
    }),
    CONFIG
  );
};
export const getUserData = async () => {
  return axios.get("/capstone/user/userAccess/findAllRoleUser", auth());
};
export const getUserDataById = async (id) => {
  return axios.get(
    `/capstone/user/userAccess/getUserById?userId=${id}`,
    auth()
  );
};

export const addUserData = async (payload) => {
  const { name, username, password, email, phone, address } = payload;
  return axios.post(
    "capstone/user/adminAccess/createUser",
    JSON.stringify({
      name,
      username,
      password,
      email,
      phone,
      address,
      imageUrl: "string",
    }),
    auth()
  );
};
export const deleteUserData = async (id) => {
  return axios.delete(`capstone/user/adminAccess/deleteUser/${id}`, auth());
};
export const editUserData = async (payload) => {
  const { id, name, phone, address } = payload;
  return axios.put(
    `capstone/user/userAccess/updateUser/${id}`,
    JSON.stringify({
      name,
      phone,
      address,
      imageUrl: "string",
    }),
    auth()
  );
};
export const getAdminData = async () => {
  return axios.get("/capstone/user/adminAccess/findAllRoleAdmin", auth());
};
export const addRoleToAdmin = async (username) => {
  const respond = await axios.post(
    "/capstone/user/managerOnly/addRoleToUser",
    JSON.stringify({
      username: username,
      roleName: "ROLE_ADMIN",
    }),
    auth()
  );
  return respond;
};
