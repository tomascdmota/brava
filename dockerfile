# Use the official Node.js image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY .env ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# # Use a smaller image for serving the app
# FROM nginx:alpine

# # Copy the build files from the previous stage
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]
