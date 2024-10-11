#!/bin/sh
# run-tests.sh

# Build the Docker image
docker-compose build
if [ $? -ne 0 ]; then
  echo "Docker build failed. Exiting."
  exit 1
fi

# Run the component tests
docker-compose run --rm component-tests
if [ $? -ne 0 ]; then
  echo "Component tests failed. Exiting."
  exit 1
fi
