import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const MemberManagement = React.lazy(() =>
  import("./views/MemberManagement/MemberManagement")
);
const HostManagement = React.lazy(() =>
  import("./views/HostManagement/HostManagement")
);
const MemberIssueResolution = React.lazy(() =>
  import("./views/MemberIssueResolution/MemberIssueReolution")
);
const EventListingManagement = React.lazy(() =>
  import("./views/EventListingManagement/eventlistingmanagement")
);
const PaymentInManagement = React.lazy(() =>
  import("./views/PaymentInManagement/PaymentInManagement")
);
const Payoutmanagement = React.lazy(() =>
  import("./views/Payoutmanagement/Payoutmanagement")
);
const SalesAnalysis = React.lazy(() =>
  import("./views/SalesAnalysis/SalesAnalysis")
);
const AccountandPayments = React.lazy(() =>
  import("./views/AccountandPayments/AccountandPayments")
);
const Marketing = React.lazy(() => import("./views/Marketing/Marketing"));
const FeedbackandRatingManagement = React.lazy(() =>
  import("./views/FeedbackandRatingManagement/FeedbackandRatingManagement")
);
const EmailTemplatesManagement = React.lazy(() =>
  import("./views/EmailTemplatesManagement/EmailTemplatesManagement")
);
const WebPageDesign = React.lazy(() =>
  import("./views/WebPageDesign/WebPageDesign")
);
const FinanceandAccounting = React.lazy(() =>
  import("./views/FinanceandAccounting/FinanceandAccounting")
);
const VideoServerTokenTracker = React.lazy(() =>
  import("./views/VideoServerTokenTracker/VideoServerTokenTracker")
);
const Localisation = React.lazy(() =>
  import("./views/Localisation/Localisation")
);
const FeeManagement = React.lazy(() =>
  import("./views/FeeManagement/FeeManagement")
);
const EmployeeAccessManagement = React.lazy(() =>
  import("./views/EmployeeAccessManagement/EmployeeAccessManagement")
);
const CategoryManagement = React.lazy(() =>
  import("./views/Categorymanagement/Categorymanagement")
);
const BlogPostManagement = React.lazy(() =>
  import("./views/BlogPostManagement/BlogPostManagement")
);
const ManageQuotes = React.lazy(() =>
  import("./views/ManageQuotes/ManageQuotes")
);
const Giftcards = React.lazy(() => import("./views/Giftcards/Giftcards"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/widgets", name: "Widgets", component: Widgets },

  {
    path: "/admin/membermanagement",
    name: "Member Management",
    component: MemberManagement,
  },
  {
    path: "/admin/hostmanagement",
    name: "Host Management",
    component: HostManagement,
  },
  {
    path: "/admin/memberissueresolution",
    name: "Member Issue resolution",
    component: MemberIssueResolution,
  },
  {
    path: "/admin/eventlistingmanagement",
    name: "EventListing Management",
    component: EventListingManagement,
  },
  {
    path: "/admin/PaymentInManagement",
    name: "Payment In Management",
    component: PaymentInManagement,
  },
  {
    path: "/admin/Payoutmanagement",
    name: "Payout Management",
    component: Payoutmanagement,
  },
  {
    path: "/admin/SalesAnalysis",
    name: "Sales Analysis",
    component: SalesAnalysis,
  },
  {
    path: "/admin/AccountandPayments",
    name: "Account and Payments",
    component: AccountandPayments,
  },
  { path: "/admin/Marketing", name: "Marketing", component: Marketing },
  {
    path: "/admin/FeedbackandRatingManagement",
    name: "Feedback and Rating Management",
    component: FeedbackandRatingManagement,
  },
  {
    path: "/admin/EmailTemplatesManagement",
    name: "Email Templates Management",
    component: EmailTemplatesManagement,
  },
  {
    path: "/admin/WebPageDesign",
    name: "Web Page Design",
    component: WebPageDesign,
  },
  {
    path: "/admin/FinanceandAccounting",
    name: "Finance and Accounting",
    component: FinanceandAccounting,
  },
  {
    path: "/admin/VideoServerTokenTracker",
    name: "Video Server Token Tracker",
    component: VideoServerTokenTracker,
  },
  {
    path: "/admin/Localisation",
    name: "Localisation",
    component: Localisation,
  },
  {
    path: "/admin/FeeManagement",
    name: "Fee Management",
    component: FeeManagement,
  },
  {
    path: "/admin/EmployeeAccessManagement",
    name: "Employee Access Management",
    component: EmployeeAccessManagement,
  },
  {
    path: "/admin/CategoryManagement",
    name: "Category management",
    component: CategoryManagement,
  },
  {
    path: "/admin/BlogPostManagement",
    name: "Blog Post Management",
    component: BlogPostManagement,
  },
  {
    path: "/admin/ManageQuotes",
    name: "Manage Quotes",
    component: ManageQuotes,
  },
  {
    path: "/admin/Giftcards",
    name:
      "Gift cards/ discounts for admin to issue by category or to specific users etc",
    component: Giftcards,
  },
];

export default routes;
