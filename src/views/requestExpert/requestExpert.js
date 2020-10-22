import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CButton,

    CCol,

    CFormGroup,
    CLabel,

    CModal,

    CModalBody,
    CModalFooter,
    CTextarea,
    CModalHeader

} from "@coreui/react";








class RequestExpert extends Component {


    render() {
        return (
            <div>



                <CModal
                    show={this.props.OpenRequest}
                    onClose={this.props.OpenRequestModal}
                >
                    <CModalHeader closeButton>Request Expert</CModalHeader>
                    <CModalBody>
                        <CCol xs="10">
                            <CFormGroup>
                                <CLabel htmlFor="date">Request</CLabel>
                                <CTextarea id="date" type='text' style={{ width: "433px" }} />
                            </CFormGroup>
                        </CCol>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={this.props.OpenRequestModal}>Continue</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={this.props.OpenRequestModal}
                        >Cancel</CButton>
                    </CModalFooter>
                </CModal>


            </div>


        );
    }
}
const mapStateToProps = (state) => {
    // console.log("State: ", state);
    return {

    };
};

export default connect(mapStateToProps)(RequestExpert);
