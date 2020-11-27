import React, { Component } from "react";
import { connect } from "react-redux";
import { CWidgetSimple, CRow, CCol, CSpinner } from "@coreui/react";

import Template from "./templates";

class EmailTemplatesManagement extends Component {
  state = {
    Showtemp: false,
  };

  showForm = () => {
    this.setState({ Showtemp: !this.state.Showtemp });
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <CSpinner size="sm" variant="grow" />
        ) : (
          <div>
            {!this.state.Showtemp ? (
              <>
                <cRow>
                  <CCol>
                    <h4>Email Templates Management</h4>
                  </CCol>
                </cRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      className="mr-3"
                      header="New Joiner"
                      style={{ height: "73px" }}
                      onClick={() => {
                        this.showForm();
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      className="mr-3"
                      style={{ height: "73px" }}
                      header="Welcome"
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Email Verification"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Abandoned Purchase"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple style={{ height: "73px" }} header="Offer ">
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New Joiner but not purchased in week 1"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="expert profile approval"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="expert profile rejection"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing approval"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing resubmission"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing rejection "
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request approval"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request submission"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request rejection"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing rejection "
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Account banned email"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event posted by expert to subscriber"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session cancle"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session booking"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Newew session request"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New followers subscribed email"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="subscribed followers event post"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session booking"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Newew session request"
                    >
                      {" "}
                    </CWidgetSimple>
                  </CCol>
                </CRow>
              </>
            ) : (
              <>
                <Template showForm={this.showForm} />{" "}
              </>
            )}
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

export default connect(mapStateToProps)(EmailTemplatesManagement);
