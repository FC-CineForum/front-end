# We will use the official node js image
FROM node:16

RUN npm install -g http-server

# Set the work directory
WORKDIR /cineforum

# Settings
COPY package*.json ./

# Copy the rest of the files
COPY . ./

# Create the app
RUN npm run build

CMD [ "http-server", "dist" ]

# Port to use 8080
EXPOSE 8080
