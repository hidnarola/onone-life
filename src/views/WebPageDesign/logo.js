import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CCol,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CInput,
} from "@coreui/react";

class Logo extends Component {
  state = {
    imgSrc: null,
  };
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        imgSrc: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  Remove = () => {
    this.setState({ imgSrc: null });
  };

  render() {
    return (
      <div>
        <CModal show={this.props.OpenLogo} onClose={this.props.LogoUpload}>
          <CModalHeader closeButton>Upload</CModalHeader>
          <CModalBody>
            <CCol xs="10">
              <CFormGroup>
                {this.state.imgSrc === null ? (
                  <div class="fileUpload btn btn-primary">
                    <span>Upload</span>
                    <CInput
                      type="file"
                      class="upload"
                      onChange={this.onImageChange}
                    />
                  </div>
                ) : (
                  <CFormGroup>
                    <CCol style={{ paddingLeft: "170px" }}>
                      <img
                        src={this.state.imgSrc}
                        alt="logo"
                        width="50px"
                        height="50px"
                      />
                    </CCol>
                  </CFormGroup>
                )}
              </CFormGroup>
            </CCol>
          </CModalBody>
          <CModalFooter>
            {this.state.imgSrc !== null && (
              <CButton color="primary" onClick={this.Remove}>
                Remove
              </CButton>
            )}
            <CButton color="primary" onClick={this.props.LogoUpload}>
              Continue
            </CButton>{" "}
            <CButton color="secondary" onClick={this.props.LogoUpload}>
              Cancel
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {};
};

export default connect(mapStateToProps)(Logo);
