# Use the official Node.js image.
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Copy the rest of the application files
COPY . .

# Install app dependencies
RUN pnpm install

# Run code generation
RUN pnpm codegen

# Expose the port the app runs on
EXPOSE 4000

# Run the web service on container startup
CMD [ "pnpm", "dev" ]
