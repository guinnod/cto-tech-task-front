import { Outlet } from "@tanstack/react-router";
import { FC } from "react";
import reactLogo from "../../assets/react.svg";
interface RootProps {}

export const Root: FC<RootProps> = ({}) => {
    return (
        <div>
            <h1>FAKE STORE API</h1>
            <img src={reactLogo} />
            <Outlet />
        </div>
    );
};
