import Storage from './storage.js';
import List from './list.js';

export default function() {

    // Crear objetos
    const storage = new Storage();
    const list = new List();

    // Conseguir elementos DOM
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    // Aplicar evento al form de búsqueda
    search_btn.onclick = (e) => {
        
        e.preventDefault();

        // Conseguir el texto introducido en el campo de búsqueda
        let wanted = document.querySelector("#search_field").value;

        // Conseguir datos de pelis actualizadas
        let pelis_stored = storage.getData();

        // Aplicar filtro para encontrar película
        const new_pelis = pelis_stored.filter(peli => {

            return peli.title.toLowerCase().includes(wanted.toLowerCase());

        });

        // Mostrar el listado de coincidencias
        if (new_pelis.length <= 0) {
            content.innerHTML = "<div><h2>No hay coincidencias</h2></div>";
        } else {
            list.show(new_pelis);
        }

        return false;
    };

}