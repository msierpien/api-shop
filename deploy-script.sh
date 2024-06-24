#!/bin/bash

# Zapisz zmienne środowiskowe do pliku dla celów diagnostycznych
env > /tmp/env_webhook.txt

# Ścieżka do Twojego projektu
PROJECT_DIR="/home/michal/k8s/api-shop"

echo "Changing directory to $PROJECT_DIR"
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Directory $PROJECT_DIR does not exist."
  exit 1
fi

cd $PROJECT_DIR

echo "Pulling latest changes from repository"
if ! git pull origin main; then
  echo "Failed to pull from repository. Check your SSH keys and repository access."
  exit 1
fi

echo "Checking if docker-compose is installed"
if ! command -v docker-compose &> /dev/null; then
  echo "docker-compose could not be found"
  exit 1
fi

echo "Building and deploying Docker containers"
docker-compose down
docker-compose build
docker-compose up -d

echo "Deploy script executed successfully"