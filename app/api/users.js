import client from "./client";

const register = (userInfo) => client.post("/Authentication/Register", userInfo);

export default { register };
