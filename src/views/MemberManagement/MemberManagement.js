import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "../../axios";
import {
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
  CLink,
  CCol,
  CSpinner,
  CFormGroup,
  CLabel,
  CSelect,
  CPagination,
} from "@coreui/react";
import Moment from "react-moment";
import { getMembers } from "../../redux/actions/memberManagementActions";
import { BASE_URL } from "../../constants/Constants";

const fields = [
  { key: "userId" },
  { key: "name" },
  { key: "emailAddress" },
  { key: "signupDate" },
  { key: "signupSource" },
  {
    key: "show_details",
    label: "Actions",
    sorter: false,
    filter: false,
  },
];

const defaultPage = 1;
const defaultPageSize = 5;

class MemberManagement extends Component {
  state = {
    details: [],
    hostId: "",
    currentPage: 1,
    currentPageSize: defaultPageSize,
    redirectTo: false,
  };

  componentDidMount() {
    this.props.dispatch(getMembers(defaultPage, defaultPageSize));
  }

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(getMembers(this.state.currentPage, limit));
  };

  setActivePage = (i) => {
    this.props.dispatch(getMembers(i, this.state.currentPageSize));
    this.setState({ currentPage: i });
  };

  onAccountTypeChange = (value) => {
    if (value !== "all") {
      this.props.dispatch(
        getMembers(this.state.currentPage, this.state.currentPageSize, value)
      );
    } else {
      this.props.dispatch(
        getMembers(this.state.currentPage, this.state.currentPageSize)
      );
    }
  };

  onSortByChange = (value) => {
    if (value !== "") {
      this.props.dispatch(
        getMembers(
          this.state.currentPage,
          this.state.currentPageSize,
          null,
          value
        )
      );
    }
  };

  async resetPassword(item) {
    try {
      await axios.put(`${BASE_URL}/admin/member/change_password`, {
        id: item.userId,
      });
    } catch (error) {
      console.log("Error", error);
    }
  }

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

  render() {
    return (
      <div>
        {!this.props.tableDataLoaded ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            {/* <CRow>
          <CCol xs="12" lg="4">
            <CWidgetIcon
              text="50"
              header="New Host Account Requests"
              color="warning"
            >
              <CIcon width={24} name="cil-settings" />
            </CWidgetIcon>
          </CCol>
          <CCol xs="12" lg="4">
            <CWidgetIcon text="10" header="In-Progress" color="danger">
              <CIcon width={24} name="cil-bell" />
            </CWidgetIcon>
          </CCol>

          <CCol xs="12" lg="4">
            <CWidgetIcon text="5" header="Approved Host Accounts" color="info">
              <CIcon width={24} name="cil-settings" />
            </CWidgetIcon>
          </CCol>
        </CRow> */}

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
                  <option value="createdAt">Sign Up Date</option>
                </CSelect>
              </CCol>

              <CCol xs="12" md="3" className="col-sm-4">
                <CLabel htmlFor="selectSm">Account Type</CLabel>
                <CSelect
                  custom
                  size="sm"
                  className="select-box"
                  name="selectSm"
                  id="SelectLm"
                  onChange={(e) => {
                    this.onAccountTypeChange(e.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="attendee">Attendee</option>
                  <option value="host">Host</option>
                </CSelect>
              </CCol>
              <CCol xs="12" md="3" className="col-sm-4">
                <CButton
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  target="_blank"
                  onClick={() => {
                    window.open(`http://192.168.100.39:8000/${this.props.url}`);
                  }}
                >
                  Export List as CSV
                </CButton>
              </CCol>
            </CFormGroup>

            <CDataTable
              // items={usersData}
              items={this.props.memberData}
              fields={fields}
              striped
              bordered
              // columnFilter
              // tableFilter
              // footer
              itemsPerPageSelect
              itemsPerPage={defaultPageSize}
              hover
              // sorter
              pagination
              onPaginationChange={(e) => this.onPaginationChange(e)}
              scopedSlots={{
                name: (item, index) => {
                  return (
                    <td className="py-2">
                      <CLink
                        href="http://localhost:3000/dashboard"
                        target="_blank"
                      >
                        {item.name}
                      </CLink>
                    </td>
                  );
                },
                signupDate: (item, index) => {
                  return (
                    <td className="py-2" key={index}>
                      <Moment format="DD/MM/YYYY">{item.signupDate}</Moment>
                    </td>
                  );
                },
                show_details: (item, index) => {
                  return (
                    <td className="py-2">
                      <CButton
                        variant="outline"
                        size="sm"
                        className="mr-2"
                        color="warning"
                        onClick={() => {
                          this.toggleDetails(index);
                        }}
                      >
                        {this.state.details.includes(index) ? "Hide" : "Show"}
                      </CButton>
                      <CButton
                        variant="outline"
                        size="sm"
                        color="info"
                        onClick={() => {
                          this.resetPassword(index);
                        }}
                      >
                        Reset Password
                      </CButton>
                    </td>
                  );
                },
                details: (item, index) => {
                  return (
                    <CCollapse show={this.state.details.includes(index)}>
                      <CCardBody>
                        <h4>{item.username}</h4>
                        <p className="text-muted">
                          User since: {item.signup_date}
                        </p>
                        <p className="text-muted">
                          No. of Signups per Week: 15
                        </p>
                        <p className="text-muted">Total User Counts: 25</p>
                        <p className="text-muted">Total Experts: 15</p>
                        <p className="text-muted">Total Attendees: 55</p>
                        <p className="text-muted">Languages: English</p>
                        <p className="text-muted">Expert Purpose: NA</p>
                        <p className="text-muted">
                          Expert Account Approval Date: 05/05/2020
                        </p>
                        <p className="text-muted">Account Approved By: Test</p>
                        <p className="text-muted">
                          Approval Notes and Comments: -
                        </p>
                        <p className="text-muted">IP Address Log: -</p>
                        <p className="text-muted">
                          Change Account Status: Warning1
                        </p>
                        <p className="text-muted">Member Account View: -</p>
                        <p className="text-muted">
                          No. of Listing + Listing History: -
                        </p>
                        <p className="text-muted">
                          No. of Events Attended + Attendance History: -
                        </p>
                        <p className="text-muted">Expert Categories: -</p>
                        <p className="text-muted">
                          Expert Secondary Categories: -
                        </p>
                        <p className="text-muted">
                          No. of Expert Request Submitted: -
                        </p>
                        <p className="text-muted">
                          Total Value of All Transactions : -
                        </p>
                        <p className="text-muted">Landing Page Link : -</p>
                      </CCardBody>
                    </CCollapse>
                  );
                },
              }}
            />
            <div className={"mt-2"}>
              <CPagination
                activePage={this.state.currentPage}
                pages={this.props.pages}
                onActivePageChange={(i) => this.setActivePage(i)}
              ></CPagination>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    memberData: state.memberManagement.memberData,
    pages: state.memberManagement.pages,
    tableDataLoaded: state.memberManagement.dataLoaded,
    url: state.memberManagement.url,
  };
};

export default connect(mapStateToProps)(withRouter(MemberManagement));
