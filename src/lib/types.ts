export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export interface ICart {
    productId: number;
    quantity: number[];
}

export interface IUser {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}
