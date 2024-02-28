import { Link } from "@tanstack/react-router";
import { FC } from "react";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import { ICart } from "../../lib/types";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
interface CartItemProps {
    item: ICart;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
    const { product } = item;
    return (
        <div className="flex py-4 max-[330px]:flex-col max-[330px]:items-center">
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
                        <Link to={`/product/${product.id}`}>
                            <h2 className="font-medium text-neutral-700">
                                {product.title}
                            </h2>
                        </Link>
                        <p className="mt-1 text-sm text-neutral-500">
                            {product.category}
                        </p>
                    </div>
                    <p className="text-right font-semibold text-neutral-900 text-nowrap">
                        {product.price} $
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
                        />
                        {item.quantity}
                        <img
                            src={plusIcon}
                            alt={"plus"}
                            role="button"
                            width={25}
                            height={25}
                        />
                    </div>
                    <Button>Delete</Button>
                </div>
            </div>
        </div>
    );
};
