import React, { Component } from "react";
import {

    CDataTable,
    CRow,
    CCol,
    CFormGroup,
    CSelect,
    CLabel,
    CButton,
    CInput,
    CCard,
  CCardBody,
  CCollapse,
    CCardHeader,
    CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CTextarea,
  CModalHeader
} from "@coreui/react";


const fields = [
    { key: "Description", label: 'Description' },
    { key: "Author_name", label: 'Author Name' },
    { key: "action", label: "Action" },


];

const usersData = [
    {
        Description: "approved user settings",
        Author_name: "Sophia",



    },
    {
        Description: "approved user settings",
        Author_name: "Isabella",
    },
    {
        Description: "approved user settings",
        Author_name: "Sophia",
    },
    {
        Description: "approved user settings",
        Author_name: "Olivia",
    },
    {
        Description: "approved user settings",
        Author_name: "Jacob",
    },
    {
        Description: "approved user settings",
        Author_name: "Mason",
    },
    {
        Description: "approved user settings",
        Author_name: "William",
    },
    {
        Description: "approved user settings",
        Author_name: "Sophia",
    },
    {
        Description: "approved user settings",
        Author_name: "Olivia",
    },
    {
        Description: "approved user settings",
        Author_name: "Jayden",
    },
];

class ManageQuotes extends Component {
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
                        <h4>Manage Quotes</h4>
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
                                    onClick={this.showForm}
                                > Add Quotes </CButton>

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

                                action: (item, index) => {
                                    return (


                                        <td className="py-2" style={{ whiteSpace: "nowrap" }}>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                className="mr-2"
                                                style={{ border: "1px solid #232333" }}
                                                onClick={this.showForm}

                                            >
                                                Edit
          </CButton>
                                            <CButton
                                                variant="outline"
                                                size="sm"
                                                className="mr-2"
                                                style={{ border: "1px solid #232333" }}
                                                onClick={this.toggle}
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
                                            {/* <CInput className='col-sm-3' type='date' /> */}
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
                                         Manage Quotes
                                    
                                         </CCardHeader>
                                         <CCardBody>
                                           <CFormGroup>
                                             <CLabel htmlFor="company">Author Name</CLabel>
                                             <CInput id="company" placeholder="Enter your Category Name" />
                                           </CFormGroup>
                                          
                                          
                                                                   <CFormGroup>
                                   
                                             <CLabel htmlFor="company">Description</CLabel>
                                             <CInput id="company" placeholder="Enter Description" />
                                           </CFormGroup>
                                           <CFormGroup row className="my-0">
                                             <CCol xs="8">
                                               <CFormGroup>
                                               <CLabel htmlFor="date"> Quote Activation</CLabel>
                                               <CSelect
                                                   custom
                                                   size="sm"
                                                   className="select-box"
                                                   name="selectSm"
                                                   id="SelectLm"
                                                 >
                                                   <option value="">Select</option>
                                                   <option value="0">Active</option>
                                                     <option value="1">Deactivate</option>
                                                                           
                                                 </CSelect>
                                               </CFormGroup>
                                             </CCol>
                                             <CCol xs="4">
                                               <CFormGroup>
                                                 <CLabel htmlFor="date">schedule quote</CLabel>
                                                 <CInput id="date" type='date' />
                                               </CFormGroup>
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
            <p> Are you sure you want to delete this quotes ?</p>
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

export default ManageQuotes;
