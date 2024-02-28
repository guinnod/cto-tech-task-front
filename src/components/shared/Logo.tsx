import { Link } from "@tanstack/react-router";
import { FC } from "react";

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="flex items-center font-bold">
            <Link aria-label="homepage" to="/">
                FAKE STORE
            </Link>
        </div>
    );
};
