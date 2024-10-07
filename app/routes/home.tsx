import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
	return [
		{ title: "portfolio" },
		{ name: "description", content: "Welcome to my portfolio!" },
	];
};

export default function Index() {
	return (
		<div className="p-2 h-dvh flex items-center justify-center">
			<h1 className="text-xl font-bold">Welcome to my portfolio!</h1>
		</div>
	);
}
