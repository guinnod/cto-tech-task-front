import {
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import App from "./App";
import { ProductsGrid } from "./components/product/ProductsGrid";
import { Protected } from "./components/shared/Protected";
import { Root } from "./components/shared/Root";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";

const rootRoute = createRootRoute({
    component: Root,
    notFoundComponent: NotFoundPage,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return <App />;
    },
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "login",
    component: LoginPage,
});

const protectedRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "home",
    component: Protected,
});

const productsRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: "products",
    component: ProductsGrid,
});

const productDetailsRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: "products/$productId",
    component: ProductPage,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    protectedRoute.addChildren([productsRoute, productDetailsRoute]),
]);

const router = createRouter({ routeTree });

export const Routes = () => {
    return <RouterProvider router={router} />;
};
