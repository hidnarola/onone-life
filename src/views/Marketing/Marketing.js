import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,
    CSpinner,
    CWidgetIcon,
} from "@coreui/react";
import PromoCodeForm from './pramotionalcode'
import ReviewAndFeedbck from './Review&Feedback'
import CIcon from "@coreui/icons-react";

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
                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="Promotion code generation and management"
                                                onClick={() => {
                                                    this.showPromoCodeForm()
                                                }} color="info">
                                                <CIcon width={24} name="cilBookmark" />
                                            </CWidgetIcon>
                                        </CCol>
                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="Category specific codes" color="warning">
                                                <CIcon width={24} name="cilCheck" />
                                            </CWidgetIcon>
                                        </CCol>

                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="User specific promotion codes and invitation"
                                                color="danger">
                                                <CIcon width={24} name="cilCode" />
                                            </CWidgetIcon>
                                        </CCol>
                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="Edit reviews and feedback ratings by user" onClick={() => {
                                                this.showFeedbackForm()
                                            }}
                                                color="warning">
                                                <CIcon width={24} name="cilGlobeAlt" />
                                            </CWidgetIcon>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="SEO URL Management" color="info">
                                                <CIcon width={24} name="cilIndentIncrease" />
                                            </CWidgetIcon>
                                        </CCol>
                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="Newsletter" color="warning">
                                                <CIcon width={24} name="cilLocationPin" />
                                            </CWidgetIcon>
                                        </CCol>

                                        <CCol xs="12" lg="3">
                                            <CWidgetIcon header="Facebook APi"
                                                color="danger">
                                                <CIcon width={24} name="cilPaperclip" />
                                            </CWidgetIcon>
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
