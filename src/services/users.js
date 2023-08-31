import api from './apiConfig';
// import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/signup", credentials);
    console.log(resp)
    localStorage.setItem("token", resp.data.token);
    // const user = jwtDecode(resp.data.token);
    return resp.data.token;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/login", credentials);
    localStorage.setItem("token", resp.data.token);
    // const user = jwtDecode(resp.data.token);
    return resp.data.token;
  } catch (error) {
    console.error(error)
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
}

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("");
    return res.data;
  }
  return false;
}