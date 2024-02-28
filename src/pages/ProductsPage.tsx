import { FC, useEffect, useState } from "react";
import { ProductsGrid } from "../components/product/ProductsGrid";
import { ProductsSkeleton } from "../components/product/ProductsSkeleton";
import { getProducts } from "../lib/api";
import { IProduct } from "../lib/types";

interface ProductsPageProps {}

export const ProductsPage: FC<ProductsPageProps> = () => {
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
        return <ProductsSkeleton />;
    }
    return (
        <div className="py-8">
            <ProductsGrid products={products} />
        </div>
    );
};
