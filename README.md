# FakeStore API Project

This project is a React.js application designed to simulate an online store experience using data from [fakestoreapi.com](http://fakestoreapi.com/). It showcases a lightweight, efficient approach to building web applications by leveraging modern tools and practices. The application features product listings, user authentication, and a shopping cart functionality.

## Features

-   **Product Listing:** Users can browse and filter by category a list of products fetched from the FakeStore API.
-   **User Authentication:** A simulated login feature to demonstrate user authentication.
-   **Shopping Cart:** Users can add products to a shopping cart. Cart data is persisted in localStorage for session continuity.

## Technical Stack

-   **Vite:** The project uses Vite as its build tool, chosen for its speed and simplicity, offering a highly optimized development experience.
-   **TanStack Router:** For routing, we employed TanStack Router, a modern, lightweight library that provides faster and more efficient routing solutions.
-   **Context API:** State management is handled via React's Context API, avoiding additional dependencies like Redux for a leaner bundle size.
-   **Custom UI Components:** Designed and implemented custom UI components including image loaders, input fields with validation error messages, and a toggle for password visibility.
-   **Native Fetch API:** For API calls, the native Fetch API is utilized with custom configurations for data fetching and caching, demonstrating a deep understanding of web APIs without relying on third-party libraries like Axios.
-   **LocalStorage for Cart Data:** To simulate cart data persistence, localStorage is used as the FakeStore API does not support cart modifications.
-   **JWT Simulation:** The project simulates JWT validation and fetching user data, as the provided JWT from FakeStore API does not authenticate individual users.

## Development Goals

The development of this application aimed to demonstrate proficiency in React.js and modern web development practices by:

-   Implementing a project structure from scratch using React.js.
-   Designing a minimal yet functional UI without heavy reliance on CSS frameworks.
-   Showcasing an understanding of advanced concepts such as custom API calls, state management, and client-side routing without excessive dependency on third-party libraries.

## Running the Project

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Conclusion

This project is a testament to building efficient, modern web applications using a minimalist approach. By carefully selecting technologies and implementing features from the ground up, we demonstrate a deep understanding of web development principles, prioritizing performance and user experience.
