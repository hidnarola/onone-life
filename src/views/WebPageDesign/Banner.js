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
    CModalHeader,
    CInput

} from "@coreui/react";



class Banner extends Component {
    state = {
        imgSrc: null
    }
    onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {
            this.setState({
                imgSrc: URL.createObjectURL(event.target.files[0])
            });
        }
    }
    Remove = () => {
        this.setState({ imgSrc: null })
    }

    render() {
        return (
            <div>
                <CModal
                    show={this.props.Banner}
                    onClose={this.props.BannerLogoUpload}
                >
                    <CModalHeader closeButton>Upload banner</CModalHeader>
                    <CModalBody>
                        <CCol xs="10">
                            <CFormGroup>
                                {this.state.imgSrc === null ? (
                                    <div class="fileUpload btn btn-primary">
                                        <span>Upload</span>
                                        <CInput type="file" class="upload" onChange={this.onImageChange} />
                                    </div>
                                ) : (



                                        <CFormGroup>


                                            <CCol style={{ paddingLeft: '170px' }}>
                                                <img src={this.state.imgSrc} alt='logo' width='50px' height='50px' />
                                            </CCol>

                                        </CFormGroup>
                                    )}


                            </CFormGroup>

                        </CCol>
                    </CModalBody>
                    <CModalFooter>
                        {this.state.imgSrc !== null && (
                            <CButton color="primary" onClick={this.Remove}>Remove</CButton>
                        )}
                        <CButton color="primary" onClick={this.props.BannerLogoUpload}>Continue</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={this.props.BannerLogoUpload}
                        >Cancel</CButton>
                    </CModalFooter>
                </CModal>


            </div >


        );
    }
}
const mapStateToProps = (state) => {
    // console.log("State: ", state);
    return {

    };
};

export default connect(mapStateToProps)(Banner);
