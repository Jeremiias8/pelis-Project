import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import search from "./modules/search.js";

export default class App {

    constructor() {
        // Iniciliazar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }   

    load() {
        // Añadir películas
        this.add.peliSave();

        // Conseguir array objetos localStorage
        const pelis = this.storage.getData();

        // Listas películas
        this.list.show(pelis);

        // Buscar películas
        search();

        console.log("La aplicación de peliculas ha sido inicializada..");
    }
}