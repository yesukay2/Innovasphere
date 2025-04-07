# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port (Fly uses 8080 by default)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

