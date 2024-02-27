import { useParams } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Image } from "../components/ui/Image";
import { Loading } from "../components/ui/Loading";
import { getProduct } from "../lib/api";
import { IProduct } from "../lib/types";

interface ProductPageProps {}

export const ProductPage: FC<ProductPageProps> = ({}) => {
    const { productId } = useParams({ strict: false });
    const [product, setProduct] = useState<IProduct>();
    const [loading, setLoading] = useState(true);
    const fetchProduct = async () => {
        try {
            const productsResponse = await getProduct(productId);
            setProduct(productsResponse);
        } catch (error) {
            console.error("Error fetching product", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <section className="mx-auto grid max-w-7xl p-8">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8">
                <div className="md:col-span-1 lg:col-span-5">
                    <Image
                        width={1024}
                        height={1024}
                        className="w-[min(calc(100dvh-128px),1024px)] aspect-square h-auto"
                        src={product?.image}
                    />
                </div>
                <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
                    <div>
                        <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
                            {product?.title}
                        </h1>
                        <p className="mb-8 text-sm ">{product?.price} $</p>
                        <div className="mt-8">
                            <Button>Add to cart</Button>
                        </div>

                        <div className="mt-8 space-y-6 text-sm text-neutral-500">
                            {product?.description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
