import axios from "axios";

const CONFIG = {
  withCredentials: true,
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
  return axios.get("/capstone/user");
};
