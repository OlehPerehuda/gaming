import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

/** TODO: imports components with lazy loading */
const Main = lazy(() => import('../modules/Main'));
const Login = lazy(() => import('../modules/Login'));
const Registration = lazy(() => import('../modules/Registration'));
const Details = lazy(() => import('../modules/Details'));
const CreatePost = lazy(() => import('../modules/CreatePost'));

/** Route base config implementation */
export class ComponentRoutes {
    /** data route config*/
    constructor(
        public path: string,
        public component: React.FC<any>,
        public exact: boolean,
        public children?: ComponentRoutes[]
    ) { };
};

/** Route config implementation */
export class RouteConfig {
    public static Main: ComponentRoutes = new ComponentRoutes(
        '/',
        Main,
        true,
    );
    public static Details: ComponentRoutes = new ComponentRoutes(
        '/details/:id',
        Details,
        false,
    );
    public static Login: ComponentRoutes = new ComponentRoutes(
        '/login',
        Login,
        true,
    );
    public static Registration: ComponentRoutes = new ComponentRoutes(
        '/register',
        Registration,
        true,
    );
    public static CreatePost: ComponentRoutes = new ComponentRoutes(
        '/create',
        CreatePost,
        true,
    );
    public static routes: ComponentRoutes[] = [
        this.Main,
        this.Registration,
        this.Login,
        this.Details,
        this.CreatePost,
    ];
};

export const Routes = () =>
    <Switch>
        {RouteConfig.routes.map((route, index) =>
            <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
            />
        )}
    </Switch>
