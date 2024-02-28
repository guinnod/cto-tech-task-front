import { FC } from "react";
import { Image } from "../ui/Image";

interface ProductsSkeletonProps {}

export const ProductsSkeleton: FC<ProductsSkeletonProps> = ({}) => {
    return (
        <div>
            <h1 className="bg-gray-500 rounded h-[36px] mt-8 mb-4 max-w-sm"></h1>
            <ul
                role="list"
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
                    <li key={idx}>
                        <div className="w-[min(300px,calc(100vw-1rem))]">
                            <Image
                                width={300}
                                height={300}
                                className="w-[min(300px,calc(100vw-1rem))] aspect-square h-auto"
                            />
                            <div className="mt-2 animate-pulse">
                                <div className="h-[20px] w-full flex mb-1 gap-2">
                                    <p className="mt-1 h-[20px] text-neutral-500 bg-gray-500 rounded w-10/12"></p>
                                    <h3 className="mt-1 h-[20px] grow font-semibold text-neutral-900 line-clamp-2 bg-gray-500 rounded"></h3>
                                </div>
                                <p className="mt-2 h-[40px] w-full font-medium text-neutral-900 text-nowrap bg-gray-500 rounded"></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
