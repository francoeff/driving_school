import React, { Suspense, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

const SingIn = lazy(() => import('./views/auth/signin/SignIn1'));
const SingUp = lazy(() => import('./views/auth/signup/SignUp1'));

export const renderRoutes = (routes = []) => (
    <Routes>
      <Route
          path='/auth/signin-1'
          element={
            <Suspense fallback={ <Loader/> } >
              <SingIn />
            </Suspense>
          }
      />
      <Route
          path='/auth/signup-1'
          element={
            <Suspense fallback={ <Loader/> } >
              <SingUp />
            </Suspense>
          }
      />

      <Route path='/' element={ <AdminLayout/> } >
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Suspense fallback={ <Loader/> } >
                  <route.component />
                </Suspense>
              }
            />
          );
        }) }
      </Route>

    </Routes>
);

const routes = [

    {
      path: '/app/dashboard/default',
      component: lazy(() => import('./views/dashboard/DashDefault'))
    },
    {
      path: 'courses/list',
      component: lazy( () => import('./views/courses/Courses') )
    },
    {
      path: 'courses/edit/:idCurso',
      component: lazy( () => import('./views/courses/CourseEdit') )
    },
    {
      path: '/basic/button',
      component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
    },
    {
      path: '/basic/badges',
      component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
    },
    {
      path: '/basic/breadcrumb',
      component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
    },
    {
      path: '/basic/pagination',
      component: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
    },
    {
      path: '/basic/collapse',
      component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
    },
    {
      path: '/basic/tabs-pills',
      component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
    },
    {
      path: '/basic/typography',
      component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
    },
    {
      path: '/forms/form-basic',
      component: lazy(() => import('./views/forms/FormsElements'))
    },
    {
      path: '/tables/bootstrap',
      component: lazy(() => import('./views/tables/BootstrapTable'))
    },
    {
      path: '/charts/nvd3',
      component: lazy(() => import('./views/charts/nvd3-chart'))
    },
    {
      path: '/maps/google-map',
      component: lazy(() => import('./views/maps/GoogleMaps'))
    },
    {
      path: '/sample-page',
      component: lazy(() => import('./views/extra/SamplePage'))
    },
    {
      path: '*',
      component: () => <Navigate to={BASE_URL} />
    }

];

export default routes;
