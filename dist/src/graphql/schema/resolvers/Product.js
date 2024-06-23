export const Product = {
    async reviews(parent, _args, ctx) {
        const reviews = await ctx.prisma.product
            .findUnique({ where: { id: parent.id } })
            .reviews();
        return reviews || [];
    },
};
