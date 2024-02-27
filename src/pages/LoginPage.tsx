import { FC } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = ({}) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <div className="mx-auto mt-16 w-full max-w-lg">
            <form
                onSubmit={onSubmit}
                className="space-y-1 rounded border p-8 shadow-m"
            >
                <Input type="text" placeholder="username" helperText="help" />
                <Input
                    type="password"
                    placeholder="password"
                    helperText="help"
                />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};
