import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CWidgetSimple,
  CRow,
  CCol,
  CSpinner,
  CButton,
  CInput,
  CLabel,
  CFormGroup,
} from "@coreui/react";
import CKEditor from "ckeditor4-react";
import {
  addTemplate,
  // getTemplate,
} from "../../redux/actions/emailTemplatesActions";

import Template from "./templates";

class EmailTemplatesManagement extends Component {
  state = {
    Showtemp: false,
    showEditor: false,
    mailData: "",
    type: "",
    subject: "",
  };

  showForm = () => {
    this.setState({ Showtemp: !this.state.Showtemp });
  };

  componentDidMount() {
    // this.props.dispatch(getTemplate());
  }

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
                          type: "welcome_email",
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
                      header="Reset Password"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "reset_password",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  {/* <CCol>
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
                      header="Payout Request Rejection"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "payout_request_rejection",
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
                      header="Account Banned Email"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "account_banned_email",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event posted by Expert to Subscriber"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_posted_by_expert_to_subscriber",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event or Session Cancel"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_or_session_cancel",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event or Session Booking"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_or_session_booking",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New session request"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "new_session_request",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New Followers Subscribed Email"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "new_followers_subscribed_email",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>

                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Subscribed Followers Event Post"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "subscribed_followers_event_post",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="Event or Session Booking"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "event_or_session_booking",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol>
                  <CCol>
                    <CWidgetSimple
                      style={{ height: "73px" }}
                      header="New Session Request"
                      onClick={() => {
                        this.setState({
                          showEditor: !this.state.showEditor,
                          type: "new_session_request",
                        });
                      }}
                    ></CWidgetSimple>
                  </CCol> */}
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
            <CFormGroup>
              <CLabel>Add Subject</CLabel>
              <CInput
                placeholder="Enter your subject here"
                onChange={(e) => this.setState({ subject: e.target.value })}
              />
            </CFormGroup>

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
              color="primary"
              onClick={() => {
                this.props.dispatch(
                  addTemplate(
                    this.state.type,
                    this.state.mailData,
                    this.state.subject
                  )
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
