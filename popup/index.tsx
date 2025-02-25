import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import OutsideBangladesh from "./pages/OutsideBangladesh";
import Departures from "./pages/Departures";

const router = createHashRouter([
	{
		path: "/",
		element: <App />, // Your main layout component (often with a header, footer, etc.)
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/departures", element: <Departures /> },
			{ path: "/outsideBD", element: <OutsideBangladesh /> },
		],
		// errorElement: <ErrorPage />, // Component to render for errors in this route's subtree
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
