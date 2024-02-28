import {
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import { Root } from "./Root";
import { Protected } from "./context/Protected";
import {
    CartPage,
    LoginPage,
    NotFoundPage,
    ProductPage,
    ProductsPage,
    ProfilePage,
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
    path: "in",
    component: Protected,
});

const cartRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "cart",
    component: CartPage,
});

const profileRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: "/profile",
    component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    productDetailsRoute,
    cartRoute,
    protectedRoute.addChildren([profileRoute]),
]);

const router = createRouter({ routeTree });

export const Routes = () => {
    return <RouterProvider router={router} />;
};
