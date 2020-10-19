import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,

    CSelect,
    CSpinner,
} from "@coreui/react";






class VideoServerTokenTracker extends Component {


    render() {
        return (
            <div>


                <div>
                    <cRow>
                        <CCol>
                            <h4>Video Server Token Tracker</h4>
                        </CCol>
                    </cRow>
                    <CRow>

                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                header="Total Number of Minutes  "
                                style={{ height: "75px" }}

                            >
                            </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                style={{ height: "75px" }}
                                header="Total Number of Minutes Breakdown by Session + Host ID" >

                            </CWidgetSimple>
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

export default connect(mapStateToProps)(VideoServerTokenTracker);
