import {
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import { Protected } from "./components/shared/Protected";
import { Root } from "./components/shared/Root";
import {
    CartPage,
    LoginPage,
    NotFoundPage,
    ProductPage,
    ProductsPage,
} from "./pages";

const rootRoute = createRootRoute({
    component: Root,
    notFoundComponent: NotFoundPage,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: ProductsPage,
});

const productDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "products/$productId",
    component: ProductPage,
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

const cartRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: "/",
    component: CartPage,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    productDetailsRoute,
    protectedRoute.addChildren([cartRoute]),
]);

const router = createRouter({ routeTree });

export const Routes = () => {
    return <RouterProvider router={router} />;
};
