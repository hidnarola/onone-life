import React, { Component } from "react";
import { connect } from "react-redux";
import { CWidgetSimple, CRow, CCol } from "@coreui/react";

class FinanceandAccounting extends Component {
  render() {
    return (
      <div>
        <div>
          <cRow>
            <CCol>
              <h4>Finance and accounting</h4>
            </CCol>
          </cRow>
          <CRow>
            <CCol>
              <CWidgetSimple
                className="mr-3"
                header="Fees by country "
                style={{ height: "75px" }}
              ></CWidgetSimple>
            </CCol>
            <CCol>
              <CWidgetSimple
                className="mr-3"
                style={{ height: "75px" }}
                header="Fees by attendee country origin"
              ></CWidgetSimple>
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

export default connect(mapStateToProps)(FinanceandAccounting);
