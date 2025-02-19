# Stage 1: Build React (Vite) App
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine AS production

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# *Copy custom Nginx config to override default config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
