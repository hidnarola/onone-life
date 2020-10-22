import React, { Component } from "react";
import {
    CCardBody,
    CDataTable,
    CButton,
    CCollapse,
    CLink,
    CRow,
    CCol,
    CWidgetSimple,
    CModal,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CTextarea,
    CModalHeader
} from "@coreui/react";

const fields = [
    { key: "User_Name", label: 'User Name' },
    { key: "Issue_Warning_1", label: 'Issue Warning 1' },
    { key: "Issue_Warning_2", label: 'Issue Warning 2' },
    { key: "Issue_Warning_3", label: 'Issue Warning 3' },

];

const usersData = [
    { User_Name: "Jhone Flix" },
    { User_Name: "Linus bieber" },
    { User_Name: "Masonr" },
    { User_Name: "Jhone Flix" },
    { User_Name: "Jayden" },
    { User_Name: "Jayden" },
    { User_Name: "Emma" },
    { User_Name: "Isabella" },
    { User_Name: "Joshua" },
    { User_Name: "Lillian" },
];

class AccountandPayments extends Component {
    state = {

        setModal: false,
    };


    toggle = () => {
        this.setState({ setModal: !this.state.setModal })
    }
    render() {
        return (
            <>
                <CRow>
                    <CCol>
                        <CWidgetSimple
                            className="mr-3"
                            header="Total revenue"
                            text="$500"
                            style={{ height: "134px" }}
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            className="mr-3"
                            header="Total platform commission "
                            text="$500"
                            style={{ height: "134px" }}
                        ></CWidgetSimple>
                    </CCol>
                    <CCol>
                        <CWidgetSimple
                            header="Total transferred out"
                            text="5"
                            style={{ height: "134px" }}
                        ></CWidgetSimple>
                    </CCol>

                </CRow>
                <CRow>

                    <CCol>
                        <CWidgetSimple
                            header="Total balance in wallets"
                            style={{ height: "134px" }}
                            text="$500"
                        ></CWidgetSimple>
                    </CCol>   <CCol>
                        <CWidgetSimple
                            style={{ height: "134px" }}
                            header="Total unavailable balance / locKed"
                            text="$600"
                        ></CWidgetSimple>
                    </CCol>

                </CRow>

                <CDataTable
                    items={usersData}
                    fields={fields}
                    // columnFilter
                    //   tableFilter
                    // footer
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover

                    pagination
                    scopedSlots={{

                        Issue_Warning_1: (item, index) => {
                            return (
                                <td className="py-2">
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Auto warn &nbsp;
                                    </CLink><CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Warn Now  &nbsp;
                                    </CLink>
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Notice Sent
                                    </CLink>
                                </td>
                            );
                        },
                        Issue_Warning_2: (item, index) => {
                            return (
                                <td className="py-2">
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Auto warn  &nbsp;
                                    </CLink><CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Warn Now  &nbsp;
                                    </CLink>
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Notice Sent
                                    </CLink>
                                </td>
                            );
                        },
                        Issue_Warning_3: (item, index) => {
                            return (
                                <td className="py-2">
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Auto warn  &nbsp;
                                    </CLink><CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Warn Now  &nbsp;
                                    </CLink>
                                    <CLink onClick={() => {
                                        this.toggle();
                                    }}>
                                        Notice Sent
                                    </CLink>
                                </td>
                            );
                        },

                    }}

                />
                <CModal
                    show={this.state.setModal}
                    onClose={this.toggle}
                >
                    <CModalHeader closeButton>Warnings</CModalHeader>
                    <CModalBody>
                        <CCol xs="10">
                            <p>Are you sure tou want to set a warning ?  </p>
                        </CCol>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={this.toggle}>Yes</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={this.toggle}
                        >Cancel</CButton>
                    </CModalFooter>
                </CModal>
            </>
        );
    }
}

export default AccountandPayments;
