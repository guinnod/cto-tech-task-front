import { IProduct } from "./types";
const cart = {
    add(product: IProduct) {},
    remove(productId: number) {},
};

Object.freeze(cart);
export default cart;
