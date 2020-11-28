import axios from "axios";
import { GET_MEMBERS_DATA } from "./index";
import { BASE_URL } from "../../constants/Constants";

const token = JSON.parse(localStorage.getItem("AUTHTOKEN"));
const options = {
  headers: { "x-access-token": token },
};

export const getMembers = (page, limit, status, sortBy) => async (dispatch) => {
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
  const res = await axios.post(`${BASE_URL}/admin/members`, obj, options);

  const memberData = res.data.data.map((member) => {
    const languages =
      member.userData.language && member.userData.language.map((l) => l.name);
    return {
      userId: member.userData._id,
      name: member.userData.firstName + " " + member.userData.lastName,
      emailAddress: member.email,
      // category: member.userData.expertise.join(", "),
      signupDate: member.userData.createdAt,
      languages: languages ? languages.join(", ") : "",
      signupSource: member.source,
      status: member.userData.status,
    };
  });

  // console.log(res);
  const pages = Math.ceil(res.data.totalRecords / limit);
  dispatch({
    type: GET_MEMBERS_DATA,
    payload: {
      memberData,
      pages,
      dataLoaded: true,
      inProgressRequest: res.data.in_progress_request,
      pendingPequest: res.data.pending_request,
      approvedRequest: res.data.approved_request,
    },
  });
};
