import client from "./client";

const login = (username, password) => client.post("/Authentication/Login", { username, password });

export default {
  login,
};
