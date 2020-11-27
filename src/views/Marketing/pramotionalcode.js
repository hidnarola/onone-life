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
} from "@coreui/react";

class pramotionalcode extends Component {
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
                onClick={this.props.showPromoCodeForm}
              >
                {" "}
                Back
              </CButton>
            </CCol>
          </CFormGroup>
          <CCard>
            <CCardHeader>Pramotional code Management</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Promo code</CLabel>
                <CInput id="company" placeholder="Enter your  Title" />
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor="selectSm">Promo code Type</CLabel>
                <CSelect
                  custom
                  size="sm"
                  className="select-box"
                  name="selectSm"
                  id="SelectLm"
                >
                  <option value="">Select</option>
                  <option value="0">Flat</option>
                  <option value="1">percentage</option>
                </CSelect>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="selectSm">Code type</CLabel>
                    <CSelect
                      custom
                      size="sm"
                      className="select-box"
                      name="selectSm"
                      id="SelectLm"
                    >
                      <option value="">Select</option>
                      <option value="0">General</option>
                      <option value="1">category specific</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="date">Discount persentage</CLabel>
                    <CInput id="date" type="text" />
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
                    onClick={this.props.showPromoCodeForm}
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

export default connect(mapStateToProps)(pramotionalcode);
