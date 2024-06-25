import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 12, end: 17 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 22, end: 29 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 30, end: 32 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 34, end: 36 },
									},
									loc: { start: 34, end: 36 },
								},
								loc: { start: 34, end: 37 },
							},
							directives: [],
							loc: { start: 30, end: 37 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 40, end: 47 },
						},
						loc: { start: 40, end: 47 },
					},
					directives: [],
					loc: { start: 22, end: 47 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 50, end: 58 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 59, end: 64 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 66, end: 69 },
									},
									loc: { start: 66, end: 69 },
								},
								loc: { start: 66, end: 70 },
							},
							directives: [],
							loc: { start: 59, end: 70 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 72, end: 76 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 78, end: 81 },
								},
								loc: { start: 78, end: 81 },
							},
							directives: [],
							loc: { start: 72, end: 81 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 85, end: 92 },
									},
									loc: { start: 85, end: 92 },
								},
								loc: { start: 85, end: 93 },
							},
							loc: { start: 84, end: 94 },
						},
						loc: { start: 84, end: 95 },
					},
					directives: [],
					loc: { start: 50, end: 95 },
				},
			],
			loc: { start: 0, end: 97 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Image",
				loc: { start: 104, end: 109 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "url",
						loc: { start: 114, end: 117 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 119, end: 125 },
							},
							loc: { start: 119, end: 125 },
						},
						loc: { start: 119, end: 126 },
					},
					directives: [],
					loc: { start: 114, end: 126 },
				},
			],
			loc: { start: 99, end: 128 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Product",
				loc: { start: 135, end: 142 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 147, end: 149 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 151, end: 153 },
							},
							loc: { start: 151, end: 153 },
						},
						loc: { start: 151, end: 154 },
					},
					directives: [],
					loc: { start: 147, end: 154 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 157, end: 161 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 163, end: 169 },
							},
							loc: { start: 163, end: 169 },
						},
						loc: { start: 163, end: 170 },
					},
					directives: [],
					loc: { start: 157, end: 170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 173, end: 177 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 179, end: 185 },
							},
							loc: { start: 179, end: 185 },
						},
						loc: { start: 179, end: 186 },
					},
					directives: [],
					loc: { start: 173, end: 186 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 189, end: 200 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 202, end: 208 },
							},
							loc: { start: 202, end: 208 },
						},
						loc: { start: 202, end: 209 },
					},
					directives: [],
					loc: { start: 189, end: 209 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 212, end: 220 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductCategory",
								loc: { start: 222, end: 237 },
							},
							loc: { start: 222, end: 237 },
						},
						loc: { start: 222, end: 238 },
					},
					directives: [],
					loc: { start: 212, end: 238 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 241, end: 248 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Review",
										loc: { start: 251, end: 257 },
									},
									loc: { start: 251, end: 257 },
								},
								loc: { start: 251, end: 258 },
							},
							loc: { start: 250, end: 259 },
						},
						loc: { start: 250, end: 260 },
					},
					directives: [],
					loc: { start: 241, end: 260 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 263, end: 272 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 274, end: 282 },
							},
							loc: { start: 274, end: 282 },
						},
						loc: { start: 274, end: 283 },
					},
					directives: [],
					loc: { start: 263, end: 283 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 286, end: 295 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 297, end: 305 },
							},
							loc: { start: 297, end: 305 },
						},
						loc: { start: 297, end: 306 },
					},
					directives: [],
					loc: { start: 286, end: 306 },
				},
			],
			loc: { start: 130, end: 308 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductCategory",
				loc: { start: 315, end: 330 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 335, end: 337 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 339, end: 341 },
							},
							loc: { start: 339, end: 341 },
						},
						loc: { start: 339, end: 342 },
					},
					directives: [],
					loc: { start: 335, end: 342 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 345, end: 349 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 351, end: 357 },
							},
							loc: { start: 351, end: 357 },
						},
						loc: { start: 351, end: 358 },
					},
					directives: [],
					loc: { start: 345, end: 358 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 361, end: 365 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 367, end: 373 },
							},
							loc: { start: 367, end: 373 },
						},
						loc: { start: 367, end: 374 },
					},
					directives: [],
					loc: { start: 361, end: 374 },
				},
			],
			loc: { start: 310, end: 376 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Review",
				loc: { start: 382, end: 388 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 393, end: 395 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 397, end: 399 },
							},
							loc: { start: 397, end: 399 },
						},
						loc: { start: 397, end: 400 },
					},
					directives: [],
					loc: { start: 393, end: 400 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 403, end: 408 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 410, end: 416 },
							},
							loc: { start: 410, end: 416 },
						},
						loc: { start: 410, end: 417 },
					},
					directives: [],
					loc: { start: 403, end: 417 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 420, end: 431 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 433, end: 439 },
							},
							loc: { start: 433, end: 439 },
						},
						loc: { start: 433, end: 440 },
					},
					directives: [],
					loc: { start: 420, end: 440 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 443, end: 449 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 451, end: 454 },
							},
							loc: { start: 451, end: 454 },
						},
						loc: { start: 451, end: 455 },
					},
					directives: [],
					loc: { start: 443, end: 455 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 458, end: 467 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 469, end: 477 },
							},
							loc: { start: 469, end: 477 },
						},
						loc: { start: 469, end: 478 },
					},
					directives: [],
					loc: { start: 458, end: 478 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 481, end: 490 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 492, end: 500 },
							},
							loc: { start: 492, end: 500 },
						},
						loc: { start: 492, end: 501 },
					},
					directives: [],
					loc: { start: 481, end: 501 },
				},
			],
			loc: { start: 377, end: 503 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 509, end: 514 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 504, end: 514 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 523, end: 531 },
			},
			directives: [],
			loc: { start: 516, end: 531 },
		},
	],
	loc: { start: 0, end: 532 },
} as unknown as DocumentNode;
