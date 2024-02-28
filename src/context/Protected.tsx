import { Outlet, useNavigate } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { Loading } from "../components/ui/Loading";
import { TOKEN_KEY } from "../lib/config";
import { validateToken } from "../lib/utils";

interface ProtectedProps {}

export const Protected: FC<ProtectedProps> = ({}) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    async function checkToken() {
        try {
            const isTokenValid = await validateToken(TOKEN_KEY);
            if (!isTokenValid) {
                throw new Error("No user found");
            }
        } catch (error) {
            console.error("Error parsing token", error);
            navigate({ to: "/login" });
            alert("Please login to continue");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkToken();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <Outlet />;
};
