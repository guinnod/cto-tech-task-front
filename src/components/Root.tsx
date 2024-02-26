import { Outlet } from "@tanstack/react-router";
import { FC } from "react";

interface RootProps {}

export const Root: FC<RootProps> = ({}) => {
    return (
        <div>
            <h1>FAKE STORE API</h1>
            <Outlet />
        </div>
    );
};
