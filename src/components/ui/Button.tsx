import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
    return (
        <button
            className={`rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700 ${className}`}
            {...props}
        />
    );
};
