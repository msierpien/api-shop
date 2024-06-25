import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	async reviews(parent, _args, ctx) {
		const reviews = await ctx.prisma.product
			.findUnique({ where: { id: parent.id } })
			.reviews();
		return reviews || [];
	},
	async category(parent, _args, ctx) {
		const category = await ctx.prisma.product
			.findUnique({ where: { id: parent.id } })
			.category();
		if (!category) {
			throw new Error(
				`Category not found for product with id: ${parent.id}`,
			);
		}
		return category;
	},
};
