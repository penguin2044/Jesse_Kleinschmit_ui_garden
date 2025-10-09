# Stage 1 — Build React app and Storybook
FROM node:20 as builder

WORKDIR /kleinschmit_jesse_ui_garden

COPY package*.json ./
RUN npm ci --silent

COPY . .

# Build the React app and Storybook
RUN npm run build
RUN npm run build-storybook

# Stage 2 — Serve both builds with nginx
FROM nginx:stable-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy both apps into nginx web root
COPY --from=builder /kleinschmit_jesse_ui_garden/build /usr/share/nginx/html
COPY --from=builder /kleinschmit_jesse_ui_garden/storybook-static /usr/share/nginx/html/storybook

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]