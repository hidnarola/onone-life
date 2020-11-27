import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CTextarea,
} from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import { addNotes } from "../../redux/actions/hostManagementActions";

const token = JSON.parse(localStorage.getItem("AUTHTOKEN"));
const options = {
  headers: { "x-access-token": token },
};

class NotesModal extends Component {
  state = {
    loading: false,
  };
  async saveNotes(id, notes) {
    this.setState({ loading: true });
    try {
      const res = await axios.put(
        `${BASE_URL}/admin/expert/notes`,
        {
          id,
          notes,
        },
        options
      );
      //   console.log(res);
      this.props.dispatch(addNotes(res.data.message));
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
          ></CTextarea>
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
      </CModal>
    );
  }
}

export default connect()(NotesModal);
