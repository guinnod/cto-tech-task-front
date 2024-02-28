import { BASE_URL } from "./config";
import { IProduct, IUser } from "./types";

interface FetchRequestInit {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
}

const CacheMap = new Map<string, any>();

export const revalidateCache = async <T = any>(endpoint: string) => {
    CacheMap.delete(endpoint);
    return await fetchAPI<T>(endpoint);
};

const fetchAPI = async <T = any>(
    endpoint: string,
    init: FetchRequestInit = { method: "GET", body: null }
): Promise<T> => {
    const { method, body } = init;
    try {
        if (method === "GET") {
            const cachedData = CacheMap.get(endpoint);
            if (cachedData) {
                return cachedData;
            }
        }
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method,
            body: body && JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (method === "GET") {
            CacheMap.set(endpoint, data);
        }
        return data as T;
    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
};

interface ProductsFilters {
    category?: string;
    limit?: number;
    sort?: "asc" | "desc";
}

export const getProducts = (filters: ProductsFilters = { sort: "asc" }) => {
    const { category, limit, sort } = filters;
    let endpoint = `products`;
    if (category) {
        endpoint += `/category/${category}`;
    }
    endpoint += `?sort=${sort}`;
    if (limit) {
        endpoint += `limit=${limit}`;
    }

    return fetchAPI<IProduct[]>(endpoint);
};

export const getProduct = (id: number) => {
    return fetchAPI<IProduct>(`products/${id}`);
};

export const getCategories = () => {
    return fetchAPI<string[]>("products/categories");
};

export const login = (username: string, password: string) => {
    return fetchAPI<{ token: string }>("auth/login", {
        method: "POST",
        body: { username, password },
    });
};

export const getUser = () => {
    return fetchAPI<IUser>("users/1");
};
