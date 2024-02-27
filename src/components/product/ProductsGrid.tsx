import { Link, Outlet } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { getProducts } from "../../lib/api";
import { IProduct } from "../../lib/types";
import { Loading } from "../ui/Loading";
import { Product } from "./Product";

interface ProductsGridProps {
    products: IProduct[];
}

export const ProductsGrid: FC<ProductsGridProps> = () => {
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
        <div>
            <Outlet />
            <ul
                role="list"
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/home/products/${product.id}`}>
                            <Product product={product} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
