import { ICart } from "./types";

export function calculateTotalAmount(carts: ICart[]): number {
    const sum = carts.reduce(
        (acc, cart) => acc + cart.product.price * cart.quantity,
        0
    );
    return parseFloat(sum.toFixed(2));
}

export async function validateToken(tokenKey: string): Promise<boolean> {
    const token = localStorage.getItem(tokenKey);
    return !!token;
}
