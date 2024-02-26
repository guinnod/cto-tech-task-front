import { FC } from "react";
import { IProduct } from "../types";

interface ProductProps {
    product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};
