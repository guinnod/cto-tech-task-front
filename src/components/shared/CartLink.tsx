import { FC } from "react";

import { Link } from "@tanstack/react-router";
import { useCart } from "../../CartContext";
import cartIcon from "../../assets/cart.svg";
interface CartLinkProps {}

export const CartLink: FC<CartLinkProps> = ({}) => {
    const { items } = useCart();
    return (
        <Link to={"/home"} className="relative">
            <img src={cartIcon} alt="art" width={25} height={25} />
            {items.length > 0 && (
                <span className="absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 aspect-square flex-col items-center justify-center rounded-full bg-neutral-900 text-xs font-medium text-white">
                    {items.length}
                </span>
            )}
        </Link>
    );
};
