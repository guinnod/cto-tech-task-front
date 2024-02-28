import { Link } from "@tanstack/react-router";
import { FC } from "react";
import cartIcon from "../../assets/cart.svg";
import { Logo } from "./Logo";
interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex h-16 justify-between gap-4 md:gap-8">
                    <Logo />
                    <div className="flex items-center">
                        <Link to={"/home"}>
                            <img
                                src={cartIcon}
                                alt="art"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
