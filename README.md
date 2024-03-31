# W2mHeroes

La aplicación se ha programado con la versión LTS actual de Angular ([^16.0.0](https://angular.io/guide/releases#actively-supported-versions)) y los datos se obtienen a partir de un servidor de mocks programado con Node y Express.

## Servidor de mocks

Para iniciar el servidor de mocks se ha de ejecutar el script `npm run mocks:server`. El servidor escucha en el puerto 8080 de localhost.

Las peticiones al servidor tienen un retardo de 2 segundos para mostrar el spinner de carga.

## Aplicación

La aplicación de Angular se inicia ejecutando el script `npm run start` y navegando a http://localhost:4200

## Test

Iniciar `npm run test` para ejecutar los tests

## Provocar error para ver el funcionamiento del interceptor de errores

El formulario para editar o crear un super hero tiene un campo que no es obligatorio, 'Grupo', pero el servidor si que espera un dato en ese campo.

Si se intenta guardar la información de un super heroe sin ese dato se producirá un error, disparando el interceptor y mostrando el error en un modal.

