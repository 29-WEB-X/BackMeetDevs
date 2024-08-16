# La configuración del contenedor
# Un sistema operativo (ubuntu, fedora, redhat, alpine, arch, debian)
# Node

# Todo lo necesario para crear el contenedor

# Usar una imagen base de Node.js
FROM node:20-alpine3.20

# Definir un directorio de trabajo en el contenedor
WORKDIR /api

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Exponer el puerto 8000
EXPOSE 8000

# Ejecutar el proyecto dentor del contendor
CMD ["npm", "run", "dev"]

