import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,

    CSelect,
    CSpinner,
} from "@coreui/react";






class WebPageDesign extends Component {


    render() {
        return (
            <div>


                <div>
                    <cRow>
                        <CCol>
                            <h4>Web Page Design</h4>
                        </CCol>
                    </cRow>
                    <CRow>

                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                header="Logo"
                                style={{ height: "75px" }}

                            >
                            </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                style={{ height: "75px" }}
                                header="Press Logos" >

                            </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header="Edit Pages Content"
                            > </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header="Banners"> </CWidgetSimple>
                        </CCol>
                    </CRow>
                    <CRow>


                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header="Fees by country"> </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header="Top Page Announcement"> </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header="Activate Maintenance Page"> </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple style={{ height: "75px" }}
                                header=" Fees by attendee country origin"> </CWidgetSimple>
                        </CCol>



                    </CRow>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log("State: ", state);
    return {

    };
};

export default connect(mapStateToProps)(WebPageDesign);
