# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./ 

# Install project dependencies
RUN npx yarn@1.19.0 install

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port (if needed) for your Node.js application
EXPOSE 8000

# Specify the command to run your Node.js application
# CMD [ "yarn", "workspace", "@designable/formily-next", "start" ]
RUN cd /app/formily/next
CMD ["yarn", "start"]
