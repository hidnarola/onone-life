import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,

    CSelect,
    CSpinner,
} from "@coreui/react";






class Marketing extends Component {


    render() {
        return (
            <div>
                {this.props.loading ? (
                    <CSpinner size="sm" variant="grow" />
                ) : (
                        <div>
                            <cRow>
                                <CCol>
                                    <h4>Marketing</h4>
                                </CCol>
                            </cRow>
                            <CRow>

                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"
                                        header="Promotion code generation and management"

                                    >
                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        className="mr-3"
                                        style={{ height: "74px" }}
                                        header="Category specific codes" >

                                    </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple style={{ height: "74px" }}
                                        header="User specific promotion codes and invitation"
                                    > </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple style={{ height: "74px" }}
                                        header="Edit reviews and feedback ratings by user"> </CWidgetSimple>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CWidgetSimple
                                        header="SEO URL Management"> </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Newsletter"> </CWidgetSimple>
                                </CCol>
                                <CCol>
                                    <CWidgetSimple
                                        header="Facebook API Management"> </CWidgetSimple>
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
        hostData: state.hostManagement.hostData,
        pages: state.hostManagement.pages,
        tableLoading: state.hostManagement.loading,
        inProgressRequest: state.hostManagement.inProgressRequest,
        pendingPequest: state.hostManagement.pendingPequest,
        approvedRequest: state.hostManagement.approvedRequest,
    };
};

export default connect(mapStateToProps)(Marketing);
