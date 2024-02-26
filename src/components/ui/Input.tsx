import { FC } from "react";

interface InputProps {}

export const Input: FC<InputProps> = ({}) => {
    return <input type="text" placeholder="username" />;
};
