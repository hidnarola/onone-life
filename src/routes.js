import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));


const MemberManagement = React.lazy(() => import('./views/MemberManagement/MemberManagement'));
const HostManagement = React.lazy(() => import('./views/HostManagement/HostManagement'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/widgets', name: 'Widgets', component: Widgets },

  { path: '/admin/membermanagement', name: 'Member Management', component: MemberManagement },
  { path: '/admin/hostmanagement', name: 'Host Management', component: HostManagement },
];

export default routes;
