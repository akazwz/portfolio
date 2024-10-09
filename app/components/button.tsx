import { cva } from "cva";

export const button = cva({
	base: "shadow text-sm rounded-sm focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-zinc-900 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90",
	variants: {
		intent: {
			primary: "bg-zinc-900 text-zinc-100 font-medium",
			danger: "bg-red-500 text-white font-medium",
		},
		size: {
			default: "p-2",
			full: "w-full p-2",
		},
	},
	defaultVariants: {
		intent: "primary",
		size: "default",
	},
});
