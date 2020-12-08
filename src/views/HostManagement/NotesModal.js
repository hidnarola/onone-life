import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CTextarea,
  CToast,
  CToaster,
  CToastBody,
} from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import { addNotes } from "../../redux/actions/hostManagementActions";

class NotesModal extends Component {
  state = {
    loading: false,
    notes: "",
  };

  componentDidMount() {
    this.setState({ notes: this.props.notesData });
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
      <CModal show={true} onClose={this.props.onClose}>
        <CModalHeader closeButton>Notes</CModalHeader>
        <CModalBody>
          <CTextarea
            onChange={(e) => this.setState({ notes: e.target.value })}
            placeholder="Add notes here..!"
            value={this.state.notes}
          ></CTextarea>
          <h6>Last Updated By: {this.props.notesBy.email} </h6>
        </CModalBody>
        <CModalFooter>
          <CButton
            disabled={this.state.loading ? true : false}
            color="primary"
            onClick={() => this.saveNotes(this.props.id, this.state.notes)}
          >
            Save Notes
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

export default connect(mapStateToProps)(NotesModal);
