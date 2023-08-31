import api from "./apiConfig";
// import jwtDecode from "jwt-decode";

// export const signUp = async (credentials) => {
//   try {
//     const resp = await api.post("/users/signup", credentials);
//     localStorage.setItem("token", resp.data.token);
//     const user = jwtDecode(resp.data.token);
//   } catch (error) {
//     throw error;
//   }
// };

// export const signIn = async (credentials) => {
//   try {
//     const resp = await api.post("/users/signin", credentials);
//     localStorage.setItem("token", resp.data.token);
//     const user = jwtDecode(resp.data.token);
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

// export const verifyUser = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const res = await api.get("/users/verify");
//     return res.data;
//   }
//   return false;
// };

export const getUsers = async () => {
  try {
    const users = await api.get("/get_users");
    return users.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (comment) => {
  try {
    await api.post("/comment", comment);
  } catch (error) {
    throw error;
  }
};
