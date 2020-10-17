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
                                    <h4>Event Listing Management</h4>
                                </CCol>

                            </CRow>
                            <CFormGroup row>
                                <CCol xs="12" md="3">
                                    <CLabel htmlFor="selectSm">Sort By</CLabel>
                                    <CSelect
                                        custom
                                        size="sm"
                                        className="select-box"
                                        name="selectSm"
                                        id="SelectLm"
                                    >
                                        <option value="0">Date</option>
                                        <option value="1"> 05/05/2020</option>
                                        <option value="2"> 05/05/2020</option>
                                        <option value="3"> 05/05/2020</option>
                                        <option value="4"> 05/05/2020</option>
                                        <option value="5"> 05/05/2020</option>
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
                                                    style={{ border: "1px solid #232333" }}

                                                >
                                                    Request Amendment
                      </CButton>
                                                <CButton
                                                    variant="outline"
                                                    size="sm"
                                                    className="mr-2"
                                                    style={{ border: "1px solid #232333" }}

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

export default connect(mapStateToProps)(EventListingmanagement);
