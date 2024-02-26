import { Link } from "@tanstack/react-router";
import "./App.css";

function App() {
    return (
        <div>
            <div>App</div>
            <Link href="/products" to={"/products"}>
                Products
            </Link>
        </div>
    );
}

export default App;
