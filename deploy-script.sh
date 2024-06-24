#!/bin/bash

# Ścieżka do Twojego projektu
PROJECT_DIR="/path/to/your/project"

cd $PROJECT_DIR

# Pobierz najnowsze zmiany z repozytorium
git pull origin main

# Zbuduj kontenery Docker
docker-compose down
docker-compose build
docker-compose up -d
