1. Descargar docker desktop
2. Leer los requerimientos (habilitar WSL 2)
   2.1. Abrir power shell y ejecutar `wsl --install`
   2.2 Verificar que tienes instalado wsl 2 `wsl -v`
   2.3 Si no tiene instalado la version 2 de wsl
   `wsl --set-version 2`
   Es necesario tener:
   - procesador de 64bits
   - min 4Gb de Ram
   - Tener habilitado la virtualización de hardware desde la BIOS
3. Installar docker-desktop

Crear imagen
`docker build -t [tag]:[version] [ruta del Dockerfile]`

Listar imagenes
`docker images`

Crear un contenedor basado en una imagen
`docker run [nombre imagen]`

Crear un contenedor basado en una imagen y ponerlo en segundo plano(detached)
`docker run -d [nombre imagen]`

Crear un contenedor basado en una imagen con bind de puertos y ponerlo en segundo plano (detached)
`docker run -d -p [puerto local]:[puerto del contenedor] [nombre de la imagen]`

Listar contenedores activos
`docker ps`

Listar contendores todos
`docker ps -a`

Levantar de nuevo un contenedor (2do plano)
`docker start [id contendor]`

Detener contenedor
`docker stop [id contenedor]`

Ejecutar un comando dentro del contenedor
`docker exec [id contenedor] [comando a ejecutar]`

Terminal dentro del contenedor
`docker exec -it [id contenedor] sh`

Crear contenedor ligando el contenido con mi local en segundo plano con bind de puerto (/${PWD})
`docker run -d -p 8000:8000 -v [nombre volumen o ruta local]:[ruta contenedor] [nombre imagen]`

docker-compose -d para ejecutar en segundo plano(--build asegurarse que docker compose recontruya las imagenes)
`docker-compose up -d --build`

LISTA de comando para network de docker
