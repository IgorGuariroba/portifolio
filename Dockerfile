# Pull from the official Docker image for Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@latest

# Definição de usuário não-root.
USER node

# Copiando os arquivos desejados do seu projeto para o diretório atual no container.
COPY --chown=node:node . .

# Install dependencies
RUN npm install

# Comando para executar a aplicação
CMD ["npm", "run", "dev"]
# Command to keep the container running
#CMD ["sleep", "infinity"]