import { FC, useEffect, useState } from "react";
import { CartItem } from "../components/shared/CartItem";
import { Button } from "../components/ui/Button";
import { Loading } from "../components/ui/Loading";
import { getProducts } from "../lib/api";
import { IProduct } from "../lib/types";

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = ({}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const productsResponse = await getProducts();
            setProducts(productsResponse);
        } catch (error) {
            console.error("Error fetching products", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <section className="mx-auto max-w-7xl p-8">
            <h1 className="mt-8 text-3xl font-bold text-neutral-900">
                Your Shopping Cart
            </h1>
            <div className="mt-12">
                <ul
                    role="list"
                    className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
                >
                    {products
                        .map((product) => ({ product, quantity: 1 }))
                        .map((item) => (
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
                                {0} $
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Button className="w-full py-3 font-semibold bg-neutral-900 max-w-sm">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
