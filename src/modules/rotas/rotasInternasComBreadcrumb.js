import React from 'react';
import DefaultLayout from '../shared/components/DefaultLayout';

// const Dashboard = Loadable({
//   loader: () => import('../Dashboard/view/Dashboard'),
//   loading: Loading,
// });


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const rotasInternasComBreadcrumb = [
  { path: '/', rules: [] ,exact: true, name: <span><i className="cui-home icons"></i> Inicio</span>, component: DefaultLayout},

];

export default rotasInternasComBreadcrumb;
