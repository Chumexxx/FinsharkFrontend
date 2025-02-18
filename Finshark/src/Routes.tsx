import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./Pages/HomePage";
import CompanyPage from "./Pages/CompanyPage";
import SearchPage from "./Pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "company/:ticker", element: <CompanyPage/>},
            { path: "search", element: <SearchPage/>}
        ]
    }
])