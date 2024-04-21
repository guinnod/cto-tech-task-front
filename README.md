# FakeStore API Project

This project is a React.js application designed to simulate an online store experience using data from [fakestoreapi.com](http://fakestoreapi.com/). It showcases a lightweight, efficient approach to building web applications by leveraging modern tools and practices. The application features product listings, user authentication, and a shopping cart functionality.

## Features

-   **Product Listing:** Users can browse and filter by category a list of products fetched from the FakeStore API.
-   **User Authentication:** A simulated login feature to demonstrate user authentication. fakestoreapi provides the following credentials:
    -   **Username:** `johnd`
    -   **Password:** `m38rmF$`
-   **Shopping Cart:** Users can add products to a shopping cart. Cart data is persisted in localStorage for session continuity.

## Technical Stack

-   **Vite:** The project uses Vite as its build tool, chosen for its speed and simplicity, offering a highly optimized development experience.
-   **TanStack Router:** For routing, we employed TanStack Router, a modern, lightweight library that provides faster and more efficient routing solutions.
-   **Context API:** State management is handled via React's Context API, avoiding additional dependencies like Redux for a leaner bundle size.
-   **Custom UI Components:** Designed and implemented custom UI components including image loaders, input fields with validation error messages, and a toggle for password visibility.
-   **Native Fetch API:** For API calls, the native Fetch API is utilized with custom configurations for data fetching and caching, demonstrating a deep understanding of web APIs without relying on third-party libraries like Axios.
-   **LocalStorage for Cart Data:** To simulate cart data persistence, localStorage is used as the FakeStore API does not support cart modifications.

## Development Goals

The development of this application aimed to demonstrate proficiency in React.js and modern web development practices by:

-   Implementing a project structure from scratch using React.js.
-   Designing a minimal yet functional UI without heavy reliance on CSS frameworks.
-   Showcasing an understanding of advanced concepts such as custom API calls, state management, and client-side routing without excessive dependency on third-party libraries.
