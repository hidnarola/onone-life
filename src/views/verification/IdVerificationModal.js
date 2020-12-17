import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CContainer,
  CLabel,
  CToast,
  CToaster,
  CToastBody,
} from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import { addNotes } from "../../redux/actions/hostManagementActions";
import DLBack from "../../assets/images/DL-Back.PNG";
import DLFront from "../../assets/images/DL-Front.PNG";
import DLProfile from "../../assets/images/DL-Profile.PNG";

class IdVerificationModal extends Component {
  state = {
    loading: false,
    education: [],
    certification: [],
  };

  componentDidMount() {
    console.log("Props: ", this.props);
    // this.props.dispatch(
    //   getExpertData(this.props)
    // );
    // this.setState({
    //   education: this.props.educationData,
    //   certification: this.props.certificationData,
    // });
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
    return (
      <CModal show={true}>
        <CModalHeader closeButton>ID Verification</CModalHeader>
        <CModalBody>
          {/* {this.state.education.map((e, i) => { */}
          {/* return ( */}
          <CContainer>
            <div>
              <CLabel>Driving License Front</CLabel>
              <img
                src={DLFront}
                style={{ maxWidth: "100%" }}
                alt="Driving Licence Front"
              ></img>
            </div>
            <div style={{ marginTop: "4px" }}>
              <CLabel>Driving License Back</CLabel>
              <img
                src={DLBack}
                style={{ maxWidth: "100%" }}
                alt="Driving Licence Back"
              ></img>
            </div>
            <div style={{ marginTop: "4px" }}>
              <CLabel>Driving License Profile</CLabel>
              <img
                src={DLProfile}
                style={{ maxWidth: "100%" }}
                alt="Driving Licence Profile"
              ></img>
            </div>
            <CModalFooter>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                // onClick={() =>
                //   this.saveNotes(this.props.id, this.state.notes)
                // }
              >
                Verify Documents
              </CButton>
              <CButton color="secondary" onClick={this.props.onClose}>
                Cancel
              </CButton>
            </CModalFooter>
          </CContainer>
          {/* );
          })} */}
        </CModalBody>

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
