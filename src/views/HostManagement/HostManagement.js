import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CDataTable,
  CButton,
  CRow,
  CCol,
  CLink,
  CFormGroup,
  CLabel,
  CSelect,
  CSpinner,
  // CModal,
  // CModalBody,
  // CModalFooter,
  // CTextarea,
  // CModalHeader,
  CWidgetIcon,
  CPagination,
} from "@coreui/react";
import Moment from "react-moment";
import NotesModal from "./NotesModal";
import {
  getExperts,
  approvePendingRequest,
} from "../../redux/actions/hostManagementActions";
import RequestExpert from "../requestExpert/requestExpert";
import CIcon from "@coreui/icons-react";

const fields = [
  // { key: "userId", _style: { width: "2%" } },
  { key: "name", _style: { width: "auto" } },
  { key: "emailAddress", _style: { width: "auto" } },
  { key: "category", _style: { width: "auto" } },
  { key: "signupDate", _style: { width: "auto" } },
  { key: "submission", _style: { width: "auto" } },
  {
    key: "action",
    label: "Action",
    _style: { width: "auto" },
    sorter: false,
    filter: false,
  },
];

const defaultPage = 1;
const defaultPageSize = 5;

class HostManagement extends Component {
  state = {
    userData: [],
    currentPage: 1,
    currentPageSize: defaultPageSize,
    setModal: false,
    formShow: false,
    details: [],
    OpenRequest: false,
  };
  componentDidMount() {
    this.props.dispatch(getExperts(defaultPage, defaultPageSize));
  }

  toggle = () => {
    this.setState({ setModal: !this.state.setModal });
  };

