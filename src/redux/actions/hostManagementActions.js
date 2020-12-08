import axios from "axios";
import { GET_EXPERTS_DATA, APPROVE_PENDING_REQUEST, ADD_NOTES } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const getExperts = (page, limit, status, sortBy, country) => async (
  dispatch
) => {
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
  if (country) {
    obj.country = country;
  }
  const res = await axios.post(`${BASE_URL}/admin/expert`, obj);

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
      notes: host.userData.notes,
      notesBy: host.userData.notesBy,
      education: host.userData.education,
      certifications: host.userData.certifications,
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

export const approvePendingRequest = (userId, page, pageSize) => async (
  dispatch
) => {
  const res = await axios.put(`${BASE_URL}/admin/expert/approve`, {
    id: userId,
  });

  dispatch(getExperts(page, pageSize));

  // console.log(res);
  dispatch({
    type: APPROVE_PENDING_REQUEST,
    payload: { approveRequestMessage: res.data.message },
  });
};

export const addNotes = (message, page, pageSize) => async (dispatch) => {
  dispatch(getExperts(page, pageSize));
  dispatch({
    type: ADD_NOTES,
    payload: { addNotesMessage: message },
  });
};

export const getCountries = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/countryWithCount`);

  dispatch({
    type: "GET_COUNTRIES",
    payload: res.data.country,
  });
};

export const getCategories = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/category`);

  dispatch({
    type: "GET_CATEGORIES",
    payload: res.data.category,
  });
};
