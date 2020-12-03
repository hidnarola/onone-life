import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, Link } from "react-router-dom";
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
  CFormGroup,
  CInputCheckbox,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Reaptcha from "reaptcha";

import "./login.css";

import { logIn } from "../../../redux/actions/authActions";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "../../../constants/Constants";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("AUTHTOKEN"));

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [googleRecaptchaToken, setGoogleRecaptchaToken] = useState("");

  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const onVerify = (invisible) => (recaptchaToken) => {
    // console.log("Token: ", recaptchaToken);
    setGoogleRecaptchaToken(recaptchaToken);
  };

  const doLogin = () => {
    dispatch(logIn(emailAddress, password, googleRecaptchaToken, history));
  };

  if (isLoggedIn || token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="auto">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      {/* <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                      /> */}
                      <CInput
                        type="email"
                        placeholder="Email Address"
                        autoComplete="emailaddress"
                        onChange={(e) => setEmailAddress(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {errorMessage ? (
                      <p className="text-danger mt-1 mb-1">{errorMessage}</p>
                    ) : null}
                    <CRow className="mb-3 mt-2 align-items-center">
                      <CCol xs="6">
                        <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox
                            id="rememberMe"
                            name="rememberMe"
                            value="rememberMe"
                          />
                          <CLabel
                            variant="checkbox"
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember Me
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton
                          color="link"
                          className="px-0 txt-forgot"
                          onClick={() => {
                            history.push("/forgotPassword");
                          }}
                        >
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <div className="col-sm-12">
                        <Reaptcha
                          // ref={(e) => (this.captcha = e)}
                          sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
                          size="normal"
                          // theme={theme}
                          render="explicit"
                          onVerify={onVerify(false)}
                          // onExpire={this.onExpire(invisible)}
                        />
                      </div>
                    </CRow>
                    <CRow>
                      <CCol xs="12" className="mt-3">
                        <Link to="/Dashboard">
                          <CButton
                            color="secondary"
                            className="px-4 w-100 dark-btn"
                            disabled={!emailAddress || !password}
                            onClick={(e) => doLogin()}
                          >
                            Login
                          </CButton>
                        </Link>
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
};

export default Login;
