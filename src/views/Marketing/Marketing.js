import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,
    CSpinner,
} from "@coreui/react";
import PromoCodeForm from './pramotionalcode'
import ReviewAndFeedbck from './Review&Feedback'

class Marketing extends Component {
    state = {
        PromoCode: false,
        ReviewAndFeedback: false
    }
    showPromoCodeForm = () => {
        this.setState({ PromoCode: !this.state.PromoCode })
    }

    showFeedbackForm = () => {
        this.setState({ ReviewAndFeedback: !this.state.ReviewAndFeedback })
    }
    render() {
        return (
            <div>
                {this.props.loading ? (
                    <CSpinner size="sm" variant="grow" />
                ) : (
                        <div>
                            {!this.state.PromoCode && !this.state.ReviewAndFeedback && (
                                <>
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
                                                onClick={() => {
                                                    this.showPromoCodeForm()
                                                }}
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
                                                header="Edit reviews and feedback ratings by user" onClick={() => {
                                                    this.showFeedbackForm()
                                                }} > </CWidgetSimple>
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
                                </>
                            )}
                            {this.state.PromoCode && (
                                <PromoCodeForm showPromoCodeForm={this.showPromoCodeForm} />
                            )}
                            {this.state.ReviewAndFeedback && (
                                <ReviewAndFeedbck showFeedbackForm={this.showFeedbackForm} />
                            )}
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

export default connect(mapStateToProps)(Marketing);
