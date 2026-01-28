import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout.js";
import { HomeLayout } from "../layout/HomeLayout.js";
import ProductsLayout from "../layout/ProductsLayout.js";
import ProductDetails from "../pages/ProductDetails.js";
import ErrorPage from "../pages/ErrorPage.js";
import CompanyProfile from "../pages/CompanyProfile.js";
import ChairmanMessage from "../pages/ChairmanMessage.js";
import BoardOfDirectors from "../pages/BoardOfDirectors.js";
import Publication from "../pages/Publication.js";
import NewsEvents from "../pages/NewsEvents.js";
import Feedback from "../pages/Feedback.js";
import ContactUs from "../pages/ContactUs.js";
import Login from "../pages/Login.js";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/chairman-message",
        element: <ChairmanMessage />,
      },
      {
        path: "/board-of-directors",
        element: <BoardOfDirectors />,
      },
      {
        path: "/publication",
        element: <Publication />,
      },
      {
        path: "/products",
        element: <ProductsLayout />,
      },
      {
        path: "/products/:category",
        element: <ProductsLayout />,
      },
      {
        path: "/product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/news-events",
        element: <NewsEvents />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
