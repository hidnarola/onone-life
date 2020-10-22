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








class ANNOUNCEMENT extends Component {


    render() {
        return (
            <div>



                <CModal
                    show={this.props.Announcement}
                    onClose={this.props.AnnouncementModal}
                >
                    <CModalHeader closeButton>Add Announcement</CModalHeader>
                    <CModalBody>
                        <CCol xs="10">
                            <CFormGroup>
                                <CLabel htmlFor="date">AnnouncementModal</CLabel>
                                <CTextarea id="date" type='text' style={{ width: "433px" }} />
                            </CFormGroup>
                        </CCol>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={this.props.AnnouncementModal}>Continue</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={this.props.AnnouncementModal}
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

export default connect(mapStateToProps)(ANNOUNCEMENT);
