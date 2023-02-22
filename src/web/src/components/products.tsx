import { FunctionComponent } from "react";
import { ProductsContainer, Title } from "./styles";
import { CardsContainer } from "./cards";

export const Products: FunctionComponent = function () {
	return (
		<ProductsContainer>
			<Title>Diversos sabores 😍</Title>
			<CardsContainer />
		</ProductsContainer>
	);
};
