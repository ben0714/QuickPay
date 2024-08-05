# Use the official Node.js image as the base image
FROM node

# Create and set the working directory inside the Docker container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using npm and yarn
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 5001

# Define the command to run the application
CMD ["yarn", "dev"]
