import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<
	QueryResolvers["products"]
> = async (_parent, args, ctx) => {
	args.first = args.first ?? 20;
	args.skip = args.skip ?? 0;
  
	const products = await ctx.prisma.product.findMany({
		take: args.first,
		skip: args.skip,
		include: {
			category: true,
			reviews: true,
		},
	});
	return products.map((product) => ({
		id: product.id,
		name: product.name,
		slug: product.slug,
		description: product.description,
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,
		category: product.category,
		reviews: product.reviews,
		categoryId: product.categoryId,
	}));
};
