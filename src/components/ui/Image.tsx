import { FC, ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width: string | number;
    height: string | number;
}

export const Image: FC<ImageProps> = (props) => {
    const [loading, setLoading] = useState(true);
    const { width, height } = props;

    return (
        <div className={`relative w-${width} h-${height} max-w-max`}>
            <img
                loading="lazy"
                onLoad={() => setLoading(false)}
                style={{ width, height }}
                {...props}
            />
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gray-500" />
            )}
        </div>
    );
};
