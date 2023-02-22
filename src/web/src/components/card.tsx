import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart } from "./styles";
import { FunctionComponent } from "react";
import img from "../assets/acai.png";

export const CardContainer: FunctionComponent = function () {
	return (
		<Card>
			<Header />
			<Body />
			<Footer />
		</Card>
	);
};

const Header: FunctionComponent = function () {
	return (
		<CardHeader>
			<img src={img} alt="" />
		</CardHeader>
	);
};

const Footer: FunctionComponent = function () {
	return (
		<CardFooter>
			<Price>
				R$ 20,00
			</Price>
			<AddtoCart>
				Adicionar
			</AddtoCart>
		</CardFooter>
	);
};

const Body: FunctionComponent = function () {
	return (
		<CardBody>
			<Name>Açaí da Dadila</Name>
			<Description>Delicioso açaí recheado com banana, morango, granola e mel!</Description>
		</CardBody>
	);
};

