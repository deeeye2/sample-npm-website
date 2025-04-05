# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (for npm ci) first to leverage Docker cache
COPY package*.json ./

# Install dependencies using npm
RUN npm ci --only=production

# Copy the rest of your app's source code
COPY . .

# Build the app if needed (optional, comment if not using a build step)
# RUN npm run build

# Expose the port your app runs on (change if not 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
