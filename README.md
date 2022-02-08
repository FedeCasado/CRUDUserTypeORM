# CRUD de Usuarios.

Este proyecto es una aplicacion que nos permite crear, buscar, actualizar y eliminar un Usuario. 

El backend esta desarrollado con el lenguaje Typescript, utilizando express para levantar el servidor, typeorm para crear la base de datos, morgan para ver en consola cada peticion que se haga , cors que lo usamos para permitir que un usuario obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto al que pertenece y MySQL para la base de datos.

## Comenzando 🚀

_Estas instrucciones te permitirán levantar el proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

Previamente se deberá instalar Node, express, typescript, morgan , cors y mysql.

para instalar express:
```
npm i express
```
para instalar typescripy
```
npm install  typescript
```
para instalar jest
```
npm i morgan
```
para instalar cors
```
npm i cors
```
para instalar MySQL
```
npm i mysql
```

Como estamos utilizando Typescript necesitamos agregar los TYPES:
  npm i  @types/cors,
  npm i  @types/express
  npm i  @types/morgan
  npm i  @types/node

### Instalación 🔧

Para instalar el proyecto se deberá instalar las dependencias del proyecto
```
npm install
 ````

a continuación se debera configurar las variables de entorno de desarrollo, para el proyecto de backed creando un archivo "ormconfig.json"por fuera de todas las carpetas y setear la conexion a la base de datos siguiendo el siguente ejemplo.
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "usuario que se haya creado",
    "password": "LA CONTRASEÑA DE LA BASE DE DATOS",
    "database": "Nombre de la base de datos",
    "entities": ["dist/entity/**/*.js"],
    "synchronize": true
 }

Para poder probar la aplicacion recomindo usar POSTMAN para las peticiones HTTP. 