import { ICart } from "./types";

export function calculateTotalAmount(carts: ICart[]): number {
    return carts.reduce(
        (acc, cart) => acc + cart.product.price * cart.quantity,
        0
    );
}
