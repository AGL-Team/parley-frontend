import { createBrowserRouter, Navigate } from "react-router-dom";
import {
	CatalogPage,
	ChatPage,
	IndexPage,
	LoginPage,
	RegistrationPage,
	SearchPage,
} from "../../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "/catalog",
		element: <CatalogPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/registration",
		element: <RegistrationPage />,
	},
	{
		path: "/auth",
		element: <Navigate replace to="/login" />,
	},
	{
		path: "/chat",
		element: <ChatPage />,
	},
	{
		path: "/search",
		element: <SearchPage />,
	},
	{
		path: "*",
		element: <Navigate replace to="/" />,
	},
]);
