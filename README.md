# Redux por Bedu

Notas y repo del [Curso de Redux por Bedu en Platzi](https://platzi.com/clases/redux/)

### Dependencias

```bash
npm i axios
npm i react-router-dom
npm i redux react-redux
npm i redux-thunk
```

### Conceptos

- **Stateful vs Statless** Los componentes no funcionales no manejan estado, solo manejan información y funciones. Los componentes de clases manejan un estado interno, información y funciones, no hace falta definir las funciones con const simplemente con el nombre de la función ya lo detecta.
- **Ciclo de vida de React**
  - Initialization: Declaramos nuestro estado o propiedades
  - Mounting: Todo componente debe tener render. Es obligatorio.
  - Updation
  - Unmounting: Solo hay una función en caso de que queramos hacer algo cuando se destruya un componente
- **Promesas** Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Las promesas tienen tres estados: - pending - fullfilled - rejected
  Las promesas se invocan de la siguiente forma:

```js
new  Promise( ( resolve, reject ) => {
// --- llamado asíncrono
        if( todoOK ) {
        // -- se ejecutó el llamado exitosamente resolve() }
        else {
        // -- hubo un error en el llamado reject()
        }
} )
```
## Pilares de Redux
- Store: Almacenamiento
- Reducers: Estados
- Action Creators: Funciones
- Componente: Código JSX

- **El store**:
    - Contiene el estado de la aplicación
    - Permite el acceso al estado vía getState()
    - Permite que el estado sea actualizado vía dispatch(action)
    - Registra los listeners vía subscribe(listener)
    - Maneja la anuliación del registro de los listeners via el retorno de la función de subscribe(listener)

- **Action Creators** describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers. El Provider es el componente de Redux en el cual encerraremos nuestra aplicación para que puedan comunicarse los componentes entre ellos.
- **Redux Thunk** permite a las action creators invertir el control despachando funciones. Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamas thunks.
- **Explicación teórica: ciclo completo de Redux**
Cuando nuestro componente termina de cargar (`componentDidMount`) llama al Action Creator, luego el Action Creator contiene la promesa, trae los datos necesarios y luego modifica al `Reducer` para que actualice el estado usando `dispatch()` y luego lo actualizamos en el componente con el `mapStateToProps`.





## Recursos
- [users json fake api](https://jsonplaceholder.typicode.com/users)
```