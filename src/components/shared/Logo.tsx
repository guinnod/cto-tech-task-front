import { FC } from "react";

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="flex items-center font-bold">
            <a aria-label="homepage" href="/">
                FAKE STORE
            </a>
        </div>
    );
};
