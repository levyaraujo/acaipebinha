import { FunctionComponent } from "react";
import { Nav, NavIcon } from "./styles";
import { BiCartAlt, AiOutlineShop } from "react-icons/all";

export const NavBar: FunctionComponent = function () {
	return (
		<Nav>
			<NavIcon><AiOutlineShop /></NavIcon>
			<NavIcon><BiCartAlt /></NavIcon>
		</Nav>
	);
};
