import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CCol,
  CCard,
  CCardBody,
  CButton,
  CCardHeader,
  CInput,
  CFormGroup,
  CLabel,
  CSelect,
  CTextarea,
} from "@coreui/react";

class ReviewAndFeedback extends Component {
  render() {
    return (
      <div>
        <CCol xs="12" sm="12">
          <CFormGroup row>
            <CCol xs="12" md="12" className="text-right">
              <CLabel htmlFor="selectSm" className="w-100"></CLabel>
              <CButton
                variant="outline"
                size="sm"
                height="15px"
                style={{
                  border: "1px solid #232333",
                  backgroundColor: "#232333",
                  borderRadius: "3px",
                  color: "#ffff",
                  height: "38px",
                }}
                onClick={this.props.showFeedbackForm}
              >
                {" "}
                Back
              </CButton>
            </CCol>
          </CFormGroup>
          <CCard>
            <CCardHeader>Review and Feedback Management</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Name</CLabel>
                <CInput id="company" placeholder="Enter your Name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="selectSm">Rating</CLabel>
                    <CSelect
                      custom
                      size="sm"
                      className="select-box"
                      name="selectSm"
                      id="SelectLm"
                    >
                      <option value="">Select</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="selectSm">Rating</CLabel>
                    <CInput type="date" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="selectSm">Review</CLabel>
                    <CTextarea style={{ width: "500px" }} />
                  </CFormGroup>
                </CCol>

                <CCol xs="4"></CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol xs="12" md="12" className="text-right">
                  <CLabel htmlFor="selectSm" className="w-100"></CLabel>
                  <CButton
                    variant="outline"
                    size="sm"
                    height="15px"
                    className="mr-2"
                    style={{
                      border: "1px solid #232333",
                      backgroundColor: "#232333",
                      borderRadius: "3px",
                      color: "#ffff",
                      height: "38px",
                    }}
                    onClick={this.props.showFeedbackForm}
                  >
                    {" "}
                    Submit
                  </CButton>
                </CCol>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {};
};

export default connect(mapStateToProps)(ReviewAndFeedback);
