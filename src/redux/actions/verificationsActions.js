import axios from "axios";
import { GET_VERIFICATION_LIST } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const getVerificationList = (page, limit, search) => async (
  dispatch
) => {
  const obj = {
    start: (page - 1) * limit,
    length: limit,
    search,
  };

  const res = await axios.post(`${BASE_URL}/admin/verification/list`, obj);
  //   console.log("res: ", res.data.data);

  const verificationData = res.data.data.map((host) => {
    let cat = [];
    if (host.userData.expertise && host.userData.expertise.length > 0) {
      cat = host.userData.expertise.map((ex, i) => {
        return ex.name;
      });
    }
    return {
      userId: host._id,
      name: host.userData.firstName + " " + host.userData.lastName,
      emailAddress: host.email,
      category: cat.length > 0 ? cat.join(", ") : cat,
      status: host.userData.status,
    };
  });
  const pages = Math.ceil(res.data.total / limit);
  // const total = res.data.in_progress_request + res.data.pending_request;
  //    + res.data.approved_request;
  dispatch({
    type: GET_VERIFICATION_LIST,
    payload: {
      verificationData,
      pages,
      dataLoaded: true,
      // inProgressRequest: res.data.in_progress_request,
      // pendingPequest: res.data.pending_request,
      // approvedRequest: res.data.approved_request,
      // totalRequest: total,
    },
  });
};
