import { Link } from "@tanstack/react-router";
import "./App.css";

function App() {
    return (
        <div>
            <div>App</div>
            <Link to={"/home/products"}>Products</Link>
        </div>
    );
}

export default App;
