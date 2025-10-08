# Kleinschmit_Jesse UI Garden — Docker setup for Assignment 12 (No nginx)

This repository contains a Create React App based component library (with Storybook). The Dockerfile builds a production version of the React app and serves it using the Node `serve` package on port **8083**.

## Files created

- `Dockerfile` — builds and serves CRA production build using `serve`
- `.dockerignore` — recommended ignores
- `docker-compose.yml` — optional convenience file

## Required naming

- Container name: `Kleinschmit_Jesse_coding_assignment12`
- Working directory: `/Kleinschmit_Jesse_ui_garden`

## Build the Docker image (from project root)

```bash
docker build -t kleinschmit_jesse_ui_garden:latest .
```
