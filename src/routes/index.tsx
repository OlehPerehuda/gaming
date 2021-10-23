import React, { Fragment, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../app/components/Header';
import { AuthLayout } from '../app/components/AuthLayout';

/** TODO: imports components with lazy loading */
const Main = lazy(() => import('../modules/Main'));
const Login = lazy(() => import('../modules/Login'));
const Registration = lazy(() => import('../modules/Registration'));
const Details = lazy(() => import('../modules/Details'));
const CreatePost = lazy(() => import('../modules/CreatePost'));
const Admins = lazy(() => import('../modules/Admins'));

export enum ERoutes {
    home = '/',
    details = '/details/:id',
    admin = '/admin',
    login = '/auth/login',
    registration = '/auth/registration',
    create = '/create',
};

const authRouteConfig = [
    { path: ERoutes.registration, component: Registration, exact: true },
    { path: ERoutes.login, component: Login, exact: true },
];

const routeConfig = [
    { path: ERoutes.home, component: Main, exact: true },
    { path: ERoutes.admin, component: Admins, exact: true },
    { path: ERoutes.create, component: CreatePost, exact: true },
    { path: ERoutes.details, component: Details, exact: true },
];

export const Routes = () => (
    <Switch>
        <Route path='/auth'>
            <Switch>
                {authRouteConfig.map((route, index) => (
                    <Fragment key={index}>
                        <AuthLayout>
                            <Route key={index} {...route} />
                        </AuthLayout>
                    </Fragment>
                ))}
            </Switch>
        </Route>
        <Route path='/'>
            <Header />
            {routeConfig.map((route, index) => (
                <Route {...route} key={index} />
            ))}
        </Route>
        <Redirect to='/' />
    </Switch>
);
