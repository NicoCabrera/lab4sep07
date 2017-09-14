# Temas

Router: es necesario importar RouterModule y Routes de @angular/router. Incluirlos en el app.module
Luego establecer las rutas.
Crear una constante "Ruteo".
Es un un array de objeto con dos parametros. path y component. El path es un string sin el "/". el component apunta a un componente que queremos navegar.
En @NgModule, en el array de "declarations", añadimos cada uno de los componentes.
Agregar lo siguiente:


```sh
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
```


El componente puede estar en mas de una ruta.

Router, ActivatedRoute, ParamMap de @angular/router

Desde el Typescript podemos tener un método que llame el `this.router.navigate("/ruta");` o con routerLink="/path" como propiedad del button.

En caso de errar a una de las rutas, se puede redirigir al Login. Si el token caduca o es corrupto tambien.
Nota: ver que hace el parametro "pathMatch"
## Clase del 7 de septiembre de 2017
Se agrega el juego "Actividad aritmética" al juego anterior ("Adivina el número").
La idea es que tengamos un acceso fluido a los juegos.

El funcionamiento basico seria:


1) Pagina de Login. Con el boton admin.
2) Página principal con un menú que nos permita ir a los juegos. Titulo: sala de juegos
    Un menu(dentro de un componente con 2 botones: uno para adivina y el otro para agilidad).
    Se puede poner una barra de navegacion y una lista con imagenes que direccionen a los juegos.
    Esta página debe tener acceso a el listado de resultados.
    Por ahora, dijo el profesor, no es necesario incluir las imagenes.

Utilizar los decoradores @Input y @Output. Ver cómo funcionan.


La aplicacion empieza en app-component.
solo contiene "<router-outlet>"
El primero que muestra es el que tiene el path="". (vacio).
Login.
El principal tiene un "<app-menu>"
En cada juego en donde quiera el menu, lo puedo incluir en el html del componente.


El listado de resultados:
Tiene como @Input una lista de resultados.
Su html es una tabla con un *ngFor para mostrar cada uno de los item y un *ngIf para mostrar con un color y mensaje distinto si es que gano perdio.

La clase juego tiene:
nombre del juego, numero secreto, numero ingresado, nombre del jugador, gano.
Un metodo para crear numero aleatorio secreto.
Un metodo para verificar si es que gano o perdio.

Los componentes de cada juego tiene un atributo juego.
Y un emisor de evento

```sh
@Output
enviarJuego EventEmitter<any> = new EvenrtEmitter<any>();
nuevoJuego:Juego;
...
this.envierJuego.emit(this.nuevoJuego);
```

Creamos un componente "listado + adivina".
El componente "Adivina..." dispara el evento, una vez que verifica, cambiando el estado de la propiedad "gano".
El nuevo componente lo va a tomar: en el .ts de éste componente.
Tiene un metodo que recibe un juego y lo guarda en un array que tiene como propiedad.
El html tiene un adivina el numero <app-adivina-el-numero (enviarJuego)="tomarJuegoTerminado($event">

Tambien utilizamnos la propiedad "children", para crear sub-ruteos.

La próxima clase vemos http, validaciones de formulario y algo mas de ruteo.

## Clase del 14 de septiembre de 2017

Hacemos un nuevo componente.
Listado de resultados + algun juego : 

Al listado de juegos le sumamos un MENU para saber qué va a mostrar.

Crearmos un nuevo componente llamado listado con una serie de botones.
Los botones ejecutan un evento que tran los listados segun el botón seleccionado.
Acceder desde el menu.
- Servicio
- Serv Promesa
 -Serv Observable

 El primer metodo se va a llamar "llamarService".
`llamarService` al principio genera un array de tipo `Game`y lo asigna a un atributo publico del componente.
 El componente listado recibe en su "listado" de tipo @Input, el array creardo en el aspo anterior.
Luego creamos un `Servicio`.
Por linea de comando creamos un servicio `gameService`.

```sh
ng generate service ./services/gameService
```

Ahora pasamos a crear un metodo que haga lo mismo que "llamarService".
En éste ejemplo lo llamé `getData`.
En el componente listado hay que iyectar el servicio, importarlo previamente, y añadirlo al array de providers del modulo pincipal


# HTTP

Importar el modulo Http de angular. Agregarlo al array de imports del módulo principal de la aplicacion
Crear un servicio nuevo llamado `miHttpService`

```sh
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
```
Luego creamos métodos genericos dentro de nuestro servicio


```sh
public httpGetPromise(url:string, obj:any){
    
  }
```

# ejemploProfesor

Ver las herencias, y cómo debería ser la navegación de la página.
