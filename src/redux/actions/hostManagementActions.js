import axios from "axios";
import { GET_EXPERTS_DATA, APPROVE_PENDING_REQUEST, ADD_NOTES } from "./index";
import { BASE_URL } from "../../constants/Constants";

const token = JSON.parse(localStorage.getItem("AUTHTOKEN"));
const options = {
  headers: { "x-access-token": token },
};

export const getExperts = (page, limit, status, sortBy) => async (dispatch) => {
  const obj = {
    start: (page - 1) * limit,
    length: limit,
  };
  if (status) {
    obj.status = status;
  }
  if (sortBy) {
    obj.sort_by = sortBy;
  }
  const res = await axios.post(`${BASE_URL}/admin/expert`, obj, options);

  const hostData = res.data.data.map((host) => {
    let cat = [];
    if (host.userData.expertise.length > 0) {
      cat = host.userData.expertise.map((ex, i) => {
        return ex.name;
      });
    }
    return {
      userId: host._id,
      name: host.userData.firstName,
      emailAddress: host.email,
      category: cat.length > 0 ? cat.join(", ") : cat,
      signupDate: host.createdAt,
      submission: "2",
      status: host.userData.status,
    };
  });

  // console.log(res);
  const pages = Math.ceil(res.data.totalRecords / limit);
  dispatch({
    type: GET_EXPERTS_DATA,
    payload: {
      hostData,
      pages,
      dataLoaded: true,
      inProgressRequest: res.data.in_progress_request,
      pendingPequest: res.data.pending_request,
      approvedRequest: res.data.approved_request,
      url: res.data.url,
    },
  });
};

export const approvePendingRequest = (userId) => async (dispatch) => {
  const res = await axios.put(
    `${BASE_URL}/admin/expert/approve`,
    { id: userId },
    options
  );

  // console.log(res);
  dispatch({
    type: APPROVE_PENDING_REQUEST,
    payload: { approveRequestMessage: res.data.message },
  });
};

export const addNotes = (message) => async (dispatch) => {
  dispatch({
    type: ADD_NOTES,
    payload: { addNotesMessage: message },
  });
};
