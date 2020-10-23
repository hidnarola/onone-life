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
    CModalHeader,
    CWidgetIcon
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

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
                    <CCol xs="12" lg="4">
                        <CWidgetIcon header="Total revenue"
                            text="$500" color="info">
                            <CIcon width={24} name="cilScrubber" />
                        </CWidgetIcon>
                    </CCol>
                    <CCol xs="12" lg="4">
                        <CWidgetIcon header="Total platform commission "
                            text="$500" color="danger">
                            <CIcon width={24} name="cilSun" />
                        </CWidgetIcon>
                    </CCol>

                    <CCol xs="12" lg="4">
                        <CWidgetIcon header="Total transferred out"
                            text="5" color="info">
                            <CIcon width={24} name="cilTags" />
                        </CWidgetIcon>
                    </CCol>

                </CRow>
                <CRow>
                    <CCol xs="12" lg="6">
                        <CWidgetIcon header="Total balance in wallets"

                            text="$500" color="warning">
                            <CIcon width={24} name="cilShieldAlt" />
                        </CWidgetIcon>
                    </CCol>
                    <CCol xs="12" lg="6">
                        <CWidgetIcon header="Total unavailable balance / locKed"
                            text="$600" color="danger">
                            <CIcon width={24} name="cilDollar" />
                        </CWidgetIcon>
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
