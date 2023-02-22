import styled from 'styled-components';

export const Nav = styled.nav`
	height: 84px;
	width: 100vw;
	background-color: #4E41D9;
	position: absolute;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const NavIcon = styled.h1`
	color: white;
	font-size: 30px;
`;

export const ProductsContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	margin-top: 120px;
	padding: 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	color: #3A3D42;
	font-size: 50px;
	font-weight: 500;
`;

export const Cards = styled.div`
	display: grid;
	max-width: 784;
	height: auto;
	grid-template-areas:
	      "a a a";
	grid-gap: 30px;
	margin-bottom: 50px;

	@media (max-width: 768px) {
		grid-template-areas:
	      "a";
	}
	max-width: 95%;
`;


export const CardHeader = styled.div`
	max-height: 109;
	width: auto;
	max-width: 242px;
	border-radius: 3px;
`;

export const CardBody = styled.div`
	height: 170px;
	padding: 4px 20px;
`;

export const Name = styled.h1`
	color: #3A3D42;
	font-size: 20px;
	font-weight: 600;
	`;

export const Description = styled.h1`
	color: #838383;
	font-size: 12px;
	font-weight: 400;
	`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 4px 20px;
	height: 30px;
`;

export const Price = styled.p`
	color: #50A773;
	font-size: 12px;
	font-weight: 600;
	`;

export const AddtoCart = styled.button`
	color: white;
	background-color: #50A773;
	width: 90px;
	height: 30px;
	font-size: 12px;
	font-weight: 600px;
	border-color: #50A773;
	outline: none;
	border-radius: 2px;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	`;

export const Card = styled.div`
		width: 242px;
		height: 346px;
		border-radius: 3px;
		background-color: #fff;
		text-align: left;
		box-shadow: #282828 2px 2px 10px;

		@media (max-width: 768px) {
			${Name} {
				font-size: 25px;
			}
			${Description} {
				font-size: 15px;
			}
			${Price} {
				font-size: 14px;
			}
		}
	`;
