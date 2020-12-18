import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CDataTable,
  CButton,
  // CLink,
  CSpinner,
  CPagination,
  CSelect,
  CInput,
} from "@coreui/react";
import { getVerificationList } from "../../redux/actions/verificationsActions";
import IdVerificationModal from "./IdVerificationModal";
import "../HostManagement/HostManagement.css";

const fields = [
  // { key: "userId", _style: { width: "2%" } },
  { key: "name", _style: { width: "auto" } },
  { key: "emailAddress", _style: { width: "auto" } },
  { key: "category", _style: { width: "auto" } },
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

class Verification extends Component {
  state = {
    userData: [],
    currentPage: 1,
    currentPageSize: defaultPageSize,
    details: [],
    openIdVerification: false,
    educationData: {},
    certificationData: {},
    searching: false,
  };
  componentDidMount() {
    this.props.dispatch(getVerificationList(defaultPage, defaultPageSize));
  }

  onNotesModalClose = () => {
    this.setState({ openIdVerification: false });
  };

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(getVerificationList(this.state.currentPage, limit));
  };

  setActivePage = (i) => {
    this.props.dispatch(getVerificationList(i, this.state.currentPageSize));
    this.setState({ currentPage: i });
  };

  handleChangeSearch = (value) => {
    this.setState({ searching: true });
    if (value.length > 2) {
      this.props.dispatch(
        getVerificationList(
          this.state.currentPage,
          this.state.currentPageSize,
          value
        )
      );
    }
    if (value.length < 2 && this.state.searching === true) {
      this.props.dispatch(
        getVerificationList(this.state.currentPage, this.state.currentPageSize)
      );
      this.setState({ searching: false });
    }
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            <>
              <div style={{ textAlign: "right" }} className="search-area">
                <div className="hm-search">
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
                items={this.props.verificationData}
                fields={fields}
                // itemsPerPageSelect
                itemsPerPage={10}
                hover
                loading={this.props.tableDataLoaded ? false : true}
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

                  action: (item, index) => {
                    return (
                      <td className="py-2" style={{ whiteSpace: "nowrap" }}>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          color="dark"
                          onClick={() =>
                            this.props.history.push(
                              `/admin/id-verification/${item.userId}`
                            )
                          }
                        >
                          Verify ID Verification
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </>
            <div className={"mt-2"}>
              {this.props.verificationData &&
              this.props.verificationData.length > 0 ? (
                <CPagination
                  activePage={this.state.currentPage}
                  pages={this.props.pages}
                  onActivePageChange={(i) => this.setActivePage(i)}
                ></CPagination>
              ) : null}
            </div>
          </div>
        )}

        {this.state.openIdVerification ? (
          <IdVerificationModal
            id={this.state.hostId}
            onClose={this.onNotesModalClose}
            page={defaultPage}
            pageSize={defaultPageSize}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    verificationData: state.verifications.verificationData,
    pages: state.verifications.pages,
    tableDataLoaded: state.verifications.dataLoaded,
  };
};

export default connect(mapStateToProps)(Verification);
