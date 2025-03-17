# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del frontend (package.json, package-lock.json)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto donde corre la app
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "run", "dev"]
