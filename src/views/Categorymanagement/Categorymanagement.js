import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,
    CLabel,
    CButton,
    CFormGroup,
    CSelect,
    CCard,
  CCardBody,
  CCollapse,
    CCardHeader, CInput,
    CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CTextarea,
  CModalHeader
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
    state = {
        formShow: false,
        setModal: false,
    }
    showForm = () => {
    this.setState({ formShow: !this.state.formShow })
    }
    
  toggle = () => {
    this.setState({ setModal: !this.state.setModal })
  }

    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Category Management</h4>
                    </CCol>

                </CRow>
                {!this.state.formShow ? (
                      <>
                <CFormGroup row>
                    <CCol xs="12" md="12" className='text-right'>
                        <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                        <CButton
                            variant="outline"
                            size="sm"
                            height='15px'
                            className="mr-2"
                            style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
onClick = {this.showForm}
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
                                                onClick = {this.showForm}

                                            >
                                                Edit
          </CButton>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                className="mr-2"
                                                style={{ border: "1px solid #232333" }}
                                                onClick = {this.toggle}
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
                            }} />
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
                                         Cateory Management
                                    
                                         </CCardHeader>
                                         <CCardBody>
                                           <CFormGroup>
                                             <CLabel htmlFor="company">Category Name</CLabel>
                                             <CInput id="company" placeholder="Enter your Category Name" />
                                           </CFormGroup>
                                          
                                          
                                                                   <CFormGroup>
                                             <CLabel htmlFor="vat">Category Level </CLabel>
                                             <CSelect
                                                   custom
                                                   size="sm"
                                                   className="select-box"
                                                   name="selectSm"
                                                   id="SelectLm"
                                                 >
                                                   <option value="">Select</option>
                                                   <option value="0">Main category</option>
                                                                           <option value="1">Sub category</option>
                                                                           <option value="1">Topic</option>
                                                 </CSelect>
                                           </CFormGroup>
                                           <CFormGroup row className="my-0">
                                             <CCol xs="8">
                                               <CFormGroup>
                   
                                              
                                                 <CLabel htmlFor="company">Category Faq</CLabel>
                                             <CInput id="company" placeholder="Enter your Category " />
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
                
                <CModal
          show={this.state.setModal}
          onClose={this.toggle}
        >
          <CModalHeader closeButton>Delete</CModalHeader>
          <CModalBody>
            <CCol xs="10">
              <CFormGroup>
            <p> Are you sure you want to delete this category ?</p>
              </CFormGroup>
            </CCol>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary">Yes</CButton>{' '}
            <CButton
              color="secondary"
              onClick={this.toggle}
            >Cancel</CButton>
          </CModalFooter>
        </CModal>
            </>
        );
    }
}

export default CategoryManagement;