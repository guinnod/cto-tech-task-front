import { FC } from "react";
import { useCart } from "../CartContext";
import { CartEmpty } from "../components/shared/CartEmpty";
import { CartItem } from "../components/shared/CartItem";
import { Button } from "../components/ui/Button";
import { calculateTotalAmount } from "../lib/utils";

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = ({}) => {
    const { items } = useCart();
    if (items.length === 0) {
        return <CartEmpty />;
    }
    return (
        <section className="mx-auto max-w-7xl p-8 w-full">
            <h1 className="mt-8 text-3xl font-bold text-neutral-900">
                Your Shopping Cart
            </h1>
            <div className="mt-12">
                <ul
                    role="list"
                    className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
                >
                    {items.map((item) => (
                        <li key={item.product.id} className="">
                            <CartItem item={item} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <div className="rounded border bg-neutral-50 px-4 py-2">
                        <div className="flex items-center justify-between gap-2 py-2">
                            <div>
                                <p className="font-semibold text-neutral-900">
                                    Your Total
                                </p>
                                <p className="mt-1 text-sm text-neutral-500">
                                    Shipping will be calculated in the next step
                                </p>
                            </div>
                            <div className="font-medium text-neutral-900 text-nowrap">
                                {calculateTotalAmount(items)} $
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Button className="w-full py-3 font-semibold bg-neutral-900 sm:max-w-sm">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
