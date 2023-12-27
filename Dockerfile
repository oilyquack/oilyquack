# Use an official Node runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Expose the port for the app
EXPOSE 4000

# Set the environment variable for HMR
ENV VITE_PORT=4000

# Command to start the app with HMR
CMD ["yarn", "run", "dev"]
