# Jesse Kleinschmit - Assignment 12: Component Library

This project is a React + Storybook component library.  
Both the React app and Storybook are containerized and hosted together on **localhost:8083**.

---

How to Run

Build the Docker Image

Run this command from the root of the project (where the Dockerfile is):

```bash
docker build -t kleinschmit_jesse_coding_assignment12 .

then run: docker run -d --name kleinschmit_jesse_coding_assignment12 -p 127.0.0.1:8083:8083 kleinschmit_jesse_coding_assignment12

links to both react app and story book

Open in Your Browser

React App: http://127.0.0.1:8083

Storybook: http://127.0.0.1:8083/storybook
```
