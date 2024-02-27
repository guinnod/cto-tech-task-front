import { Link } from "@tanstack/react-router";
import { FC } from "react";

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">Not Found</h1>
            <Link to="/" className="text-blue-500 underline">
                Go home
            </Link>
        </div>
    );
};
