# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# Set up the work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Default command for running e2e tests
CMD ["npm", "run", "run-e2e-test"]
