import { FC, InputHTMLAttributes, useState } from "react";
import { eyeIcon, eyeOffIcon } from "../../assets";
import { Image } from "./Image";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
}

export const Input: FC<InputProps> = ({
    helperText,
    type,
    className,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        setShowPassword((prev) => !prev);
    }

    function getType() {
        return type != "password" ? type : showPassword ? "text" : "password";
    }
    return (
        <div className="w-full">
            <div className="relative flex items-center">
                <input
                    {...props}
                    className={`w-full rounded border bg-neutral-50 px-4 py-2 ${
                        className ? className : ""
                    }`}
                    type={getType()}
                />
                {type === "password" && (
                    <div className="absolute right-2">
                        <Image
                            src={showPassword ? eyeOffIcon : eyeIcon}
                            width={20}
                            height={20}
                            className="cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                )}
            </div>

            <div
                className={`w-full text-red-600 text-sm mb-2 h-5 ${
                    !helperText && "opacity-0"
                }`}
            >
                {helperText}
            </div>
        </div>
    );
};
