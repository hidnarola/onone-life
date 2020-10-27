import React, { Component } from "react";
import { connect } from "react-redux";
import {
    CDataTable,
    CButton,
    CWidgetSimple,
    CRow,
    CCol,
    CLink,
    CPagination,
    CFormGroup,
    CLabel,
    CSelect,
    CSpinner,
} from "@coreui/react";
import Moment from "react-moment";
import { getExperts } from "../../redux/actions/hostManagementActions";

const fields = [
    // { key: "userId", _style: { width: "2%" } },
    { key: "name", _style: { width: "auto" } },
    { key: "emailAddress", _style: { width: "auto" } },
    { key: "category", _style: { width: "auto" } },
    { key: "signupDate", _style: { width: "auto" } },
    { key: "submission", _style: { width: "auto" } },
    {
        key: "action",
        label: "Action",
        _style: { width: "auto" },
        sorter: false,
        filter: false,
    },
];

const defaultPage = 1;
const defaultPageSize = 5;



const usersData = [
    {
        user_id: 1,
        name: "John Doe",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "Yes",
    },
    {
        user_id: 2,
        name: "Samppa Nori",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 3,
        name: "Estavan Lykos",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 4,
        name: "Chetan Mohamed",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 5,
        name: "Derick Maximinus",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 6,
        name: "Friderik Dávid",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 7,
        name: "Yiorgos Avraamu",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
    {
        user_id: 8,
        name: "Avram Tarasios",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "Yes",
    },
    {
        user_id: 9,
        name: "Quintin Ed",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "Yes",
    },
    {
        user_id: 10,
        name: "Enéas Kwadwo",
        emailAddress: "kip@narola.email",
        category: 'host',
        signupDate: "05/05/2020",
        submission: "NO",
    },
];


class SalesAnalysis extends Component {


    render() {
        return (
            <div>
                {this.props.loading ? (
                    <CSpinner size="sm" variant="grow" />
                ) : (
                        <div>
                            <CRow>
                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"
                                        header="Revenue by categories"
                                        text='$500'
                                    >

                                        <CSelect
                                            custom

                                            className="select-box"
                                            name="selectSm"
                                            id="SelectLm"
                                        >
                                            <option value="0">Select category</option>
                                        </CSelect>
                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"
                                        header="Revenue by user "
                                        text="$500"
                                    >
                                        <CSelect
                                            custom

                                            className="select-box"
                                            name="selectSm"
                                            id="SelectLm"
                                        >
                                            <option value="0">Select User</option>
                                        </CSelect>
                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Revenue by country"
                                        text="$500"
                                    >
                                        <CSelect
                                            custom

                                            className="select-box"
                                            name="selectSm"
                                            id="SelectLm"
                                        >
                                            <option value="0">Select Country</option>
                                        </CSelect>
                                    </CWidgetSimple>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CWidgetSimple
                                        header="Total fees paid"
                                        text="$500"
                                        style={{ height: '166px' }}
                                    >

                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Transactions IN"
                                        text="$500"
                                    >
                                        <CSelect
                                            custom

                                            className="select-box"
                                            name="selectSm"
                                            id="SelectLm"
                                        >
                                            <option value="0">Select Gateway</option>
                                        </CSelect>
                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Transactions Out"
                                        text="$500"
                                    >
                                        <CSelect
                                            custom

                                            className="select-box"
                                            name="selectSm"
                                            id="SelectLm"
                                        >
                                            <option value="0">Select Gateway</option>
                                        </CSelect>
                                    </CWidgetSimple>
                                </CCol>
                            </CRow>
                        </div>
                    )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log("State: ", state);
    return {

    };
};

export default connect(mapStateToProps)(SalesAnalysis);
