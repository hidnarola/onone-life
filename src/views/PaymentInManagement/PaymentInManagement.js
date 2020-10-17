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
    { key: "Transaction_ID", label: 'Transaction ID' },
    { key: "Attendee_User_ID", label: 'Attendee User ID' },
    { key: "Amount" },
    { key: "Gateway_Used", label: 'Gateway Used' },
    { key: "Credit_Balance_Before_TopUp", label: 'Credit Balance Before TopUp' },
    { key: "Total_Credit_Balance_After_TopUp", label: 'Total Credit Balance After TopUp' },

];

const usersData = [
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',

    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$600",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$50",
        Total_Credit_Balance_After_TopUp: '$250',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$588",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$13",
        Total_Credit_Balance_After_TopUp: '$545',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$544",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$98",
        Total_Credit_Balance_After_TopUp: '$65',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$344",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$65",
        Total_Credit_Balance_After_TopUp: '$987',
    },
    {
        Transaction_ID: "SL012356",
        Attendee_User_ID: "801%3A68807",
        Amount: "$800",
        Gateway_Used: "Paypal",
        Credit_Balance_Before_TopUp: "$54",
        Total_Credit_Balance_After_TopUp: '$354',
    },
];

class PaymentInManagement extends Component {
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
                            header="Total Transactions"
                            text="500600"
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            className="mr-3"
                            header="Total Credits SolD"
                            text="2000020"
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            header="Total Event/Listing Purchased"
                            text="1203556"
                        ></CWidgetSimple>
                    </CCol>

                </CRow>

                <CDataTable
                    items={usersData}
                    fields={fields}
                    // columnFilter
                    //    / tableFilter
                    // footer
                    // itemsPerPageSelect
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

export default PaymentInManagement;
