import {
    RouterProvider as TanstackRouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import App from "./App";
import { ProductsGrid } from "./components/ProductsGrid";

const rootRoute = createRootRoute({});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return <App />;
    },
});

const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/products",
    component: ProductsGrid,
});

const routeTree = rootRoute.addChildren([productsRoute, indexRoute]);

const router = createRouter({ routeTree });

export const RouterProvider = () => {
    return <TanstackRouterProvider router={router} />;
};
