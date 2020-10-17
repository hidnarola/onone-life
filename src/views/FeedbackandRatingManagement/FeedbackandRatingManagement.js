import React, { Component } from "react";
import {

    CDataTable,

    CRow,
    CCol,
    CFormGroup,
    CLabel,
    CSelect,
} from "@coreui/react";

const fields = [
    { key: "User_Name", label: 'User Name' },
    { key: "Rating" },
    { key: "Review" },


];

const usersData = [
    {
        User_Name: "alex",
        Rating: "3/5",
        Review: "Some review text here",


    },
    {
        User_Name: "James",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "John",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "Robert",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "Mary",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "Patricia",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "alex",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "alex",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "Patricia",
        Rating: "3/5",
        Review: "Some review text here",
    },
    {
        User_Name: "alex",
        Rating: "3/5",
        Review: "Some review text here",
    },
];

class FeedbackandRatingManagement extends Component {



    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Feedback and Rating Management</h4>
                    </CCol>

                </CRow>

                <CFormGroup row>
                    <CCol md='3'>
                        <CLabel htmlFor="selectSm">Sort By</CLabel>
                        <CSelect
                            custom

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
                </CFormGroup>

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

export default FeedbackandRatingManagement;
