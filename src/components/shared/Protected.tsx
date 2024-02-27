import { Outlet, useNavigate } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { Loading } from "../ui/Loading";

interface ProtectedProps {}

export const Protected: FC<ProtectedProps> = ({}) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const user = JSON.parse(localStorage.getItem("user") || "");
            if (!user) {
                throw new Error("No user found");
            }
        } catch (error) {
            console.error("Error fetching user", error);
            navigate({ to: "/login" });
        } finally {
            setLoading(false);
        }
    }, []);
    if (loading) {
        return <Loading />;
    }
    return <Outlet />;
};
