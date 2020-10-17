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
    { key: "Host_ID", label: 'Host ID' },
    { key: "Request_No", label: 'Request No' },
    { key: "Total_Amount", label: 'Total Amount' },
    { key: "Gateway_Selected", label: 'Gateway Selected' },
    { key: "Processing_Fee", label: 'Processing Fee' },
    { key: "Status", label: 'Status' },

];

const usersData = [
    {
        Host_ID: "SL012356",
        Request_No: "801%DR235689",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',

    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$600",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$50",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$588",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$13",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$544",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$98",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$344",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$65",
        Status: 'New',
    },
    {
        Host_ID: "SL012356",
        Request_No: "801%3A68807",
        Total_Amount: "$800",
        Gateway_Selected: "Paypal",
        Processing_Fee: "$54",
        Status: 'New',
    },
];

class Payoutmanagement extends Component {
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
                        <h4>PayOut Management</h4>
                    </CCol>

                </CRow>

                <CDataTable
                    items={usersData}
                    fields={fields}
                    // columnFilter
                    //    / tableFilter
                    // footer
                    // itemsPerPageSelect
                    //  itemsPerPage={5}
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

export default Payoutmanagement;
