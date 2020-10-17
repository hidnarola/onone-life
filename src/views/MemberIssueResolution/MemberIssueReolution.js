import React, { Component } from "react";
import {
    CCardBody,
    CDataTable,
    CButton,
    CCollapse,
    CLink,
    CRow,
    CCol,
    CWidgetSimple
} from "@coreui/react";

const fields = [
    { key: "Issue_Raised_By" },
    { key: "Role" },
    { key: "Description" },
    { key: "Message_management" },
    { key: "Resolution_lead" },
    { key: "Decision" },
    { key: "Decision_notes" },
];

const usersData = [
    {
        Issue_Raised_By: "Jhone Flix",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Tom Cruise",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Linus bieber",
        Role: "Employee",
        Description: "Issue with my system.",
        Message_management: "Setting related issue",
        Resolution_lead: "Sophia",
        Decision: 'In progress',
        Decision_notes: 'Refund credit to attendee'
    },
    {
        Issue_Raised_By: "Mason",
        Role: "holder",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "William",
        Decision: 'resolved',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Jhone Flix",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Tom Cruise",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Jayden",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Olivia",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Jhone Flix",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Tom Cruise",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Emma",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Jacob",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Isabella",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Emma",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Joshua",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Benjamin",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
    {
        Issue_Raised_By: "Lillian",
        Role: "User",
        Description: "Issue with my current account settings.",
        Message_management: "Setting related issue",
        Resolution_lead: "Victoria",
        Decision: 'New',
        Decision_notes: 'Refund credit to host'
    },
];

class MemberIssueReolution extends Component {
    state = {
        details: [],
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

    resetPassword = (index) => {
        console.log("Password Reset Clicked!!!", index);
    };

    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <CWidgetSimple
                            className="mr-3"
                            header="Total issue"
                            text="50"
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            className="mr-3"
                            header="New"
                            text="10"
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            header="In-Progress"
                            text="5"
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            header="Resolved"
                            text="15"
                        ></CWidgetSimple>
                    </CCol>
                </CRow>

                <CDataTable
                    items={usersData}
                    fields={fields}
                    // columnFilter
                    tableFilter
                    // footer
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover

                    pagination
                    scopedSlots={{
                        // 'password': () => (
                        //     <td >
                        //         <CButton block color="link">Reset</CButton>
                        //     </td>
                        // ),
                        name: (item, index) => {
                            return (
                                <td className="py-2">
                                    <CLink href="http://localhost:3000/dashboard" target="_blank">
                                        {item.name}
                                    </CLink>
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
                                        style={{ border: "1px solid #232333" }}
                                        onClick={() => {
                                            this.toggleDetails(index);
                                        }}
                                    >
                                        {this.state.details.includes(index) ? "Hide" : "Show"}
                                    </CButton>
                                    <CButton
                                        variant="outline"
                                        size="sm"
                                        style={{ border: "1px solid #232333" }}
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
                                        <p className="text-muted">User since: {item.signup_date}</p>
                                        <p className="text-muted">No. of Signups per Week: 15</p>
                                        <p className="text-muted">Total User Counts: 25</p>
                                        <p className="text-muted">Total Experts: 15</p>
                                        <p className="text-muted">Total Attendees: 55</p>
                                        <p className="text-muted">Languages: English</p>
                                        <p className="text-muted">Expert Purpose: NA</p>
                                        <p className="text-muted">
                                            Expert Account Approval Date: 05/05/2020
                  </p>
                                        <p className="text-muted">Account Approved By: Test</p>
                                        <p className="text-muted">Approval Notes and Comments: -</p>
                                        <p className="text-muted">IP Address Log: -</p>
                                        <p className="text-muted">Change Account Status: Warning1</p>
                                        <p className="text-muted">Member Account View: -</p>
                                        <p className="text-muted">
                                            No. of Listing + Listing History: -
                  </p>
                                        <p className="text-muted">
                                            No. of Events Attended + Attendance History: -
                  </p>
                                        <p className="text-muted">Expert Categories: -</p>
                                        <p className="text-muted">Expert Secondary Categories: -</p>
                                        <p className="text-muted">
                                            No. of Expert Request Submitted: -
                  </p>
                                        <p className="text-muted">
                                            Total Value of All Transactions : -
                  </p>
                                        <p className="text-muted">Landing Page Link : -</p>
                                        {/* <CButton size="sm" color="info">
                                            User Settings
                                        </CButton>
                                        <CButton size="sm" color="danger" className="ml-1">
                                            Delete
                                        </CButton> */}
                                    </CCardBody>
                                </CCollapse>
                            );
                        },
                    }}

                />
            </>
        );
    }
}

export default MemberIssueReolution;