  OpenRequestModal = () => {
    this.setState({ OpenRequest: !this.state.OpenRequest });
  };
  toggleDetails = (index) => {
    const position = this.state.details.indexOf(index);
    let newDetails = this.state.details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...this.state.details, index];
    }
    // setDetails(newDetails);
    this.setState({ details: newDetails });
  };

  approveStatus = (userId) => {
    const btn = document.getElementById("approveButton");
    btn.disabled = true;
    this.props.dispatch(
      approvePendingRequest(userId, defaultPage, defaultPageSize)
    );
  };
  notesStatus = (index) => {
    console.log("Notes!!!", index);
  };

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(getExperts(this.state.currentPage, limit));
  };

  setActivePage = (i) => {
    this.props.dispatch(getExperts(i, this.state.currentPageSize));
    this.setState({ currentPage: i });
  };

  onStatusChange = (value) => {
    if (value !== "all") {
      this.props.dispatch(
        getExperts(this.state.currentPage, this.state.currentPageSize, value)
      );
    } else {
      this.props.dispatch(
        getExperts(this.state.currentPage, this.state.currentPageSize)
      );
    }
  };

  onSortByChange = (value) => {
    if (value !== "") {
      this.props.dispatch(
        getExperts(
          this.state.currentPage,
          this.state.currentPageSize,
          null,
          value
        )
      );
    }
  };

  onNotesModalClose = () => {
    this.setState({ notesModal: false });
  };

  showForm = () => {
    this.setState({ formShow: !this.state.formShow });
  };

  render() {
    const token = localStorage.getItem("AUTHTOKEN");
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            <>
              <CRow>
                <CCol xs="12" lg="4">
                  <CWidgetIcon
                    header="New Host Account Requests"
                    text={
                      this.props.pendingPequest
                        ? this.props.pendingPequest.toString()
                        : "0"
                    }
                    color="warning"
                  >
                    <CIcon width={24} name="cil-settings" />
                  </CWidgetIcon>
                </CCol>
                <CCol xs="12" lg="4">
                  <CWidgetIcon
                    header="In-Progress"
                    text={
                      this.props.inProgressRequest
                        ? this.props.inProgressRequest.toString()
                        : "0"
                    }
                    color="danger"
                  >
                    <CIcon width={24} name="cil-bell" />
                  </CWidgetIcon>
                </CCol>

                <CCol xs="12" lg="4">
                  <CWidgetIcon
                    header="Approved Host Accounts"
                    text={
                      this.props.approvedRequest
                        ? this.props.approvedRequest.toString()
                        : "0"
                    }
                    color="info"
                  >
                    <CIcon width={24} name="cil-settings" />
                  </CWidgetIcon>
                </CCol>
              </CRow>
              <CFormGroup row>
                <CCol xs="12" md="3" className="col-sm-4">
                  <CLabel htmlFor="selectSm">Sort By</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                    onChange={(e) => {
                      this.onSortByChange(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="createdAt">Sign up date</option>
                  </CSelect>
                </CCol>
                <CCol xs="12" md="3" className="col-sm-4">
                  <CLabel htmlFor="selectSm">Filter by host recuiter</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">All</option>
                  </CSelect>
                </CCol>
                <CCol xs="12" md="3" className="col-sm-4">
                  <CLabel htmlFor="selectSm">Filter by status</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                    onChange={(e) => {
                      this.onStatusChange(e.target.value);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="approved">Approved</option>
                    <option value="in-progress">In-progress</option>
                    <option value="pending">Pending</option>
                  </CSelect>
                </CCol>
                <CCol xs="12" md="3" className="col-sm-4">
                  <CButton
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    target="_blank"
                    onClick={() => {
                      window.open(
                        `http://192.168.100.39:8000/${this.props.url}`
                      );
                    }}
                  >
                    Export List as CSV
                  </CButton>
                </CCol>
              </CFormGroup>

              <CDataTable
                items={this.props.hostData}
                fields={fields}
                // tableFilter
                itemsPerPageSelect
                itemsPerPage={defaultPageSize}
                hover
                // sorter
                pagination={false}
                onPaginationChange={(e) => this.onPaginationChange(e)}
                scopedSlots={{
                  name: (item, index) => {
                    return (
                      <td className="py-2">
                        <CLink
                          to={`/admin/hostdetails/${item.userId}`}
                          // href="http://localhost:3000/dashboard"
                          // target="_blank"
                        >
                          {item.name}
                        </CLink>
                      </td>
                    );
                  },
                  signupDate: (item, index) => {
                    return (
                      <td className="py-2">
                        <Moment format="DD/MM/YYYY">{item.signupDate}</Moment>
                      </td>
                    );
                  },
                  action: (item, index) => {
                    return (
                      <td className="py-2" style={{ whiteSpace: "nowrap" }}>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          id="approveButton"
                          style={{
                            color: "#fff",
                            backgroundColor:
                              item.status === "approved" ? "green" : "red",
                          }}
                          disabled={item.status === "approved" ? true : false}
                          onClick={() => {
                            this.approveStatus(item.userId);
                          }}
                        >
                          {item.status === "approved" ? "Approved" : "Approve"}
                        </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          color="dark"
                          onClick={() =>
                            window.open(
                              `http://localhost:3000/expert-details/${item.userId}?isAdmin=true`
                            )
                          }
                        >
                          View Experts details
                        </CButton>

                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          color="primary"
                          onClick={() =>
                            window.open(
                              `http://localhost:3000/expert-approve?adminToken=${token}&userId=${item.userId}`
                            )
                          }
                        >
                          Edit and Approve
                        </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          color="danger"
                          onClick={() =>
                            window.open(
                              `http://localhost:3000/expert-request-changes?adminToken=${token}&userId=${item.userId}&action=request_change`
                            )
                          }
                        >
                          Request Changes
                        </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          color="info"
                          onClick={() => {
                            this.setState({
                              notesModal: true,
                              hostId: item.userId,
                            });
                          }}
                        >
                          Notes
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </>
            <div className={"mt-2"}>
              <CPagination
                activePage={this.state.currentPage}
                pages={this.props.pages}
                onActivePageChange={(i) => this.setActivePage(i)}
              ></CPagination>
            </div>
            {this.state.notesModal ? (
              <NotesModal
                id={this.state.hostId}
                onClose={this.onNotesModalClose}
              />
            ) : null}
          </div>
        )}

        <RequestExpert
          OpenRequest={this.state.OpenRequest}
          OpenRequestModal={this.OpenRequestModal}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hostData: state.hostManagement.hostData,
    pages: state.hostManagement.pages,
    tableDataLoaded: state.hostManagement.dataLoaded,
    inProgressRequest: state.hostManagement.inProgressRequest,
    pendingPequest: state.hostManagement.pendingPequest,
    approvedRequest: state.hostManagement.approvedRequest,
    approveRequestMessage: state.hostManagement.approveRequestMessage,
    addNotesMessage: state.hostManagement.addNotesMessage,
    url: state.hostManagement.url,
  };
};

export default connect(mapStateToProps)(HostManagement);
