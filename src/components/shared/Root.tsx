import { Outlet } from "@tanstack/react-router";
import { FC } from "react";
import { CartProvider } from "../../CartContext";
import { Header } from "./Header";
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
