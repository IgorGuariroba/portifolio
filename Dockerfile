# Pull from the official Docker image for Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /home/node/app

# Update npm to the latest version
RUN npm install -g npm@latest

# Copy the desired files from your project to the current directory in the container
COPY --chown=node:node . .

# Install dependencies
RUN npm install

# Comando para executar a aplicação
CMD ["npm", "run", "dev"]
# Command to keep the container running
#CMD ["sleep", "infinity"]