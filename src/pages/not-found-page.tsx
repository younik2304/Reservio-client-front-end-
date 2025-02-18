import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

export default function NotFoundPage() {
	return (
		<div className="h-screen">
			<div className="h-full flex flex-col flex-nowrap items-center justify-between py-5">
				<div>Brand</div>
				<div className="flex flex-col flex-nowrap items-center ">
					<h1 className="block text-7xl font-bold sm:text-9xl ">404</h1>
					<p className="text-center">
						Oops, something went wrong.<br/>
						Sorry, we couldn't find your page.
					</p>
					<Link to="" className="mt-5">
						<Button  className="flex flex-nowrap items-center gap-x-2 hover:bg-secondary font-medium w-32 justify-center group dark:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:-translate-x-0.5 transition-all duration-200">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
							</svg>

							Go back
						</Button>
					</Link>
				</div>
				<div>
					<p className="text-muted-foreground text-sm">Copyright © {new Date().getFullYear()}, All Rights Reserved </p>
				</div>
			</div>
		</div>
	);
}