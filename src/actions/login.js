import { login } from "../apis/login";
import { saveToken } from "../utility/common";

const SET_USER_TOKEN = "SET_USER_TOKEN";
const LOGOUT = "LOGOUT";

const setUserToken = (body) => (dispatch) => {
  return login(body).then((res) => {
    if (res.data.status === true) {
      let token = "Bearer " + res.data.data.access_token;
      saveToken(token);
      dispatch({
        type: SET_USER_TOKEN,
        payload: token,
      });
    }
    return res.data;
  });
};

const logout = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({ type: LOGOUT, payload: {} });
      resolve();
    });
  };
};

export { setUserToken, logout, SET_USER_TOKEN, LOGOUT };
