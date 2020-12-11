import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CDataTable,
  CButton,
  CLink,
  CSpinner,
  CPagination,
} from "@coreui/react";
import { getExperts } from "../../redux/actions/hostManagementActions";
import IdVerificationModal from "./IdVerificationModal";

const fields = [
  // { key: "userId", _style: { width: "2%" } },
  { key: "name", _style: { width: "auto" } },
  { key: "emailAddress", _style: { width: "auto" } },
  { key: "category", _style: { width: "auto" } },
  //   { key: "signupDate", _style: { width: "auto" } },
  //   { key: "submission", _style: { width: "auto" } },
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
  };
  componentDidMount() {
    this.props.dispatch(getExperts(defaultPage, defaultPageSize));
  }

  onNotesModalClose = () => {
    this.setState({ openIdVerification: false });
  };

  onPaginationChange = (limit) => {
    this.setState({ currentPageSize: limit });
    this.props.dispatch(
      getExperts(this.state.currentPage, limit, this.state.status)
    );
  };

  setActivePage = (i) => {
    this.props.dispatch(
      getExperts(i, this.state.currentPageSize, this.state.status)
    );
    this.setState({ currentPage: i });
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            <>
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
                        <CLink to={`/admin/hostdetails/${item.userId}`}>
                          {item.name}
                        </CLink>
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
                          // onClick={() =>
                          //   this.setState({
                          //     openIdVerification: true,
                          //     educationData: item.education,
                          //     certificationData: item.certifications,
                          //   })
                          // }
                        >
                          Verify ID Verification
                        </CButton>
                        <CButton
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          color="dark"
                          onClick={() =>
                            this.props.history.push(
                              `/admin/education-and-certifications/${item.userId}`
                            )
                          }
                        >
                          Verify Education and Certification
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
          </div>
        )}

        {this.state.openIdVerification ? (
          <IdVerificationModal
            id={this.state.hostId}
            onClose={this.onNotesModalClose}
            // educationData={this.state.educationData}
            // certificationData={this.state.certificationData}
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
    hostData: state.hostManagement.hostData,
    pages: state.hostManagement.pages,
    tableDataLoaded: state.hostManagement.dataLoaded,
  };
};

export default connect(mapStateToProps)(Verification);
