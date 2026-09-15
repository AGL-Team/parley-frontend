import { createBrowserRouter, Navigate } from "react-router-dom";
import {
	AuthPage,
	CatalogPage,
	ChatPage,
	IndexPage,
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
		path: "/auth",
		element: <AuthPage />,
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
