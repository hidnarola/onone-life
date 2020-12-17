import axios from "axios";
import { ADD_TEMPLATE, GET_TEMPLATE } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const addTemplate = (type, data, subject) => async (dispatch) => {
  const obj = {
    type,
    body: data,
    subject,
  };
  const res = await axios.post(`${BASE_URL}/admin/template/add_template`, obj);
  console.log("res: ", res);

  dispatch({
    type: ADD_TEMPLATE,
    payload: { addTemplateMessage: res.data.message },
  });
};

export const getTemplate = (id) => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/admin/template/${id}`);
  console.log("res: ", res);

  dispatch({
    type: GET_TEMPLATE,
    payload: { getTemplateData: res.data },
  });
};
