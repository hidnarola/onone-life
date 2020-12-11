import React, { Component } from "react";
import { connect } from "react-redux";
import { CButton, CRow, CModalFooter, CLabel, CCol } from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import { addNotes } from "../../redux/actions/hostManagementActions";
import DLBack from "../../assets/images/DL-Back.PNG";
import DLFront from "../../assets/images/DL-Front.PNG";
import DLProfile from "../../assets/images/DL-Profile.PNG";

class IdVerification extends Component {
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
    return (
      <div>
        <h4>ID Verification</h4>
        <p>
          <b>Document Type:</b> Driving Licence
        </p>
        <CRow>
          <CCol>
            <div>
              <CLabel>Front</CLabel>
            </div>
            <img
              src={DLFront}
              alt="Driving Licence Front"
              style={{ maxHeight: "190px" }}
            ></img>
          </CCol>
          <CCol>
            <div>
              <CLabel>Back</CLabel>
            </div>
            <img
              src={DLBack}
              alt="Driving Licence Back"
              style={{ maxHeight: "190px" }}
            ></img>
          </CCol>
          <CCol>
            <div>
              <CLabel>Profile</CLabel>
            </div>
            <img
              src={DLProfile}
              alt="Driving Licence Profile"
              style={{ maxHeight: "190px" }}
            ></img>
          </CCol>
        </CRow>
        <CModalFooter>
          <CButton
            disabled={this.state.loading ? true : false}
            color="primary"
            // onClick={() =>
            //   this.saveNotes(this.props.id, this.state.notes)
            // }
          >
            Verify
          </CButton>
        </CModalFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(IdVerification);
