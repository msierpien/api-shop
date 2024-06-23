"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var Image_1 = require("./schema/resolvers/Image");
var Product_1 = require("./schema/resolvers/Product");
var product_1 = require("./schema/resolvers/Query/product");
var products_1 = require("./schema/resolvers/Query/products");
var Review_1 = require("./schema/resolvers/Review");
var graphql_scalars_1 = require("graphql-scalars");
exports.resolvers = {
    Query: { product: product_1.product, products: products_1.products },
    Image: Image_1.Image,
    Product: Product_1.Product,
    Review: Review_1.Review,
    DateTime: graphql_scalars_1.DateTimeResolver,
};
