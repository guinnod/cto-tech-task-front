import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { minusIcon, plusIcon } from "../../assets";
import { useCart } from "../../context/CartContext";
import { ICart } from "../../lib/types";
import { calculateTotalAmount } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
interface CartItemProps {
    item: ICart;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
    const { product } = item;
    const { dispatch } = useCart();
    const decreaseQuantity = () => {
        dispatch("decrease", item.product.id);
    };
    const increaseQuantity = () => {
        dispatch("increase", item.product.id);
    };
    const removeItem = () => {
        dispatch("remove", item.product.id);
    };
    return (
        <div className="flex py-4 max-sm:flex-col max-sm:items-center">
            <div className="aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-[min(200px,calc(100vw-1rem))] aspect-square h-auto"
                />
            </div>
            <div className="relative flex flex-1 flex-col justify-between p-4 py-2">
                <div className="flex justify-between justify-items-start gap-4 flex-wrap">
                    <div>
                        <Link to={`/products/${product.id}`}>
                            <h2 className="font-medium text-neutral-700">
                                {product.title}
                            </h2>
                        </Link>
                        <p className="mt-1 text-sm text-neutral-500">
                            {product.category}
                        </p>
                    </div>
                    <p className="text-right font-semibold text-neutral-900 text-nowrap">
                        {calculateTotalAmount([item])} $
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="font-bold flex items-center text-lg gap-1">
                        <img
                            src={minusIcon}
                            alt={"minus"}
                            role="button"
                            width={25}
                            height={25}
                            onClick={decreaseQuantity}
                        />
                        {item.quantity}
                        <img
                            src={plusIcon}
                            alt={"plus"}
                            role="button"
                            width={25}
                            height={25}
                            onClick={increaseQuantity}
                        />
                    </div>
                    <Button onClick={removeItem}>Delete</Button>
                </div>
            </div>
        </div>
    );
};
