import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,

    CSelect,
    CSpinner,
} from "@coreui/react";






class Localisation extends Component {


    render() {
        return (
            <div>


                <div>
                    <cRow>
                        <CCol>
                            <h4>Localisation</h4>
                        </CCol>
                    </cRow>
                    <CRow>

                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                header="Enable and disable countires "
                                style={{ height: "75px" }}

                            >
                            </CWidgetSimple>
                        </CCol>
                        <CCol>
                            <CWidgetSimple
                                className="mr-3"
                                style={{ height: "75px" }}
                                header="Change default currency (USD, GBP, EURO)" >

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

export default connect(mapStateToProps)(Localisation);
