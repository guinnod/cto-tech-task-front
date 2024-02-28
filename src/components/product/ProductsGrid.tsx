import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { IProduct } from "../../lib/types";
import { Product } from "./Product";

interface ProductsGridProps {
    products: IProduct[];
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
    return (
        <ul
            role="list"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <Product product={product} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
