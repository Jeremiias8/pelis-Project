import Storage from "./storage.js";
import List from "./list.js";

export default class Add {

    constructor() {
        // Crear obj
        this.storage = new Storage();
        this.list = new List();

        // Elementos del DOM a utilizar
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // Conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);

            // Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // Pequeña validación
            if (title != "" || description != "") {
                
                // Crear obj a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                };

                // Añadir al array de obj
                pelis.push(peli);

                // Guardar en el Localstorage
                this.storage.save(pelis);

                // Actualizar listado
                // this.list.addToList(peli, pelis);
                this.list.show(pelis);

            } else {
                alert("Introduce bien los datos en el formulario !!!");
            }

            console.log("Acabas de enviar el formulario de la barra lateral, como título y descripción", title, description);

            return false;
        };
    }
}