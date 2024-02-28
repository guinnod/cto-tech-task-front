import { PropsWithChildren, createContext, useContext, useState } from "react";
import cartService from "../lib/cart";
import { ICart } from "../lib/types";

type CartServiceActions = "add" | "remove" | "increase" | "decrease";

interface ICartContext {
    items: ICart[];
    dispatch: (action: CartServiceActions, payload: any) => ICart[];
}
// @ts-ignore
const CartContext = createContext<ICartContext>({});

export function useCart() {
    const context = useContext(CartContext);
    if (!context.items) {
        throw new Error("useCartContext must be used within an CartProvider");
    }
    return context;
}

export const CartProvider = ({ children }: PropsWithChildren) => {
    const initialItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartService.items = initialItems;
    const [items, setItems] = useState<ICart[]>(cartService.items);

    const dispatch = (action: CartServiceActions, payload: any) => {
        switch (action) {
            case "add":
                cartService.add(payload);
                break;
            case "remove":
                cartService.remove(payload);
                break;
            case "increase":
                cartService.increase(payload);
                break;
            case "decrease":
                cartService.decrease(payload);
                break;
            default:
                break;
        }

        localStorage.setItem("cart", JSON.stringify(cartService.items));
        setItems([...cartService.items]);
        return items;
    };

    return (
        <CartContext.Provider value={{ dispatch, items }}>
            {children}
        </CartContext.Provider>
    );
};
