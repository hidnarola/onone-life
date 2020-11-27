import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
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
  CToast,
  CToaster,
  CToastBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";

import { BASE_URL } from "../../../constants/Constants";

const ForgotPassword = () => {
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function forgotPassword(email) {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/forgot_password_admin`, {
        email: email,
      });
      // console.log(res.data);
      setMessage(res.data.message);
    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false);
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        {message ? (
          <CToaster position="top-center">
            <CToast show={true} autohide={3000} fade>
              <CToastBody>{message}</CToastBody>
            </CToast>
          </CToaster>
        ) : null}
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardHeader className="forgot-password-header">
                  Forgot Password
                </CCardHeader>
                <CCardBody>
                  <p className="p-sub-forgot">
                    Enter your email below, and we’ll send you the Reset Link
                  </p>
                  <CForm>
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
                        onChange={(e) => setEmailAddress(e.target.value)}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="12">
                        <CButton
                          shape="square"
                          size="lg"
                          disabled={!emailAddress || loading}
                          style={{
                            display: "block",
                            width: "100%",
                            backgroundColor: "#232333",
                            color: "white",
                          }}
                          onClick={() => forgotPassword(emailAddress)}
                        >
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                    <p
                      className="p-back"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/login")}
                    >
                      Back to Login
                    </p>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;
