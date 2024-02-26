import { FC, useEffect, useState } from "react";
import { getProducts } from "../api";
import { IProduct } from "../types";
import { Product } from "./Product";

interface ProductsGridProps {
    products: IProduct[];
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products: ok }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const productsResponse = await getProducts();
            setProducts(productsResponse);
            console.log(productsResponse);
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
        return <p>Loading...</p>;
    }
    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};
