import CKEditor from 'ckeditor4-react';
import { connect } from "react-redux";
import React, { Component } from "react";
import {
    CButton,
    CCol,
    CFormGroup,
    CLabel,
} from "@coreui/react";





class ChangePage extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <CCol xs="12" sm="12">
                        <CFormGroup row>
                            <CCol xs="12" md="12" className='text-right'>
                                <CLabel htmlFor="selectSm" className='w-100' ></CLabel>
                                <CButton
                                    variant="outline"
                                    size="sm"
                                    height='15px'

                                    style={{ border: "1px solid #232333", backgroundColor: '#232333', borderRadius: '3px', color: '#ffff', height: '38px' }}
                                    onClick={this.props.showForm}
                                > Back</CButton>

                            </CCol>
                        </CFormGroup>
                    </CCol>

                    <CKEditor



                        data={'Here you can change page content..'}

                    />
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log("State: ", state);
    return {

    };
};
export default connect(mapStateToProps)(ChangePage);
