import axios from "axios";
import { GET_EXPERTS_DATA } from "./index";
import { BASE_URL } from "../../constants/Constants";

const token = JSON.parse(localStorage.getItem('AUTHTOKEN'));
const options = {
    headers: {'x-access-token': token}
  };

export const getExperts = (pageSize, offset) => async (dispatch) => {
  const res = await axios.post(`${BASE_URL}/admin/expert`, {
    page: pageSize || 1,
    length: offset || 5,
  }, options);
  // console.log(res);
    dispatch({
    type: GET_EXPERTS_DATA,
    payload: res.data.data,
  });
};
