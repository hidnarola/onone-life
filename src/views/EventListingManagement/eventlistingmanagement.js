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
    CCard,
  CCardBody,
  CCollapse,
  CCardHeader, CInput,
} from "@coreui/react";
import Moment from "react-moment";
import { getExperts } from "../../redux/actions/hostManagementActions";
import RequestExpert from '../requestExpert/requestExpert'
const fields = [
    // { key: "userId", _style: { width: "2%" } },
    { key: "Username" },
    { key: "Category" },

    { key: "Request_Date_and_Time", label: "Request Date and Time", },
    { key: "Listing" },
    ,
    {
        key: "action",
        label: "Action",

    },
];

const defaultPage = 1;
const defaultPageSize = 5;



const usersData = [
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
    {
        Username: 'Dean John',
        Category: "Category Name",
        Request_Date_and_Time: "10/5/2020 3:00 PM",
        Listing: 'Listing Name Goes Here',
        submission: "Yes",
    },
];


class EventListingmanagement extends Component {
    state = {
        userData: [],
        currentPage: 1,
        currentPageSize: defaultPageSize,
        OpenRequest: false,
        formShow: false,
    };
    componentDidMount() {
        this.props.dispatch(getExperts(defaultPage, defaultPageSize));
    }


    showForm = () => {
        this.setState({ formShow: !this.state.formShow })
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

    OpenRequestModal = () => {
        this.setState({ OpenRequest: !this.state.OpenRequest })
    }

    render() {
        return (
            <div>
                {this.props.loading ? (
                    <CSpinner size="sm" variant="grow" />
                ) : (
                        <div>
                            {!this.state.formShow ? (
                                <>
                                    <CRow>
                                        <CCol>
                                            <h4>Event Listing Management</h4>
                                        </CCol>

                                    </CRow>
                                    <CFormGroup row>
                                        <CCol xs="12" md="3">
                                            <CLabel htmlFor="selectSm">Sort By status</CLabel>
                                            <CSelect
                                                custom
                                                size="sm"
                                                className="select-box"
                                                name="selectSm"
                                                id="SelectLm"
                                            >
                                                <option value="0">select</option>
                                                <option value="1"> Approved</option>
                                                <option value="2"> In-progress</option>
                                                <option value="3"> Rejected</option>
                                               
                                            </CSelect>


                                        </CCol>

                                        <CCol xs="12" md="9" className='text-right'>
                                            <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                height='15px'
                                                className="mr-2"
                                                style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
                                                onClick={() => {
                                                    this.showForm();
                                                }}  
                                            > New Listing Requests</CButton>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                height='15px'
                                                className="mr-2"
                                                style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}

                                            >  Listing </CButton>
                                        </CCol>

                                    </CFormGroup>

                                    <CDataTable
                                        items={usersData}
                                        fields={fields}
                                        // tableFilter
                                        // itemsPerPageSelect
                                        // itemsPerPage={defaultPageSize}
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

                                                        >
                                                            Approve
                      </CButton>
                                                        <CButton
                                                            variant="outline"
                                                            size="sm"
                                                            className="mr-2"
                                                            color="dark"
                                                            onClick={() => {
                                                                this.OpenRequestModal();
                                                            }}
                                                        >
                                                            Request Amendment
                      </CButton>
                                                        <CButton
                                                            variant="outline"
                                                            size="sm"
                                                            className="mr-2"
                                                            color="warning"
                                                            onClick={() => {
                                                                this.showForm();
                                                            }}  
                                                        >
                                                            Edit and Approve
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
                                </>
                            ) : (
                                <CCol xs="12" sm="12">
 <CFormGroup row>
                          <CCol xs="12" md="12" className='text-right'>
                            <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                            <CButton
                              variant="outline"
                              size="sm"
                              height='15px'
                            
                              style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
                              onClick={this.showForm}
                            > Back</CButton>

                          </CCol>
                        </CFormGroup>
                    <CCard>
                      <CCardHeader>
                      Event Listing Management
                 
                      </CCardHeader>
                      <CCardBody>
                        <CFormGroup>
                          <CLabel htmlFor="company">User Name</CLabel>
                          <CInput id="company" placeholder="Enter your user name" />
                        </CFormGroup>
                       
                        <CFormGroup>
                          <CLabel htmlFor="Category">Category</CLabel>
                          <CInput id="Category" placeholder="Enter Category name" />
                                                </CFormGroup>
                                                <CFormGroup>
                          <CLabel htmlFor="vat">status </CLabel>
                          <CSelect
                                custom
                                size="sm"
                                className="select-box"
                                name="selectSm"
                                id="SelectLm"
                              >
                                <option value="">Status</option>
                                <option value="0">Approved</option>
                                                        <option value="1">In-progress</option>
                                                        <option value="1">Rejected</option>
                              </CSelect>
                        </CFormGroup>
                        <CFormGroup row className="my-0">
                          <CCol xs="8">
                            <CFormGroup>

                              <CLabel htmlFor="selectSm">submission</CLabel>
                              <CSelect
                                custom
                                size="sm"
                                className="select-box"
                                name="selectSm"
                                id="SelectLm"
                              >
                                <option value="">submission</option>
                                <option value="0">Approved</option>
                                <option value="1">Decline</option>
                              </CSelect>
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="date">Requested date</CLabel>
                              <CInput id="date" type='date' />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">

                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12" className='text-right'>
                            <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                            <CButton
                              variant="outline"
                              size="sm"
                              height='15px'
                              className="mr-2"
                              style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
                              onClick={this.showForm}
                            > Submit</CButton>

                          </CCol>
                        </CFormGroup>
                      </CCardBody>
                    </CCard>
                  </CCol>     
                            )}
                        </div>
                    )}
                <RequestExpert OpenRequest={this.state.OpenRequest} OpenRequestModal={this.OpenRequestModal} />
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

export default connect(mapStateToProps)(EventListingmanagement);
