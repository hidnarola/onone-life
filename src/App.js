import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import MemberManagement from "./views/MemberManagement/MemberManagement";
import PrivateRoute from "./PrivateRoute";
import HostManagement from "./views/HostManagement/HostManagement";
import MemberIssueReolution from "./views/MemberIssueResolution/MemberIssueReolution";
import EventListingManagement from "./views/EventListingManagement/eventlistingmanagement";
import PaymentInManagement from "./views/PaymentInManagement/PaymentInManagement";
import Payoutmanagement from "./views/Payoutmanagement/Payoutmanagement";
import SalesAnalysis from "./views/SalesAnalysis/SalesAnalysis";
import AccountandPayments from "./views/AccountandPayments/AccountandPayments";
import Marketing from "./views/Marketing/Marketing";
import FeedbackandRatingManagement from "./views/FeedbackandRatingManagement/FeedbackandRatingManagement";
import EmailTemplatesManagement from "./views/EmailTemplatesManagement/EmailTemplatesManagement";
import WebPageDesign from "./views/WebPageDesign/WebPageDesign";
import FinanceandAccounting from "./views/FinanceandAccounting/FinanceandAccounting";
import VideoServerTokenTracker from "./views/VideoServerTokenTracker/VideoServerTokenTracker";
import Localisation from "./views/Localisation/Localisation";
import FeeManagement from "./views/FeeManagement/FeeManagement";
import EmployeeAccessManagement from "./views/EmployeeAccessManagement/EmployeeAccessManagement";
import CategoryManagement from "./views/Categorymanagement/Categorymanagement";
import BlogPostManagement from "./views/BlogPostManagement/BlogPostManagement";
import ManageQuotes from "./views/ManageQuotes/ManageQuotes";
import Giftcards from "./views/Giftcards/Giftcards";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const ForgotPassword = React.lazy(() =>
  import("./views/pages/forgotPassword/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./views/pages/resetPassword/ResetPassword")
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/forgotPassword"
              name="Forgot Password Page"
              render={(props) => <ForgotPassword {...props} />}
            />
            <Route
              exact
              path="/resetPassword/:token"
              name="Reset Password Page"
              render={(props) => <ResetPassword {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            <PrivateRoute exact path="/admin/membermanagement">
              <MemberManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/hostmanagement">
              <HostManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/memberissueresolution">
              <MemberIssueReolution />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/eventlistingmanagement">
              <EventListingManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/PaymentInManagement">
              <PaymentInManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/Payoutmanagement">
              <Payoutmanagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/SalesAnalysis">
              <SalesAnalysis />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/AccountandPayments">
              <AccountandPayments />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/Marketing">
              <Marketing />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/FeedbackandRatingManagement">
              <FeedbackandRatingManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/EmailTemplatesManagement">
              <EmailTemplatesManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/WebPageDesign">
              <WebPageDesign />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/FinanceandAccounting">
              <FinanceandAccounting />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/VideoServerTokenTracker">
              <VideoServerTokenTracker />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/Localisation">
              <Localisation />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/FeeManagement">
              <FeeManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/EmployeeAccessManagement">
              <EmployeeAccessManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/CategoryManagement">
              <CategoryManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/BlogPostManagement">
              <BlogPostManagement />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/ManageQuotes">
              <ManageQuotes />
            </PrivateRoute>

            <PrivateRoute exact path="/admin/Giftcards">
              <Giftcards />
            </PrivateRoute>
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
