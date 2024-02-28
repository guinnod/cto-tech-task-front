import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { userIcon } from "../assets";
import { Image } from "../components/ui/Image";
import { Loading } from "../components/ui/Loading";
import { getUser } from "../lib/api";
import { IUser } from "../lib/types";

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
    const [user, setUser] = useState<IUser>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const usersResponse = await getUser();
            setUser(usersResponse);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user", error);
            navigate({ to: "/login" });
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="mx-auto grid max-w-7xl p-8">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8">
                <div className="md:col-span-1 lg:col-span-5">
                    <Image
                        width={1024}
                        height={1024}
                        className="w-[min(calc(100dvh-128px),1024px)] aspect-square h-auto"
                        src={userIcon}
                    />
                </div>
                <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
                    <div>
                        <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
                            {user?.name.firstname} {user?.name.lastname}
                        </h1>
                        <p className="mb-8 text-sm ">
                            {user?.address.city}, {user?.address.street}
                        </p>

                        <div className="mt-8 space-y-6 text-sm text-neutral-500">
                            <p>{user?.email}</p>
                            <p>{user?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
