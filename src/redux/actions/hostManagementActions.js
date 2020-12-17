import axios from "axios";
import { GET_EXPERTS_DATA, APPROVE_PENDING_REQUEST, ADD_NOTES } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const getExperts = (
  page,
  limit,
  status,
  sortBy,
  country,
  recruiter,
  category,
  search,
  startDate,
  endDate
) => async (dispatch) => {
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
  if (recruiter) {
    obj.recruiter = recruiter;
  }
  if (category) {
    obj.category = category;
  }
  if (search) {
    obj.search = search;
  }
  if (startDate) {
    obj.startDate = startDate;
  }
  if (endDate) {
    obj.endDate = endDate;
  }
  if (obj.status === "") {
    delete obj.status;
  }
  if (obj.recruiter === "") {
    delete obj.recruiter;
  }
  if (obj.category === "") {
    delete obj.category;
  }
  if (obj.host === "") {
    delete obj.host;
  }
  if (obj.country === "") {
    delete obj.country;
  }
  if (obj.sortBy === "") {
    delete obj.sortBy;
  }
  const res = await axios.post(`${BASE_URL}/admin/expert`, obj);
  // console.log("res: ", res.data.data);

  const hostData = res.data.data.map((host) => {
    let cat = [];
    if (host.userData.expertise && host.userData.expertise.length > 0) {
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
      submission: host.userData.noOfTimeProfileSubmitted,
      status: host.userData.status,
      brandName: host.userData.brandName,
      notes: host.userData.notes,
      notesBy: host.userData.notesBy,
      education: host.userData.education,
      certifications: host.userData.certifications,
    };
  });

  // console.log(res);
  const pages = Math.ceil(res.data.totalRecords / limit);
  const total = res.data.in_progress_request + res.data.pending_request;
  //  + res.data.approved_request;
  dispatch({
    type: GET_EXPERTS_DATA,
    payload: {
      hostData,
      pages,
      dataLoaded: true,
      inProgressRequest: res.data.in_progress_request,
      pendingPequest: res.data.pending_request,
      approvedRequest: res.data.approved_request,
      totalRequest: total,
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
  const res = await axios.get(`${BASE_URL}/subcategoryTopicWithCount`);
  console.log("res: ", res.data);

  dispatch({
    type: "GET_CATEGORIES",
    payload: res.data.category,
  });
};

export const getEmployee = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/employeeWithCount`);
  // console.log("res: ", res.data.country);

  dispatch({
    type: "GET_EMPLOYEE",
    payload: res.data.country,
  });
};
