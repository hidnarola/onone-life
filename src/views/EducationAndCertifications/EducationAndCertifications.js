import React, { Component } from "react";
import { connect } from "react-redux";
import { CButton, CLabel, CRow, CCol } from "@coreui/react";

class EducationAndCertifications extends Component {
  state = {
    loading: false,
    education: [],
    certification: [],
  };

  componentDidMount() {
    // this.props.dispatch(getExperts(defaultPage, defaultPageSize));
  }

  render() {
    return (
      <div>
        <div>
          <h4>Education</h4>
          <CRow>
            <CCol>
              <CLabel>2005 - 2007</CLabel>
            </CCol>
            <CCol>
              College Name <br /> Degree
            </CCol>
            <CCol>Speciality</CCol>
            <CCol>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                //   onClick={() => this.saveNotes(this.props.id, this.state.notes)}
              >
                Verify Document
              </CButton>
            </CCol>
          </CRow>
          <hr />
          <CRow>
            <CCol>
              <CLabel>2005 - 2007</CLabel>
            </CCol>
            <CCol>
              College Name <br /> Degree
            </CCol>
            <CCol>Speciality</CCol>
            <CCol>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                //   onClick={() => this.saveNotes(this.props.id, this.state.notes)}
              >
                Verify Document
              </CButton>
            </CCol>
          </CRow>
          <hr />
        </div>
        <div>
          <h4>Certifications</h4>
          <CRow>
            <CCol>
              <CLabel>2005 - 2007</CLabel>
            </CCol>
            <CCol>
              University of North Florida MBA <br /> Certificate Name
            </CCol>
            <CCol></CCol>
            <CCol>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                //   onClick={() => this.saveNotes(this.props.id, this.state.notes)}
              >
                Verify Document
              </CButton>
            </CCol>
          </CRow>
          <hr />
          <CRow>
            <CCol>
              <CLabel>2010 - 2012</CLabel>
            </CCol>
            <CCol>
              University of North Florida MBA <br /> Certificate Name
            </CCol>
            <CCol></CCol>
            <CCol>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                //   onClick={() => this.saveNotes(this.props.id, this.state.notes)}
              >
                Verify Document
              </CButton>
            </CCol>
          </CRow>
          <hr />
          <CRow>
            <CCol>
              <CLabel>2015 - 2018</CLabel>
            </CCol>
            <CCol>
              University of North Florida MBA <br /> Certificate Name
            </CCol>
            <CCol></CCol>
            <CCol>
              <CButton
                disabled={this.state.loading ? true : false}
                color="primary"
                //   onClick={() => this.saveNotes(this.props.id, this.state.notes)}
              >
                Verify Document
              </CButton>
            </CCol>
          </CRow>
          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hostData: state.hostManagement.hostData,
  };
};

export default connect(mapStateToProps)(EducationAndCertifications);
