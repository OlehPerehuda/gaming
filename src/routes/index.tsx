import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

/** TODO: imports components with lazy loading */
const Main = lazy(() => import('../modules/Main'));

/** Route base config implementation */
export class ComponentRoutes {
    /** data route config*/
    constructor(
        public path: string,
        public component: React.FC,
        public exact: boolean,
        public children?: ComponentRoutes[]
    ) { };
};

/** Route config implementation */
export class RouteConfig {
    public static Main: ComponentRoutes = new ComponentRoutes(
        '',
        Main,
        false,
    );
    public static routes: ComponentRoutes[] = [
        this.Main,
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
