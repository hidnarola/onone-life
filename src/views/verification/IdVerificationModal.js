import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CFormGroup,
  CForm,
  CContainer,
  CRow,
  CCol,
  CLabel,
  CInput,
  CToast,
  CToaster,
  CToastBody,
} from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import { addNotes } from "../../redux/actions/hostManagementActions";

class IdVerificationModal extends Component {
  state = {
    loading: false,
    education: [],
    certification: [],
  };

  componentDidMount() {
    this.setState({
      education: this.props.educationData,
      certification: this.props.certificationData,
    });
  }

  async saveNotes(id, notes) {
    this.setState({ loading: true });
    try {
      const res = await axios.put(`${BASE_URL}/admin/expert/notes`, {
        id,
        notes,
      });
      //   console.log(res);
      this.props.dispatch(
        addNotes(res.data.message, this.props.page, this.props.pageSize)
      );
    } catch (error) {
      console.log("Error", error);
    }
    this.setState({ loading: false });
    this.props.onClose();
  }
  render() {
    console.log("State: ", this.state.education);
    return (
      <CModal show={true} onClose={this.props.onClose}>
        <CModalHeader closeButton>Education</CModalHeader>
        <CModalBody>
          {this.state.education.map((e, i) => {
            return (
              <CContainer key={i}>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-email">College</CLabel>
                        <CInput
                          type="text"
                          id="nf-email"
                          name="nf-email"
                          value={e.college}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-password">Degree</CLabel>
                        <CInput
                          type="text"
                          id="nf-password"
                          name="nf-password"
                          value={e.degree}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-speciality">Speciality</CLabel>
                        <CInput
                          type="text"
                          id="nf-speciality"
                          name="nf-speciality"
                          value={e.speciality}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-to">To</CLabel>
                        <CInput
                          type="text"
                          id="nf-to"
                          name="nf-to"
                          value={e.to}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-from">From</CLabel>
                        <CInput
                          type="text"
                          id="nf-from"
                          name="nf-from"
                          value={e.from}
                        />
                      </CFormGroup>
                    </CForm>
                  </CCol>
                </CRow>
              </CContainer>
            );
          })}
          <CModalHeader closeButton>Certification</CModalHeader>
          {this.state.certification.map((e, i) => {
            return (
              <CContainer key={i}>
                <CRow>
                  <CCol sm="12">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-email">Certificate</CLabel>
                        <CInput
                          type="text"
                          id="nf-certificate"
                          name="nf-certificate"
                          value={e.certificate}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-password">Description</CLabel>
                        <CInput
                          type="text"
                          id="nf-description"
                          name="nf-description"
                          value={e.description}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-issuedBy">Issued By</CLabel>
                        <CInput
                          type="text"
                          id="nf-issuedBy"
                          name="nf-issuedBy"
                          value={e.issuedBy}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-to">To</CLabel>
                        <CInput
                          type="text"
                          id="nf-to"
                          name="nf-to"
                          value={e.to}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-from">From</CLabel>
                        <CInput
                          type="text"
                          id="nf-from"
                          name="nf-from"
                          value={e.from}
                        />
                      </CFormGroup>
                    </CForm>
                  </CCol>
                </CRow>
              </CContainer>
            );
          })}
        </CModalBody>
        <CModalFooter>
          <CButton
            disabled={this.state.loading ? true : false}
            color="primary"
            onClick={() => this.saveNotes(this.props.id, this.state.notes)}
          >
            Verify Documents
          </CButton>
          <CButton color="secondary" onClick={this.props.onClose}>
            Cancel
          </CButton>
        </CModalFooter>
        <CToaster position="top-right">
          <CToast
            key="toast"
            show={this.props.addNotesMessage !== undefined ? true : false}
            autohide="3000"
            // fade={toast.fade}
          >
            <CToastBody>{this.props.addNotesMessage}</CToastBody>
          </CToast>
        </CToaster>
      </CModal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addNotesMessage: state.hostManagement.addNotesMessage,
  };
};

export default connect(mapStateToProps)(IdVerificationModal);
