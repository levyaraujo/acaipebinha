import { FunctionComponent } from "react";
import { CardContainer } from "./card";
import { Cards } from "./styles";

export const CardsContainer: FunctionComponent = function () {
	return (
		<Cards>
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
			<CardContainer />
		</Cards>
	);
};
