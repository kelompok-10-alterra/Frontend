import axios from "axios";

const CONFIG = {
  withCredentials: true,
};

const auth = () => {
  const headers = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      "Content-Type": "application/json",
    },
  };

  return headers;
};

export const getLoginToken = async (payload) => {
  const { username, password } = payload;

  return axios.post(
    `/auth/login?username=${username}&password=${password}`,
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
  return await axios.post(
    "/capstone/user/managerOnly/addRoleToUser",
    JSON.stringify({
      username,
      roleName: "ROLE_ADMIN",
    }),
    auth()
  );
};

export const getMembershipData = async () => {
  return await axios.get("/capstone/member/userAccess/getAllMember", auth());
};

export const addMembership = async ({ userId, memberId }) => {
  return await axios.post(
    "/capstone/membership/adminAccess/createNewMembership",
    JSON.stringify({
      userId,
      memberId,
      status: true,
    }),
    auth()
  );
};

export const getMember = async () => {
  return await axios.get(
    "/capstone/membership/adminAccess/getAllMembership",
    auth()
  );
};

export const getMemberById = async (id) => {
  return await axios.get(
    `/capstone/membership/userAccess/getMembershipById?membershipId=${id}`,
    auth()
  );
};

export const editMembership = async ({ membershipId, userId, memberId }) => {
  return await axios.put(
    `/capstone/membership/adminAccess/updateMembership?membershipId=${membershipId}`,
    JSON.stringify({
      status: true,
      userId,
      memberId,
    }),
    auth()
  );
};

export const deleteMembership = async (id) => {
  return await axios.delete(
    `/capstone/membership/adminAccess/deleteMembership/${id}`,
    auth()
  );
};
