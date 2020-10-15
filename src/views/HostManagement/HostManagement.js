import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  CDataTable,
  CButton,
  CWidgetSimple,
  CRow,
  CCol,
  CLink,
} from "@coreui/react";
import { getExperts } from "../../redux/actions/hostManagementActions";

const fields = [
  { key: "user_id", _style: { width: "2%" } },
  { key: "name", _style: { width: "10%" } },
  { key: "email_address", _style: { width: "5%" } },
  { key: "category", _style: { width: "2%" } },
  { key: "signup_date", _style: { width: "5%" } },
  { key: "submission", _style: { width: "2%" } },
  {
    key: "action",
    label: "Action",
    _style: { width: "30%" },
    sorter: false,
    filter: false,
  },
];

const usersData = [
  {
    user_id: 1,
    name: "John Doe",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 2,
    name: "Samppa Nori",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 3,
    name: "Estavan Lykos",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 4,
    name: "Chetan Mohamed",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 5,
    name: "Derick Maximinus",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 6,
    name: "Friderik Dávid",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 7,
    name: "Yiorgos Avraamu",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 8,
    name: "Avram Tarasios",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 9,
    name: "Quintin Ed",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
  {
    user_id: 10,
    name: "Enéas Kwadwo",
    email_address: "kip@narola.email",
    category: "Test",
    signup_date: "05/05/2020",
    submission: "2",
  },
];

class HostManagement extends Component {
  componentDidMount() {
    this.props.dispatch(getExperts());
  }

  approveStatus = (index) => {
    console.log("Approved!!!", index);
  };
  notesStatus = (index) => {
    console.log("Notes!!!", index);
  };
  requestChangesStatus = (index) => {
    console.log("Request Changes!!!", index);
  };
  editandApproveStatus = (index) => {
    console.log("Edit and Approve!!!", index);
  };

  render() {
    console.log(this.props.hostData, "HostData");
    return (
      <div>
        <CRow>
          <CCol>
            <CWidgetSimple
              className="mr-3"
              header="New Host Account Requests"
              text="1,123"
            ></CWidgetSimple>
          </CCol>
          <CCol>
            <CWidgetSimple
              className="mr-3"
              header="In-Progress"
              text="1,123"
            ></CWidgetSimple>
          </CCol>
          <CCol>
            <CWidgetSimple
              header="Approved Host Accounts"
              text="1,123"
            ></CWidgetSimple>
          </CCol>
        </CRow>
        <CDataTable
          items={usersData}
          // items={this.props.hostData.length > 0 ? this.props.hostData : []}
          fields={fields}
          // columnFilter
          tableFilter
          // footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            name: (item, index) => {
              return (
                <td className="py-2">
                  <CLink href="http://localhost:3000/dashboard" target="_blank">
                    {item.name}
                  </CLink>
                </td>
              );
            },
            action: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    variant="outline"
                    size="sm"
                    className="mr-1"
                    style={{ color: "#fff", backgroundColor: "red" }}
                    onClick={() => {
                      this.approveStatus(index);
                    }}
                  >
                    Approve
                  </CButton>
                  <CButton
                    variant="outline"
                    size="sm"
                    className="mr-1"
                    style={{ border: "1px solid #232333" }}
                    onClick={() => {
                      this.editandApproveStatus(index);
                    }}
                  >
                    Edit and Approve
                  </CButton>
                  <CButton
                    variant="outline"
                    size="sm"
                    className="mr-1"
                    style={{ border: "1px solid #232333" }}
                    onClick={() => {
                      this.requestChangesStatus(index);
                    }}
                  >
                    Request Changes
                  </CButton>
                  <CButton
                    variant="outline"
                    size="sm"
                    style={{ border: "1px solid #232333" }}
                    onClick={() => {
                      this.notesStatus(index);
                    }}
                  >
                    Notes
                  </CButton>
                </td>
              );
            },
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
  hostData: state.hostManagement.hostData,
})};

export default connect(mapStateToProps)(HostManagement);
