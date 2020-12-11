import React, { Component } from "react";
import { connect } from "react-redux";
import { CWidgetSimple, CRow, CCol, CSpinner } from "@coreui/react";
import CKEditor from "ckeditor4-react";

import Template from "./templates";

class EmailTemplatesManagement extends Component {
  state = {
    Showtemp: false,
    showEditor: false,
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
                <CRow>
                  <CCol>
                    <h4>Email Templates Management</h4>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      // className="mr-3"
                      header="New Joiner"
                      style={{ height: "73px" }}
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      // className="mr-3"
                      style={{ height: "73px" }}
                      header="Welcome"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Email Verification"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Abandoned Purchase"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Offer"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New Joiner but not purchased in week 1"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="expert profile approval"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="expert profile rejection"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing approval"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing resubmission"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing rejection"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request approval"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request submission"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout request rejection"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event listing rejection"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Account banned email"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event posted by expert to subscriber"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session cancle"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session booking"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Newew session request"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New followers subscribed email"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="subscribed followers event post"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="event or session booking"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Newew session request"
                      onClick={() => {
                        this.setState({ showEditor: !this.state.showEditor });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
              </>
            ) : (
              <>
                <Template showForm={this.showForm} />
              </>
            )}
          </div>
        )}

        {this.state.showEditor ? <CKEditor data={` Add your post`} /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("State: ", state);
  return {};
};

export default connect(mapStateToProps)(EmailTemplatesManagement);
