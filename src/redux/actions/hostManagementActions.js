import axios from "axios";
import { GET_EXPERTS_DATA } from "./index";
import { BASE_URL } from "../../constants/Constants";

const token = JSON.parse(localStorage.getItem('AUTHTOKEN'));
const options = {
    headers: {'x-access-token': token}
  };

export const getExperts = (page, limit) => async (dispatch) => {
  console.log("Page: ", page, "Limit: ", limit)
    const res = await axios.post(`${BASE_URL}/admin/expert`, {
    start: (page - 1) * (limit),
    length: limit,
  }, options);

  const hostData = res.data.data.map((host) => {
    return {      
        userId: host._id,
        name: host.userData.firstName,
        emailAddress: host.email,
        category: host.userData.expertise.join(", "),
        signupDate: host.createdAt,
        submission: "2"      
    }
  });

  // console.log(res);
  const pages = Math.ceil(res.data.totalRecords / limit)
    dispatch({
    type: GET_EXPERTS_DATA,
    payload:hostData,
    pages,
    loading:false,
    inProgressRequest: res.data.in_progress_request,
    pendingPequest: res.data.pending_request,
    approvedRequest: res.data.approved_request,
  });
};
