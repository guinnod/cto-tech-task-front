import { Outlet } from "@tanstack/react-router";
import { FC } from "react";
import { Header } from "./components/shared/Header";
import { CartProvider } from "./context/CartContext";
interface RootProps {}

export const Root: FC<RootProps> = ({}) => {
    return (
        <CartProvider>
            <div>
                <Header />
                <div className="flex justify-center">
                    <Outlet />
                </div>
            </div>
        </CartProvider>
    );
};
