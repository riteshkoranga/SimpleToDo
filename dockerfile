# Use the official Node.js image as the base image
FROM node:14

# Install MongoDB
RUN apt-get update && apt-get install -y mongodb

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your backend code into the container
COPY . .

# Copy and set permissions for the entrypoint script
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose the port that your backend will run on
EXPOSE 5000  

# Set the entrypoint script
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

# Define the command to run your application
CMD ["node", "index.js"]
