import { FC, useEffect, useState } from "react";
import { ProductsGrid } from "../components/product/ProductsGrid";
import { ProductsSkeleton } from "../components/product/ProductsSkeleton";
import { getProducts } from "../lib/api";
import { IProduct } from "../lib/types";

interface ProductsPageProps {}

export const ProductsPage: FC<ProductsPageProps> = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const categoryName = params.get("category") || "";

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const filters = {
                category: categoryName,
            };

            const productsResponse = await getProducts(filters);
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
            <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
                {categoryName || "All"}
            </h1>
            <ProductsGrid products={products} />
        </div>
    );
};
