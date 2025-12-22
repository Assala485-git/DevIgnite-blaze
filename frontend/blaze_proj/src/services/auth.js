import API from "./api";
//authentication 

export const login = (data) =>
  API.post("/users/login", data);

export const logout = () =>
  API.post("/users/logout");

export const getMe = () =>
  API.get("/users/profile");

export const signUp = () =>
  API.get("/users");
