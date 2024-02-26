import { useParams } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { Product } from "../components/product/Product";
import { getProduct } from "../lib/api";
import { IProduct } from "../types";

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
    return (
        <div>
            <h1>Product Page</h1>
            <p>Product ID: {productId}</p>
            {loading && <p>Loading...</p>}
            {product && <Product product={product} />}
        </div>
    );
};
