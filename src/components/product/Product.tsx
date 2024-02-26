import { FC } from "react";
import { IProduct } from "../../lib/types";
import { Image } from "../ui/Image";

interface ProductProps {
    product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
    return (
        <div>
            <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={500}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};
