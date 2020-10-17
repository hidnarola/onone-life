import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,

    CSelect,
    CSpinner,
} from "@coreui/react";






class EmailTemplatesManagement extends Component {


    render() {
        return (
            <div>
                {this.props.loading ? (
                    <CSpinner size="sm" variant="grow" />
                ) : (
                        <div>
                            <cRow>
                                <CCol>
                                    <h4>Email Templates Management</h4>
                                </CCol>
                            </cRow>
                            <CRow>

                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"
                                        header="New Joiner"

                                    >
                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"

                                        header="Welcome" >

                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Email Verification"
                                    > </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Abandoned Purchase"> </CWidgetSimple>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CWidgetSimple
                                        header="Offer "> </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="New Joiner but not purchased in week 1"> </CWidgetSimple>
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

export default connect(mapStateToProps)(EmailTemplatesManagement);
