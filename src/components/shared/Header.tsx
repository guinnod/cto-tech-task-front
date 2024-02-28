import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { userIcon } from "../../assets";
import { CartLink } from "../cart/CartLink";
import { Logo } from "./Logo";
interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex h-16 justify-between gap-4 md:gap-8">
                    <Logo />
                    <div className="flex items-center gap-8">
                        <Link to="/in/profile">
                            <img
                                src={userIcon}
                                className="min-w-5"
                                alt="Profile"
                            />
                        </Link>
                        <CartLink />
                    </div>
                </div>
            </div>
        </header>
    );
};
