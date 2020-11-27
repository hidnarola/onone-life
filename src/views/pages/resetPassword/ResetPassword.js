import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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

const ResetPassword = () => {
  const history = useHistory();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function resetPassword(token, password) {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/resetPassword`, {
        token,
        password,
      });
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
                  Reset Password
                </CCardHeader>
                <CCardBody>
                  <p className="p-sub-forgot">Enter your new password below</p>
                  <CForm>
                    <CInputGroup className="mb-3">
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
                        autoComplete="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="12">
                        <CButton
                          shape="square"
                          size="lg"
                          disabled={!password || loading}
                          style={{
                            display: "block",
                            width: "100%",
                            backgroundColor: "#232333",
                            color: "white",
                          }}
                          onClick={() => resetPassword(token, password)}
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

export default ResetPassword;
