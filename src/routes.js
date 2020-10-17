import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));


const MemberManagement = React.lazy(() => import('./views/MemberManagement/MemberManagement'));
const HostManagement = React.lazy(() => import('./views/HostManagement/HostManagement'));
const MemberIssueResolution = React.lazy(() => import('./views/MemberIssueResolution/MemberIssueReolution'));
const EventListingManagement = React.lazy(() => import('./views/EventListingManagement/eventlistingmanagement'));
const PaymentInManagement = React.lazy(() => import('./views/PaymentInManagement/PaymentInManagement'));
const Payoutmanagement = React.lazy(() => import('./views/Payoutmanagement/Payoutmanagement'));
const SalesAnalysis = React.lazy(() => import('./views/SalesAnalysis/SalesAnalysis'));
const AccountandPayments = React.lazy(() => import('./views/AccountandPayments/AccountandPayments'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/widgets', name: 'Widgets', component: Widgets },

  { path: '/admin/membermanagement', name: 'Member Management', component: MemberManagement },
  { path: '/admin/hostmanagement', name: 'Host Management', component: HostManagement },
  { path: '/admin/memberissueresolution', name: 'Member Issue resolution', component: MemberIssueResolution },
  { path: '/admin/eventlistingmanagement', name: 'EventListing Management', component: EventListingManagement },
  { path: '/admin/PaymentInManagement', name: 'Payment In Management', component: PaymentInManagement },
  { path: '/admin/Payoutmanagement', name: 'Payout Management', component: Payoutmanagement },
  { path: '/admin/SalesAnalysis', name: 'Sales Analysis', component: SalesAnalysis },
  { path: '/admin/AccountandPayments', name: 'Account and Payments', component: AccountandPayments },
];

export default routes;
