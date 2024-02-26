import { FC } from "react";

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
    return (
        <div>
            <h1>Not Found</h1>
            <a href="/">Go Home</a>
        </div>
    );
};
