import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,
    CLabel,
    CButton,
    CFormGroup,
    CSelect,

} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const fields = [
    { key: "Category_name", label: 'Category Name' },
    { key: "Category_type", label: 'Category type' },
    { key: "Main_category", label: 'Main category' },
    { key: "Sub_category", label: 'Sub category' },
    { key: "category_icon", label: 'category Icon' },
    { key: "action", label: "Action" },


];

const usersData = [
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",


    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
    {
        Category_name: "SL012356",
        Category_type: "Main category",
        Main_category: "topic",
        Sub_category: "Sub category",
        category_icon: "Marketing",
    },
];

class CategoryManagement extends Component {


    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Category Management</h4>
                    </CCol>

                </CRow>
                <CFormGroup row>
                    <CCol xs="12" md="12" className='text-right'>
                        <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                        <CButton
                            variant="outline"
                            size="sm"
                            height='15px'
                            className="mr-2"
                            style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}

                        > Add category</CButton>

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
                    scopedSlots={{
                        category_icon: (item, index) => {
                            return (
                                <td>
                                    <CIcon name="cil-task" />
                                </td>
                            )
                        },

                        action: (item, index) => {
                            return (
                                <td className="py-2" style={{ whiteSpace: "nowrap" }}>
                                    <CButton
                                        variant="outline"
                                        size="sm"
                                        className="mr-2"
                                        style={{ border: "1px solid #232333" }}


                                    >
                                        Edit
          </CButton>
                                    <CButton
                                        variant="outline"
                                        size="sm"
                                        className="mr-2"
                                        style={{ border: "1px solid #232333" }}

                                    >
                                        Delete
          </CButton>
                                    <CSelect
                                        custom
                                        size="sm"
                                        style={{ width: "130px" }}
                                        name="selectSm"
                                        id="SelectLm"
                                    >
                                        <option value="0">choose category </option>
                                        <option value="1">Active</option>
                                        <option value="2"> De-Active</option>

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

export default CategoryManagement;
