import React, { Component } from "react";
import { connect } from "react-redux";
import { CWidgetSimple, CRow, CCol, CSpinner, CButton } from "@coreui/react";
import CKEditor from "ckeditor4-react";
import { addTemplate } from "../../redux/actions/emailTemplatesActions";

import Template from "./templates";

class EmailTemplatesManagement extends Component {
  state = {
    Showtemp: false,
    showEditor: false,
    mailData: "",
    type: "",
  };

  showForm = () => {
    this.setState({ Showtemp: !this.state.Showtemp });
  };

  componentDidUpdate(prevProps) {
    if (this.props.addTemplateMessage !== prevProps.addTemplateMessage) {
      if (this.props.addTemplate !== "") {
        this.setState({ showEditor: false });
      }
    }
  }

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
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "new_joiner",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      // className="mr-3"
                      style={{ height: "73px" }}
                      header="Welcome"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "welcome",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Email Verification"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "email_verification",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Abandoned Purchase"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "abandoned_purchase",
                        });
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
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "offer",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New Joiner but not purchased in week 1"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "new_joiner_but_not_purchased_in_week_1",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Expert Profile Approval"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "expert_profile_approval",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Expert Profile Rejection"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "expert_profile_rejection",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event Listing Approval"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_listing_approval",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event Listing Resubmission"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_listing_resubmission",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event Listing Rejection"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_listing_rejection",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="payout Request Approval"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "payout_request_approval",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Payout Request Submission"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "payout_request_submission",
                        });
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

        {this.state.showEditor ? (
          <div>
            <CKEditor
              // editor={ClassicEditor}
              data={` Add your post`}
              onChange={(event) => {
                const data = event.editor.getData();
                console.log({ data });
                this.setState({ mailData: data });
              }}
            />
            <CButton
              onClick={() => {
                this.props.dispatch(
                  addTemplate(this.state.type, this.state.mailData)
                );
                console.log("Save", this.state.mailData);
              }}
            >
              Save
            </CButton>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addTemplateMessage: state.emailTemplates.addTemplateMessage,
  };
};

export default connect(mapStateToProps)(EmailTemplatesManagement);
