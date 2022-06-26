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
  return axios.get("/capstone/user", auth());
};
export const getUserDataById = async (id) => {
  return axios.get(`capstone/user/user?userId=${id}`, auth());
};

export const addUserData = async (payload) => {
  const { name, username, password, email, phone, address } = payload;
  return axios.post(
    "capstone/user/admin",
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
export const deleteUserData = async (userId) => {
  return axios.delete(`capstone/user?userID=${userId}`, auth());
};
export const editUserData = async (payload) => {
  const { id, name, username, password, email, phone, address } = payload;
  return axios.put(
    `capstone/user/user/${id}`,
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
