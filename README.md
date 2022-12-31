# Logica de prueba de Angular.
Este proyecto es una aplicación de Angular con un servicio JSONPlaceholder y ejercicios de lógica para probar y mejorar la funcionalidad. El código y recursos se almacenan en un repositorio y se utiliza para construir interfaces de usuario interactivas. Aplicable a sitios web.

# servicio para obtener posts
El código del ejercicio se meustra en el componente de Angular llamado ServiceComponentComponent. Este componente tiene como funcionalidad mostrar una lista de posts y permitir al usuario agregar un nuevo post a través de un formulario. Para ello, hace uso de un servicio llamado JsoplaceholdeServiceService que se encarga de realizar las operaciones de lectura y escritura de datos a través de una API. El componente tiene una variable "posts" para almacenar la lista de posts y una variable "newPost" para almacenar el título y el cuerpo del post que se va a agregar. El componente tiene también dos métodos: getPosts() para obtener la lista de posts y addPost() para agregar un nuevo post. En el método addPost() se limpian los campos del formulario y se vuelve a obtener la lista de posts actualizada.

Para accedera este debera usar la ruta «/posts»
