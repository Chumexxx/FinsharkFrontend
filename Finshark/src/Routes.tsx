import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./Pages/HomePage";
import CompanyPage from "./Pages/CompanyPage";
import SearchPage from "./Pages/SearchPage";
import CompanyProfile from "./Components/CompanyProfile";
import IncomeStatement from "./Components/IncomeStatement";
import DesignPage from "./Pages/DesignPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "search", element: <SearchPage/>},
            { path: "design-guide", element: <DesignPage/>},
            { path: "company/:ticker",
            element: <CompanyPage/>,
            children: [
                { path: "income-statement", element: <IncomeStatement/>},
                { path: "company-profile", element: <CompanyProfile/>},
            ]
        },
            
        ]
    }
])