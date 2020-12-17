import React, { Component } from "react";
import { connect } from "react-redux";
import { CButton, CRow, CModalFooter, CLabel, CCol } from "@coreui/react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import Moment from "react-moment";
// import { addNotes } from "../../redux/actions/hostManagementActions";
// import DLBack from "../../assets/images/DL-Back.PNG";
// import DLFront from "../../assets/images/DL-Front.PNG";
// import DLProfile from "../../assets/images/DL-Profile.PNG";

class IdVerification extends Component {
  state = {
    loading: false,
    docs: "",
  };

  async componentDidMount() {
    console.log("Props: ", this.props.match.params.id);
    const res = await axios.get(
      `${BASE_URL}/admin/expert/${this.props.match.params.id}`
    );
    // console.log("res: ", res);
    // if (!res.data.data[0].userData.identity.isIdentityVerified) {
    this.setState({ docs: res.data.data[0].userData.identity });
    // }
  }

  async verifyDocs(id) {
    this.setState({ loading: true });
    try {
      const res = await axios.put(
        `${BASE_URL}/admin/verification/identity/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log("Error", error);
    }
    this.setState({ loading: false });
  }
  render() {
    console.log("Test: ", this.state.docs);
    return (
      <div>
        <h4>ID Verification</h4>
        <p>
          <b>Document Type:</b> Driving Licence
        </p>
        {this.state.docs && this.state.docs.isIdentityVerified ? (
          <div>
            <p>Verified by: kip@narola.email</p> <br />
            <p>
              Verified date & time:
              <Moment format="Do MMM YYYY H:mma">
                {this.state.docs.approved_date}
              </Moment>
            </p>
            <br />
          </div>
        ) : null}
        {this.state.docs && !this.state.docs.isIdentityVerified ? (
          <CRow>
            <CCol>
              <div>
                <CLabel>Front</CLabel>
              </div>
              <img
                // src={DLFront}
                src={this.state.docs.frontImage}
                alt="Driving Licence Front"
                style={{ maxHeight: "190px" }}
              ></img>
            </CCol>
            <CCol>
              <div>
                <CLabel>Back</CLabel>
              </div>
              <img
                src={this.state.docs.backImage}
                alt="Driving Licence Back"
                style={{ maxHeight: "190px" }}
              ></img>
            </CCol>
            <CCol>
              <div>
                <CLabel>Profile</CLabel>
              </div>
              <img
                src={this.state.docs.image}
                alt="Driving Licence Profile"
                style={{ maxHeight: "190px" }}
              ></img>
            </CCol>
          </CRow>
        ) : null}
        {this.state.docs && !this.state.docs.isIdentityVerified ? (
          <CModalFooter>
            <CButton
              disabled={this.state.loading ? true : false}
              color="primary"
              onClick={() => this.verifyDocs(this.props.match.params.id)}
            >
              Verify
            </CButton>
          </CModalFooter>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(IdVerification);
