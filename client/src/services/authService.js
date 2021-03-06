import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function loginUser(email, password) {
  const { data: jwt } = await http.post(apiEndpoint + "/user", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
  http.setJwt(getJwt());
}

export function loginUserWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
  http.setJwt(getJwt());
}

export function logoutUser() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  loginUser,
  loginUserWithJwt,
  logoutUser,
  getCurrentUser,
  getJwt
};
