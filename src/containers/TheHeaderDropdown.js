import React from "react";
import { withRouter } from "react-router-dom";
import {
  CDropdown,
  // CDropdownItem,
  // CDropdownMenu,
  CDropdownToggle,
  CImg,
  // CLink,
  CButton,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
import { connect } from "react-redux";

import { logOut } from "../redux/actions/authActions";

class TheHeaderDropdown extends React.Component {
  async onLogout() {
    await this.props.dispatch(logOut());
    this.props.history.push("/login");
  }
  render() {
    return (
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CButton
              className="mr-4"
              color="primary"
              variant="ghost"
              onClick={(e) => {
                this.onLogout();
              }}
            >
              Logout
            </CButton>
            <CImg
              src={"avatars/6.jpg"}
              className="c-avatar-img mr-4"
              alt="admin@bootstrapmaster.com"
            />
          </div>
        </CDropdownToggle>
        {/* <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem header tag="div" color="light" className="text-center">
            <strong>Settings</strong>
          </CDropdownItem>
          <CDropdownItem
            header
            onClick={(e) => {
              this.onLogout();
            }}
          >
            <CIcon name="cil-user" className="mfe-2" />
            <strong>Logout</strong>
          </CDropdownItem>
        </CDropdownMenu> */}
      </CDropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth.authData,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(withRouter(TheHeaderDropdown));
