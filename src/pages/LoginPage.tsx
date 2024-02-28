import { FC } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Loading } from "../components/ui/Loading";
import { useLogin } from "../hooks/useLogin";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = ({}) => {
    const { loading, fields, handleChange, handleSubmit } = useLogin();

    return (
        <div className="contents">
            <div className={`${!loading ? "hidden" : ""}`}>
                <Loading />
            </div>
            <div
                className={`mx-auto mt-16 w-full max-w-lg ${
                    loading ? "hidden" : ""
                }`}
            >
                <div className="space-y-1 rounded border p-8 shadow-m">
                    <Input
                        type="text"
                        placeholder="username"
                        helperText={fields.errors?.username}
                        onChange={(e) => {
                            handleChange(e, "username");
                        }}
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        helperText={fields.errors?.password}
                        onChange={(e) => {
                            handleChange(e, "password");
                        }}
                    />
                    <Button onClick={handleSubmit}>Login</Button>
                </div>
            </div>
        </div>
    );
};
