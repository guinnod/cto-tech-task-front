import { FC, ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width: number;
    height: number;
    wrapperClassName?: string;
}

export const Image: FC<ImageProps> = ({
    width,
    height,
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
                className={`object-contain object-center h-[${height}px] w-[${width}px] ${
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
