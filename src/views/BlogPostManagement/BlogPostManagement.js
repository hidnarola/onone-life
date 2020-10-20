import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,

    CSelect,

} from "@coreui/react";


const fields = [
    { key: "Post", label: 'Blog post' },
    { key: "reasone", label: 'Reasone Approed/Decline' },
    { key: "action", label: "Action" },


];

const usersData = [
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",



    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
    {
        Post: "approved user settings",
        reasone: "Settings ot valid",
    },
];

class BlogPostManagement extends Component {


    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Blog Post Management</h4>
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

                        action: (item, index) => {
                            return (

                                <td>
                                    <CSelect
                                        custom
                                        size="sm"
                                        style={{ width: "130px" }}
                                        name="selectSm"
                                        id="SelectLm"
                                    >
                                        <option value="0">choose reasone </option>
                                        <option value="1">Approved</option>
                                        <option value="2">Declined</option>

                                    </CSelect>
                                </td>
                            );
                        }
                    }}



                />
            </>
        );
    }
}

export default BlogPostManagement;
