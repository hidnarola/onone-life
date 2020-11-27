import React, { Component } from "react";
import { connect } from "react-redux";
import { CRow, CCol, CInput, CButton } from "@coreui/react";

class FeeManagement extends Component {
  render() {
    return (
      <div>
        <div>
          <cRow>
            <CCol>
              <h4>Fee Management</h4>
            </CCol>
            <CCol>
              <p>Fixed + x%</p>
            </CCol>
          </cRow>
          <CRow style={{ width: "30%", margin: "0 0" }}>
            <CCol xs={6}>
              <CInput type="text" value="25%"></CInput>
            </CCol>
            <CCol xs={6}>
              <CInput type="text" value="2%"></CInput>
            </CCol>
            <CCol xs={12} mt={3}>
              <CButton
                className=" btn-lg btn-block"
                style={{
                  backgroundColor: "#ED1C24",
                  color: "#fff",
                  marginTop: "30px",
                }}
              >
                Save
              </CButton>
            </CCol>
          </CRow>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {};
};

export default connect(mapStateToProps)(FeeManagement);
