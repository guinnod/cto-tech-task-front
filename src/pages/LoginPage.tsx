import { FC } from "react";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = ({}) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
