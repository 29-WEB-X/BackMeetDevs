# Guía de instalación

1. Descargar repositorio
   `https://github.com/29-WEB-X/BackMeetDevs.git`

2. Instalar dependencias
   `npm install`

3. - Correr en local
     `npm run dev`
   - Correr en docker:

   1. Construir imagen
      `docker build -t meet-devs-api .`
   2. Ejecutar contenedor
      `docker run -d -p 8000:8000 meet-devs-api`

      _Nota:_
      Si quieres ejecutar el contenedor con cambios en tiempo real:

   - `docker run -d -p 8000:8000 -v /${PWD}:/api meet-devs-api`
