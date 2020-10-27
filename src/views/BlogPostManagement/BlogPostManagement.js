import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,
    CButton,
  
   

    CFormGroup,
    CLabel,
    CSelect,
    CCard,
  CCardBody,
  CCollapse,
  CCardHeader, CInput,
} from "@coreui/react";
import CKEditor from 'ckeditor4-react';

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
    state = {
    
        formShow: false,
    };


    
    showForm = () => {
        this.setState({ formShow: !this.state.formShow })
      }

    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <h4>Blog Post Management</h4>
                    </CCol>

                </CRow>
                {!this.state.formShow ? (
                    <>
                <CCol xs="12" md="12" className='text-right'>
                                            <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                height='15px'
                                                className="mr-2"
                                                style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
                                                onClick={() => {
                                                    this.showForm();
                                                }}  
                                            > New Post</CButton>
                                           
                                        </CCol>
               

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
                                       Blog Post
                                    
                                         </CCardHeader>
                                         <CCardBody>
                                           <CFormGroup>
                                             <CLabel htmlFor="company">Add tittle</CLabel>
                                             <CInput id="company" placeholder="Enter your title" />
                                           </CFormGroup>
                                          
                                
                                                                   <CFormGroup>
                                             <CLabel htmlFor="vat">status </CLabel>
                                             <CKEditor



data={` Add your post`}

/>
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
            
            </>
        );
    }
}

export default BlogPostManagement;
