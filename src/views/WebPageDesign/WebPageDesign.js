import React, { Component } from "react";
import { connect } from "react-redux";
import {

    CWidgetSimple,
    CRow,
    CCol,
} from "@coreui/react";


import Logo from './logo'
import PressLogo from './pressLogo'
import Banner from './Banner'
import Announcement from './aouncemrnt'

class WebPageDesign extends Component {
    state = {
        OpenLogo: false,
        PressLogo: false,
        Banner: false,
        Announcement: false,
        ChangeCotent: false
    }

    LogoUpload = () => {
        this.setState({ OpenLogo: !this.state.OpenLogo })
    }
    PressLogoUpload = () => {
        this.setState({ PressLogo: !this.state.PressLogo })
    }
    BannerLogoUpload = () => {
        this.setState({ Banner: !this.state.Banner })
    }
    AnnouncementModal = () => {
        this.setState({ Announcement: !this.state.Announcement })
    }
    // ChangeCotentpage = () => {
    //     this.setState({ ChangeCotent: !this.state.ChangeCotent })
    // }



    render() {
        return (
            <div>


                <div>
                    <cRow>
                        <CCol>
                            <h4>Web Page Design</h4>
                        </CCol>
                    </cRow>

                    <>
                        <CRow>

                            <CCol>
                                <CWidgetSimple
                                    className="mr-3"
                                    header="Logo"
                                    onClick={this.LogoUpload}
                                    style={{ height: "75px" }}

                                >
                                </CWidgetSimple>
                            </CCol>
                            <CCol>
                                <CWidgetSimple
                                    className="mr-3"
                                    style={{ height: "75px" }}
                                    header="Press Logos" onClick={this.PressLogoUpload} >

                                </CWidgetSimple>
                            </CCol>
                            <CCol>
                                <CWidgetSimple style={{ height: "75px" }}
                                    header="Edit Pages Content"
                                > </CWidgetSimple>
                            </CCol>
                            <CCol>
                                <CWidgetSimple style={{ height: "75px" }}
                                    header="Banners" onClick={this.BannerLogoUpload}> </CWidgetSimple>
                            </CCol>
                        </CRow>
                        <CRow>


                            <CCol>
                                <CWidgetSimple style={{ height: "75px" }}
                                    header="Fees by country"> </CWidgetSimple>
                            </CCol>
                            <CCol>
                                <CWidgetSimple style={{ height: "75px" }}
                                    header="Top Page Announcement" onClick={this.AnnouncementModal}> </CWidgetSimple>
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
                    </>

                    {this.state.OpenLogo && (
                        <Logo OpenLogo={this.state.OpenLogo} LogoUpload={this.LogoUpload} />
                    )}
                    {this.state.PressLogo && (
                        <PressLogo PressLogo={this.state.PressLogo} PressLogoUpload={this.PressLogoUpload} />
                    )}
                    {this.state.Banner && (
                        <Banner Banner={this.state.Banner} BannerLogoUpload={this.BannerLogoUpload} />
                    )}
                    {this.state.Announcement && (
                        <Announcement Announcement={this.state.Announcement} AnnouncementModal={this.AnnouncementModal} />
                    )}
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
