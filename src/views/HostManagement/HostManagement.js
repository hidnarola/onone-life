import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CDataTable,
  CButton,
  CWidgetSimple,
  CRow,
  CCol,
  CLink,
  CPagination,
  CFormGroup,
  CLabel,
  CSelect,
  CSpinner,
} from "@coreui/react";
import Moment from "react-moment";
import { getExperts } from "../../redux/actions/hostManagementActions";

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



const usersData = [
  {
    user_id: 1,
    name: "John Doe",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "Yes",
  },
  {
    user_id: 2,
    name: "Samppa Nori",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 3,
    name: "Estavan Lykos",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 4,
    name: "Chetan Mohamed",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 5,
    name: "Derick Maximinus",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 6,
    name: "Friderik Dávid",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 7,
    name: "Yiorgos Avraamu",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
  {
    user_id: 8,
    name: "Avram Tarasios",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "Yes",
  },
  {
    user_id: 9,
    name: "Quintin Ed",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "Yes",
  },
  {
    user_id: 10,
    name: "Enéas Kwadwo",
    emailAddress: "kip@narola.email",
    category: 'host',
    signupDate: "05/05/2020",
    submission: "NO",
  },
];


class HostManagement extends Component {
  state = {
    userData: [],
    currentPage: 1,
    currentPageSize: defaultPageSize,
  };
  componentDidMount() {
    this.props.dispatch(getExperts(defaultPage, defaultPageSize));
  }



  approveStatus = (index) => {
    console.log("Approved!!!", index);
  };
  notesStatus = (index) => {
    console.log("Notes!!!", index);
  };
  requestChangesStatus = (index) => {
    console.log("Request Changes!!!", index);
  };
  editandApproveStatus = (index) => {
    console.log("Edit and Approve!!!", index);
  };

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(getExperts(this.state.currentPage, limit));
  };

  setActivePage = (i) => {
    this.props.dispatch(getExperts(i, this.state.currentPageSize));
    this.setState({ currentPage: i });
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
            <div>
              <CRow>
                <CCol>
                  <CWidgetSimple
                    className="mr-3"
                    header="New Host Account Requests"
                    text="50"
                  ></CWidgetSimple>
                </CCol>
                <CCol>
                  <CWidgetSimple
                    className="mr-3"
                    header="In-Progress"
                    text="20"
                  ></CWidgetSimple>
                </CCol>
                <CCol>
                  <CWidgetSimple
                    header="Approved Host Accounts"
                    text="100"
                  ></CWidgetSimple>
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
                  >
                    <option value="0">Sign up date</option>
                    <option value="1"> 05/05/2020</option>
                    <option value="2"> 05/05/2020</option>
                    <option value="3"> 05/05/2020</option>
                    <option value="4"> 05/05/2020</option>
                    <option value="5"> 05/05/2020</option>
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
                  >
                    <option value="0">All</option>
                  </CSelect>
                </CCol>
              </CFormGroup>

              <CDataTable
                items={usersData}
                fields={fields}
                tableFilter
                itemsPerPageSelect
                itemsPerPage={defaultPageSize}
                hover
                // sorter
                pagination={true}
                // onPaginationChange={(e) => this.onPaginationChange(e)}
                scopedSlots={{
                  name: (item, index) => {
                    return (
                      <td className="py-2">
                        <CLink
                          href="#"
                          target="_blank"
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
                          style={{ color: "#fff", backgroundColor: "red" }}
                          onClick={() => {
                            this.approveStatus(index);
                          }}
                        >
                          Approve
                      </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          style={{ border: "1px solid #232333" }}
                          onClick={() => {
                            this.editandApproveStatus(index);
                          }}
                        >
                          Edit and Approve
                      </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          style={{ border: "1px solid #232333" }}
                          onClick={() => {
                            this.requestChangesStatus(index);
                          }}
                        >
                          Request Changes
                      </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          style={{ border: "1px solid #232333" }}
                          onClick={() => {
                            this.notesStatus(index);
                          }}
                        >
                          Notes
                      </CButton>
                      </td>
                    );
                  },
                }}
              />
              {/* <div className={"mt-2"}>
                <CPagination
                  activePage={this.state.currentPage}
                  pages={this.props.pages}
                  onActivePageChange={(i) => this.setActivePage(i)}
                ></CPagination>
              </div> */}
            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {
    hostData: state.hostManagement.hostData,
    pages: state.hostManagement.pages,
    tableLoading: state.hostManagement.loading,
    inProgressRequest: state.hostManagement.inProgressRequest,
    pendingPequest: state.hostManagement.pendingPequest,
    approvedRequest: state.hostManagement.approvedRequest,
  };
};

export default connect(mapStateToProps)(HostManagement);
