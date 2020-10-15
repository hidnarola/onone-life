import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import { ReCaptcha } from 'react-recaptcha-google'
import { logIn } from "../../../redux/actions/authActions";

class Login extends React.Component {
  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  loggedIn(email, password) {
    this.props.dispatch(logIn(email, password));
  }

  onChange = (value, key) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="4">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1 className="login-header">Login</h1>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="emailAddress"
                          name="emailAddress"
                          type="text"
                          placeholder="Email Address"
                          autoComplete="emailaddress"
                          onChange={(e) =>
                            this.onChange(e.target.value, "emailAddress")
                          }
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) =>
                            this.onChange(e.target.value, "password")
                          }
                        />
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton className="px-0">Remember Me</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                      {/* <CRow>
                        <div>
                          <ReCaptcha
                            ref={(el) => { this.captchaDemo = el; }}
                            size="normal"
                            data-theme="dark"
                            render="explicit"
                            sitekey="your_site_key"
                            onloadCallback={() => this.onLoadRecaptcha}
                            verifyCallback={() => this.verifyCallback}
                          />
                        </div>
                      </CRow> */}
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={() =>
                              this.loggedIn(
                                this.state.emailAddress,
                                this.state.password
                              )
                            }
                          >
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/* <CCard
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // todo: state.todos[ownProps.id]
  authData: state.auth.authData,
});

// export default Login;

export default connect(mapStateToProps)(Login);
