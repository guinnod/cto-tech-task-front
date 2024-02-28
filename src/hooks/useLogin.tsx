import { useRef, useState } from "react";
import { login } from "../lib/api";
import { TOKEN_KEY } from "../lib/config";

interface IFields {
    values: {
        username: string;
        password: string;
    };
    errors: {
        username?: string;
        password?: string;
    };
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState<IFields>({
        values: { username: "", password: "" },
        errors: {},
    });
    const touched = useRef(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>,
        field: "username" | "password"
    ) {
        let tempErrors = { ...fields.errors };
        if (field === "username") {
            const userResult = validateUsername(e.target.value);
            tempErrors = { ...tempErrors, username: userResult.message };
        }
        if (field === "password") {
            const passwordResult = validatePassword(e.target.value);
            tempErrors = { ...tempErrors, password: passwordResult.message };
        }

        if (!touched.current) {
            tempErrors = {};
        }

        setFields({
            ...fields,
            values: { ...fields.values, [field]: e.target.value },
            errors: tempErrors,
        });
    }

    async function handleSubmit() {
        const { username, password } = fields.values;
        let tempErrors = { ...fields.errors };

        const userResult = validateUsername(username);
        tempErrors = { ...tempErrors, username: userResult.message };

        const passwordResult = validatePassword(password);
        tempErrors = { ...tempErrors, password: passwordResult.message };

        touched.current = true;
        if (!passwordResult.status || !userResult.status) {
            setFields({
                ...fields,
                errors: tempErrors,
            });
            return;
        }
        setLoading(true);
        try {
            const jwt = await login(username, password);
            localStorage.setItem(TOKEN_KEY, jwt.token);
        } catch (error) {
            alert("Invalid username or password!");
        } finally {
            setLoading(false);
        }
    }

    return { loading, fields, handleSubmit, handleChange };
};

function validateUsername(value: string) {
    if (value.length === 0) {
        return {
            status: false,
            message: "Username is required!",
        };
    }
    return {
        status: true,
        message: "",
    };
}

function validatePassword(value: string) {
    if (value.length < 4) {
        return {
            status: false,
            message: "Password length is at least 4!",
        };
    }
    return {
        status: true,
        message: "",
    };
}
