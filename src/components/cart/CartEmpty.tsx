import { Link } from "@tanstack/react-router";
import { FC } from "react";

interface CartEmptyProps {}

export const CartEmpty: FC<CartEmptyProps> = ({}) => {
    return (
        <section className="mx-auto max-w-7xl p-8 w-full">
            <h1 className="mt-8 text-3xl font-bold text-neutral-900">
                Your Shopping Cart is empty
            </h1>
            <p className="my-12 text-sm text-neutral-500">
                Looks like you haven’t added any items to the cart yet.
            </p>
            <Link
                to="/"
                className="inline-block max-w-full rounded border border-transparent bg-neutral-900 px-6 py-3 text-center font-medium text-neutral-50 hover:bg-neutral-800 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-500 sm:px-16"
            >
                Explore products
            </Link>
        </section>
    );
};
