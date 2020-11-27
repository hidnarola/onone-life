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

class PressLogo extends Component {
  fileObj = [];
  fileArray = [];
  state = {
    imgSrc: [],
  };

  Remove = () => {
    this.setState({ imgSrc: [] });
    this.fileObj = [];
    this.fileArray = [];
  };

  uploadMultipleFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.fileObj.push(event.target.files);
      for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
      }
      this.setState({ imgSrc: this.fileArray });
    }
  };
  render() {
    return (
      <div>
        <CModal
          show={this.props.PressLogo}
          onClose={this.props.PressLogoUpload}
        >
          <CModalHeader closeButton>Upload press logo</CModalHeader>
          <CModalBody>
            <CCol xs="10">
              <CFormGroup>
                <div class="fileUpload btn btn-primary">
                  <span>Upload multiple images</span>
                  <CInput
                    type="file"
                    class="upload"
                    multiple
                    onChange={this.uploadMultipleFiles}
                  />
                </div>

                <CFormGroup>
                  <CCol>
                    {(this.fileArray || []).map((url) => (
                      <img src={url} alt="logo" width="50px" height="50px" />
                    ))}
                  </CCol>
                </CFormGroup>
              </CFormGroup>
            </CCol>
          </CModalBody>
          <CModalFooter>
            {this.state.imgSrc.length > 0 && (
              <CButton color="primary" onClick={this.Remove}>
                Remove Logos
              </CButton>
            )}
            <CButton color="primary" onClick={this.props.PressLogoUpload}>
              Continue
            </CButton>{" "}
            <CButton color="secondary" onClick={this.props.PressLogoUpload}>
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

export default connect(mapStateToProps)(PressLogo);
