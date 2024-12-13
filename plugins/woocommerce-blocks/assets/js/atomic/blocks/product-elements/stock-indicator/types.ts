export interface BlockAttributes {
	productId: number;
	isDescendentOfQueryLoop: boolean;
	isDescendantOfAllProducts: boolean;
	isDescendentOfSingleProductTemplate: boolean;
	selectedProductType?: string;
}
