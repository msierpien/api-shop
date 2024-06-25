# Use the official Node.js image.
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install app dependencies
COPY . .
COPY .graphqlrc.ts ./
RUN pnpm install

# Copy the Prisma schema
COPY prisma/schema.prisma ./prisma/

# Copy the rest of the application files

# Ensure .graphqlrc.ts is in the correct location

# Run code generation
RUN pnpm codegen

# Apply database migrations and generate Prisma client

RUN pnpx prisma generate

# Expose the port the app runs on
EXPOSE 4000

# Run the web service on container startup
CMD [ "pnpm", "dev" ]

