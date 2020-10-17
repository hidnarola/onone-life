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




                />
            </>
        );
    }
}

export default Payoutmanagement;
