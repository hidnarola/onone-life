import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,
} from "@coreui/react";

const fields = [
    { key: "Active_Users", label: 'Active Users' },
    { key: "ID" },
    { key: "Last_Log_In", label: 'Last Log In' },
    { key: "Gateway_Used", label: 'Gateway Used' },
    { key: "Enabled_Access_Rights", label: 'Enabled Access Rights' },
    { key: "Activity_Log", label: 'Activity Log' },

];

const usersData = [
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',

    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
    {
        Active_Users: "SL012356",
        ID: "801%DR235689",
        Last_Log_In: "11/05/2020 11:00PM",
        Gateway_Used: "Paypal",
        Enabled_Access_Rights: "Marketing",
        Activity_Log: 'New',
    },
];

class EmployeeAccessManagement extends Component {


    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Employee Access Management</h4>
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

export default EmployeeAccessManagement;
