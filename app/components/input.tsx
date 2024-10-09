import { cva } from "cva";

export const input = cva({
	base: "text-sm rounded-sm focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-zinc-900",
	variants: {
		intent: {
			primary: "",
		},
		size: {
			default: "p-2",
		},
	},
	defaultVariants: {
		intent: "primary",
		size: "default",
	},
});
