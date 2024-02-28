import { ICart, IProduct } from "./types";

export interface ICartService {
    items: ICart[];
    add: (product: IProduct) => void;
    remove: (productId: number) => void;
    increase: (productId: number) => void;
    decrease: (productId: number) => void;
}

const cartService: ICartService = {
    items: [],
    add(product: IProduct) {
        const item = this.items.find((item) => item.product.id === product.id);
        if (item) {
            item.quantity++;
            return;
        }
        this.items.push({ product, quantity: 1 });
    },
    remove(productId: number) {
        this.items = this.items.filter((item) => item.product.id !== productId);
    },
    increase(productId: number) {
        const item = this.items.find((item) => item.product.id === productId);
        if (item) {
            item.quantity++;
        }
    },
    decrease(productId: number) {
        const item = this.items.find((item) => item.product.id === productId);
        if (item && item.quantity > 1) {
            item.quantity--;
        }
    },
};

export default cartService;
