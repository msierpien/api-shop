import { Image } from "./schema/resolvers/Image";
import { Product } from "./schema/resolvers/Product";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { Review } from "./schema/resolvers/Review";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers = {
    Query: { product: Query_product, products: Query_products },
    Image: Image,
    Product: Product,
    Review: Review,
    DateTime: DateTimeResolver,
};
