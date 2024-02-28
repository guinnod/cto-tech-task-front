import { FC, useEffect, useState } from "react";
import { getCategories } from "../../lib/api";

interface MenuProps {}

export const Menu: FC<MenuProps> = ({}) => {
    const [items, setItems] = useState<string[]>([]);
    async function fetchItems() {
        const response = await getCategories();
        setItems(response);
    }
    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <div className="flex items-center gap-4 max-sm:hidden">
            {items.map((item, index) => {
                return (
                    <a
                        href={`/?category=${item}`}
                        key={index}
                        className="capitalize font-medium"
                    >
                        {item}
                    </a>
                );
            })}
        </div>
    );
};
