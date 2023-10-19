# Use an official Node.js runtime as a base image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the compiled Angular app (from the dist folder) into the container
COPY . .

# Expose the port your app runs on (e.g., 80)
EXPOSE 4200

# Define the command to run your Angular app
CMD ["npm", "start"]
