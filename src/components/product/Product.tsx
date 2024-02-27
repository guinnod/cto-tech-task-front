import { FC } from "react";
import { IProduct } from "../../lib/types";
import { Image } from "../ui/Image";

interface ProductProps {
    product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
    return (
        <div className="w-[min(300px,calc(100vw-1rem))]">
            <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="max-sm:max-sm:w-[min(300px,calc(100vw-1rem))] aspect-square h-auto"
            />
            <div className="mt-2 flex justify-between">
                <div>
                    <p
                        className="mt-1 text-sm text-neutral-500"
                        data-testid="ProductElement_Category"
                    >
                        {product.category}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-neutral-900 line-clamp-2">
                        {product.title}
                    </h3>
                </div>
                <p
                    className="mt-1 text-sm font-medium text-neutral-900 text-nowrap "
                    data-testid="ProductElement_PriceRange"
                >
                    {product.price} $
                </p>
            </div>
        </div>
    );
};
