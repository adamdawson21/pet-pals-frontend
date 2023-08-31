import api from "./apiConfig";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/signup", credentials);
    console.log(resp);
    localStorage.setItem("token", resp.data.token);
    return resp.data.token;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/login", credentials);
    localStorage.setItem("token", resp.data.token);
    localStorage.setItem("username", resp.data.user.username);
    localStorage.setItem("user_id", resp.data.user.id);

    return {
      id: resp.data.user.id,
      username: resp.data.user.username,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.clear();
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

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");
  if (token) {
    return {
      id,
      username,
    };
  }
};

export const addComment = async (comment) => {
  try {
    await api.post("/comment/", comment);
  } catch (error) {
    throw error;
  }
};

export const editComment = async (id, comment) => {
  try {
    await api.put(`/comment/${id}/`, comment);
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const users = await api.get("/get_users");
    return users.data;
  } catch (error) {
    throw error;
  }
};
