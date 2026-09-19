import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../entities/user";
import { router } from "./router";

export function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}
