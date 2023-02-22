import { FunctionComponent } from "react";
import { NavBar } from "./navbar";
import { Products } from "./products";

export const Main: FunctionComponent = function () {
	return (
		<div>
			<NavBar />
			<Products />
		</div>
	);
};
