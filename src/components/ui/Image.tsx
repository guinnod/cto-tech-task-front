import { FC, ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string;
}

export const Image: FC<ImageProps> = ({
    className,
    wrapperClassName,
    ...props
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <div
            className={`relative max-w-max ${
                wrapperClassName ? wrapperClassName : ""
            }`}
        >
            <img
                loading="lazy"
                onLoad={() => setLoading(false)}
                className={`object-contain object-center ${
                    className ? className : ""
                }`}
                {...props}
                // disable cache to show the loading state
                src={`${props.src}?${Date.now()}`}
            />
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gray-500" />
            )}
        </div>
    );
};
