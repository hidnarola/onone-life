import React, { Component } from "react";
import { connect } from "react-redux";
import { CWidgetSimple, CRow, CCol, CSelect, CSpinner } from "@coreui/react";

class SalesAnalysis extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            <CRow>
              <CCol>
                <CWidgetSimple
                  className="mr-3"
                  header="Revenue by categories"
                  text="$500"
                >
                  <CSelect
                    custom
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">Select category</option>
                  </CSelect>
                </CWidgetSimple>
              </CCol>
              <CCol>
                <CWidgetSimple
                  className="mr-3"
                  header="Revenue by user "
                  text="$500"
                >
                  <CSelect
                    custom
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">Select User</option>
                  </CSelect>
                </CWidgetSimple>
              </CCol>
              <CCol>
                <CWidgetSimple header="Revenue by country" text="$500">
                  <CSelect
                    custom
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">Select Country</option>
                  </CSelect>
                </CWidgetSimple>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CWidgetSimple
                  header="Total fees paid"
                  text="$500"
                  style={{ height: "166px" }}
                ></CWidgetSimple>
              </CCol>
              <CCol>
                <CWidgetSimple header="Transactions IN" text="$500">
                  <CSelect
                    custom
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">Select Gateway</option>
                  </CSelect>
                </CWidgetSimple>
              </CCol>
              <CCol>
                <CWidgetSimple header="Transactions Out" text="$500">
                  <CSelect
                    custom
                    className="select-box"
                    name="selectSm"
                    id="SelectLm"
                  >
                    <option value="0">Select Gateway</option>
                  </CSelect>
                </CWidgetSimple>
              </CCol>
            </CRow>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {};
};

export default connect(mapStateToProps)(SalesAnalysis);
