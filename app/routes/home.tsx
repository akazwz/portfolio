import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { MailIcon, MapPinIcon } from "lucide-react";
import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
	return [
		{ title: "akazwz" },
		{ name: "description", content: "this is akazwz's personal website" },
	];
};

export default function Index() {
	return (
		<div className="dark:bg-zinc-950 dark:text-zinc-50">
			<div className="h-dvh flex max-w-2xl mx-auto flex-col gap-4 p-4 ">
				<img
					src="/avatar.webp"
					srcSet="/avatar.webp 1x, /small-avatar.webp 2x"
					className="rounded-full"
					alt="avatar"
					width={100}
					height={100}
				/>
				<h2 className="text-blue-600 font-semibold text-lg">
					Fullstack Developer
				</h2>
				<div>
					<h1 className="font-bold text-xl">AKAZWZ</h1>
					<p className="text-semibold font-lg text-zinc-500">
						Building something and making open-source projects.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2 p-4 w-full border rounded-md text-xs font-semibold border-zinc-200 dark:border-zinc-800">
						<MapPinIcon className="size-4" strokeWidth="1px" />
						<span>Chengdu China</span>
					</div>
					<div className="flex items-center gap-2 p-4 w-full border rounded-md text-xs font-semibold border-zinc-200 dark:border-zinc-800">
						<MailIcon className="size-4" strokeWidth="1px" />
						<span>Contact Me</span>
					</div>
				</div>
				<Link
					to="https://github.com/akazwz"
					target="_blank"
					className="p-4 border gap-2 flex flex-col border-zinc-100 dark:border-zinc-900 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
				>
					<div className="flex items-center gap-2 ">
						<SiGithub className="size-10" strokeWidth="1px" />
						<div className="flex-1" />
						<span className="bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 p-1 px-2 text-sm rounded-md">
							Follow
						</span>
					</div>
					<span className="font-semibold text-sm">Github</span>
					<div className="text-sm text-zinc-500">@akazwz</div>
				</Link>
				<Link
					to="https://x.com/akazwz_"
					target="_blank"
					className="p-4 border gap-2 flex flex-col border-zinc-100 dark:border-zinc-900 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
				>
					<div className="flex items-center gap-2 ">
						<SiX className="size-10" strokeWidth="1px" />
						<div className="flex-1" />
						<span className="bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 p-1 px-2 text-sm rounded-md">
							Follow
						</span>
					</div>
					<span className="font-semibold text-sm">X</span>
					<div className="text-sm text-zinc-500">@akazwz_</div>
				</Link>
			</div>
		</div>
	);
}
