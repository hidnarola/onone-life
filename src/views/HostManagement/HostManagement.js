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
  CWidgetIcon,
  CPagination,
  CInput,
} from "@coreui/react";
import Moment from "react-moment";
import moment from "moment";
import NotesModal from "./NotesModal";
import {
  getExperts,
  approvePendingRequest,
  getCountries,
  getCategories,
  getEmployee,
} from "../../redux/actions/hostManagementActions";
import RequestExpert from "../requestExpert/requestExpert";
import CIcon from "@coreui/icons-react";
import "./HostManagement.css";

const fields = [
  // { key: "userId", _style: { width: "2%" } },
  { key: "name", _style: { width: "auto" } },
  { key: "emailAddress", _style: { width: "auto" } },
  { key: "category", _style: { width: "auto" } },
  { key: "brandName", _style: { width: "auto" } },
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
const defaultPageSize = 10;

class HostManagement extends Component {
  state = {
    userData: [],
    currentPage: 1,
    currentPageSize: defaultPageSize,
    setModal: false,
    formShow: false,
    details: [],
    OpenRequest: false,
    notesData: "",
    notesBy: {},
    status: "",
    countries: [],
    sortBy: "",
    host: "",
    category: "",
    searching: false,
    startDate: "2020-06-12",
    endDate: moment().format("YYYY-MM-DD"),
  };
  componentDidMount() {
    this.props.dispatch(getExperts(defaultPage, defaultPageSize));
    this.props.dispatch(getCountries());
    this.props.dispatch(getCategories());
    this.props.dispatch(getEmployee());
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       countries: this.props.countries,
  //       host: this.props.employee,
  //     });
  //   }
  // }

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

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(
      getExperts(
        this.state.currentPage,
        limit,
        this.state.status,
        this.state.sortBy,
        this.state.country,
        this.state.host
      )
    );
  };

  setActivePage = (i) => {
    this.props.dispatch(
      getExperts(
        i,
        this.state.currentPageSize,
        this.state.status,
        this.state.sortBy,
        this.state.country,
        this.state.host
      )
    );
    this.setState({ currentPage: i });
  };

  onStatusChange = (value) => {
    this.setState({ status: value });
    this.props.dispatch(
      getExperts(
        this.state.currentPage,
        this.state.currentPageSize,
        value,
        this.state.sortBy,
        this.state.country,
        this.state.host
      )
    );
  };

  onHostChange = (value) => {
    this.setState({ host: value });
    this.props.dispatch(
      getExperts(
        this.state.currentPage,
        this.state.currentPageSize,
        this.state.status,
        this.state.sortBy,
        this.state.country,
        value
      )
    );
  };

  onCategoryChange = (value) => {
    console.log("value: ", value);
    this.setState({ category: value });
    this.props.dispatch(
      getExperts(
        this.state.currentPage,
        this.state.currentPageSize,
        this.state.status,
        this.state.sortBy,
        this.state.country,
        this.state.host,
        value
      )
    );
  };

  onCountryChange = (value) => {
    this.setState({ country: value });
    this.props.dispatch(
      getExperts(
        this.state.currentPage,
        this.state.currentPageSize,
        this.state.status,
        this.state.sortBy,
        value,
        this.state.host
      )
    );
  };

  onSortByChange = (value) => {
    if (value !== "") {
      this.props.dispatch(
        getExperts(
          this.state.currentPage,
          this.state.currentPageSize,
          this.state.status,
          value,
          this.state.country,
          this.state.host
        )
      );
    }
  };

  handleChangeSearch = (value) => {
    this.setState({ searching: true });
    if (value.length > 2) {
      this.props.dispatch(
        getExperts(
          this.state.currentPage,
          this.state.currentPageSize,
          this.state.status,
          this.state.sortBy,
          this.state.country,
          this.state.host,
          this.state.category,
          value
        )
      );
    }
    if (value.length < 2 && this.state.searching === true) {
      this.props.dispatch(
        getExperts(
          this.state.currentPage,
          this.state.currentPageSize,
          this.state.status,
          this.state.sortBy,
          this.state.country,
          this.state.host,
          this.state.category
        )
      );
      this.setState({ searching: false });
    }
  };

  handleChangeSearchByDate = (key, value) => {
    console.log("value: ", key, value);
    if (key === "startDate") {
      this.setState({ startDate: value });
      this.props.dispatch(
        getExperts(
          this.state.currentPage,
          this.state.currentPageSize,
          this.state.status,
          this.state.sortBy,
          this.state.country,
          this.state.host,
          this.state.category,
          "",
          value,
          this.state.endDate
        )
      );
    }
    if (key === "endDate") {
      this.setState({ endDate: value });
      if (this.state.startDate) {
        this.props.dispatch(
          getExperts(
            this.state.currentPage,
            this.state.currentPageSize,
            this.state.status,
            this.state.sortBy,
            this.state.country,
            this.state.host,
            this.state.category,
            "",
            this.state.startDate,
            value
          )
        );
      }
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
                <CCol>
                  <CLabel htmlFor="selectSm">Sort By</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    onChange={(e) => {
                      this.onSortByChange(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="createdAt">Sign up date</option>
                  </CSelect>
                </CCol>
                <CCol>
                  <CLabel htmlFor="selectSm">Filter by Host Recuiter</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    onChange={(e) => {
                      this.onHostChange(e.target.value);
                    }}
                  >
                    <option value="">All ({this.props.totalRequest})</option>
                    {this.props.employees &&
                      this.props.employees.map((e, i) => {
                        return (
                          <option key={i} value={e.employee.userId}>
                            {e.employee.firstName} ({e.count})
                          </option>
                        );
                      })}
                  </CSelect>
                </CCol>
                <CCol>
                  <CLabel htmlFor="selectSm">Filter by Status</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    onChange={(e) => {
                      this.onStatusChange(e.target.value);
                    }}
                  >
                    <option value="">All ({this.props.totalRequest})</option>
                    {/* <option value="approved">
                      Approved ({this.props.approvedRequest})
                    </option> */}
                    <option value="in-progress">
                      In-progress ({this.props.inProgressRequest})
                    </option>
                    <option value="pending">
                      Pending ({this.props.pendingPequest})
                    </option>
                  </CSelect>
                </CCol>
                <CCol>
                  <CLabel htmlFor="selectSm">Filter by Country</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    name="selectSm"
                    onChange={(e) => {
                      this.onCountryChange(e.target.value);
                    }}
                  >
                    <option value="">All ({this.props.totalRequest})</option>
                    {this.props.countries.map((c, i) => {
                      return (
                        <option key={i} value={c.country._id}>
                          {c.country.name} ({c.count})
                        </option>
                      );
                    })}
                  </CSelect>
                </CCol>
                <CCol>
                  <CLabel htmlFor="selectSm">Filter by Category</CLabel>
                  <CSelect
                    custom
                    size="sm"
                    className="select-box"
                    onChange={(e) => {
                      this.onCategoryChange(e.target.value);
                    }}
                  >
                    <option value="">All ({this.props.totalRequest})</option>
                    {this.props.categories &&
                      this.props.categories.map((c, i) => {
                        return (
                          <option key={i} value={c.name}>
                            {c.name}({c.count})
                          </option>
                        );
                      })}
                  </CSelect>
                </CCol>
              </CFormGroup>

              <div style={{ textAlign: "right" }} className="search-area">
                <span className="btn-export-list">
                  <CButton
                    variant="outline"
                    size="sm"
                    className="mr-3"
                    target="_blank"
                    onClick={() => {
                      window.open(
                        `http://192.168.100.23:8000/${this.props.url}`
                      );
                    }}
                  >
                    Export List as CSV
                  </CButton>
                </span>
                <div className="hm-search">
                  {" "}
                  <span>Search </span>
                  <CInput
                    className="mr-3 input-search-ad"
                    type="search"
                    placeholder="Enter here.."
                    autoComplete="search"
                    style={{ display: "inline-block", width: "100px" }}
                    onChange={(e) => this.handleChangeSearch(e.target.value)}
                  />
                </div>
                <div className="hm-search">
                  <span>Start Date</span>
                  <CInput
                    className="mr-3"
                    type="date"
                    placeholder="Enter here.."
                    style={{ display: "inline-block", width: "150px" }}
                    value={this.state.startDate}
                    onChange={(e) =>
                      this.handleChangeSearchByDate("startDate", e.target.value)
                    }
                  />
                </div>
                <div className="hm-search">
                  <span>End Date</span>
                  <CInput
                    className="mr-3"
                    type="date"
                    style={{ display: "inline-block", width: "150px" }}
                    value={this.state.endDate}
                    onChange={(e) =>
                      this.handleChangeSearchByDate("endDate", e.target.value)
                    }
                  />
                </div>
                <div className="hm-search">
                  <span className="items-per-page">Items per page: </span>
                  <CSelect
                    custom
                    size="sm"
                    style={{ display: "inline-block", width: "100px" }}
                    className="select-box"
                    name="selectSm"
                    value={this.state.currentPageSize}
                    onChange={(e) => {
                      this.onPaginationChange(Number(e.target.value));
                    }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </CSelect>
                </div>
              </div>

              <CDataTable
                items={this.props.hostData}
                fields={fields}
                loading={this.props.tableDataLoaded ? false : true}
                // itemsPerPageSelect
                itemsPerPage={10}
                hover
                pagination={false}
                onPaginationChange={(e) => this.onPaginationChange(e)}
                scopedSlots={{
                  name: (item, index) => {
                    return (
                      <td className="py-2">
                        {/* <CLink to={`/admin/hostdetails/${item.userId}`}> */}
                        {item.name}
                        {/* </CLink> */}
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
                            cursor:
                              item.status === "approved" ? "none" : "pointer",
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
                              notesData: item.notes,
                              notesBy: item.notesBy,
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
              {this.props.hostData.length > 0 ? (
                <CPagination
                  activePage={this.state.currentPage}
                  pages={this.props.pages}
                  onActivePageChange={(i) => this.setActivePage(i)}
                ></CPagination>
              ) : null}
            </div>
            {this.state.notesModal ? (
              <NotesModal
                id={this.state.hostId}
                onClose={this.onNotesModalClose}
                notesData={this.state.notesData}
                notesBy={this.state.notesBy}
                page={defaultPage}
                pageSize={defaultPageSize}
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
    totalRequest: state.hostManagement.totalRequest,
    addNotesMessage: state.hostManagement.addNotesMessage,
    url: state.hostManagement.url,
    countries: state.hostManagement.countries,
    categories: state.hostManagement.categories,
    employees: state.hostManagement.employees,
  };
};

export default connect(mapStateToProps)(HostManagement);
