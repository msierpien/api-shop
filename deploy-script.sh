#!/bin/bash

# Ścieżka do Twojego projektu
PROJECT_DIR="/home/michal/k8s/api-shop"

cd $PROJECT_DIR

# Pobierz najnowsze zmiany z repozytorium
git pull origin main

# Zbuduj kontenery Docker
docker-compose down
docker-compose build
docker-compose up -d

echo "Deploy script executed successfully"