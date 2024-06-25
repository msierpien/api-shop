import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

const productsCount = 5; // Number of products to create if no file data
const reviewsCount = 2; // Number of reviews per product if no file data
const categoryCount = 3; // Number of categories to create if no file data

const seed = async () => {
  let data;
  try {
    const fileContent = await fs.readFile("./prisma/data.json", "utf-8");
    data = JSON.parse(fileContent);
  } catch (err) {
    console.log("No data file found, using faker for data generation.");
  }

  const createdCategories = [];
  
  // Create categories
  if (data && data.categories) {
    for (const category of data.categories) {
      const createdCategory = await prisma.productCategory.create({
        data: {
          name: category.name,
          slug: category.slug,
          createdAt: new Date(),
        },
      });
      console.log(`Created category with id: ${createdCategory.id}`);
      createdCategories.push(createdCategory);
    }
  } else {
    for (let i = 0; i < categoryCount; i++) {
      const name = faker.commerce.department();
      const createdCategory = await prisma.productCategory.create({
        data: {
          name: name,
          slug: faker.helpers.slugify(name).toLowerCase(),
          createdAt: faker.date.recent(),
        },
      });
      console.log(`Created category with id: ${createdCategory.id}`);
      createdCategories.push(createdCategory);
    }
  }

  // Create products
  if (data && data.products) {
    for (const product of data.products) {
      const category = createdCategories.find(cat => cat.slug === product.categorySlug);
			if (category) {

      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          slug: product.slug,
          description: product.description,
          category: {
            connect: {
              id: category.id,
            },
          },
          createdAt: new Date(),
        },
			});
			console.log(`Created product with id: ${createdProduct.id}`);
		}
    
		
    }

  } else {
    for (let i = 0; i < productsCount; i++) {
      const name = faker.commerce.productName();
      const randomCategory = createdCategories[Math.floor(Math.random() * createdCategories.length)];

      const createdProduct = await prisma.product.create({
        data: {
          name: name,
          slug: faker.helpers.slugify(name).toLowerCase(),
          description: faker.commerce.productDescription(),
          category: {
            connect: {
              id: randomCategory.id,
            },
          },
          createdAt: faker.date.recent(),
        },
      });
      console.log(`Created product with id: ${createdProduct.id}`);
    }
  }

  // Create reviews
  if (data && data.reviews) {
    for (const review of data.reviews) {
      const product = await prisma.product.findFirst({ where: { slug: review.productSlug } });
			if (product) {
      const createdReview = await prisma.review.create({
        data: {
          title: review.title,
          description: review.description,
          rating: review.rating,
          product: {
            connect: {
              id: product.id,
            },
          },
        },
      });
      console.log(`Created review with id: ${createdReview.id}`);
		}
    }
  } else {
    for (let i = 0; i < productsCount; i++) {
      const createdProduct = await prisma.product.findFirst();
			if (createdProduct) {

      for (let j = 0; j < reviewsCount; j++) {
        const createdReview = await prisma.review.create({
          data: {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            rating: faker.number.int({ min: 1, max: 5 }),
            product: {
              connect: {
                id: createdProduct.id,
              },
            },
          },
        });
        console.log(`Created review with id: ${createdReview.id}`);
			}
      }
    }
  }
};

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });