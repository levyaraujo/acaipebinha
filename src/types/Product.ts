export default interface Product {
	_id: string,
	name: string,
	description: string,
	imagePath: string,
	prices: number[],
	ingredients: object[];
}
