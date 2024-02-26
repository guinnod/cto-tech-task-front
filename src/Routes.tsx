import {
    RouterProvider,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import App from "./App";
import { ProductsGrid } from "./components/ProductsGrid";
import { Root } from "./components/Root";
import { ProductPage } from "./pages/ProductPage";

const rootRoute = createRootRoute({ component: Root });

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return <App />;
    },
});

const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "products",
    component: ProductsGrid,
});

const productDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "products/$productId",
    component: ProductPage,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    productsRoute,
    productDetailsRoute,
]);

const router = createRouter({ routeTree });

export const Routes = () => {
    return <RouterProvider router={router} />;
};
