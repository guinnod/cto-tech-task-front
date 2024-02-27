import { FC } from "react";
import spin from "../../assets/spin.svg";
interface LoadingProps {}

export const Loading: FC<LoadingProps> = ({}) => {
    return (
        <div
            className="flex items-center justify-center h-full"
            aria-busy="true"
            role="status"
        >
            <img src={spin} />
        </div>
    );
};
