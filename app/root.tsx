import { Links, Meta, Outlet, ScrollRestoration } from "react-router";
import "~/app.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
