import Storage from "./storage.js";
import List from "./list.js";

export default function() {

    // Crear objetos
    const storage = new Storage();
    const list = new List();

    // Datos de las pelis disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    // Recorrer pelis mostradas
    pelis_viewed.forEach(peli => {
        // let selector = "#"+peli.id+" .delete";
        // Capturar botón
        let delete_btn = peli.querySelector(".delete");
        
        // Evento click
        delete_btn.onclick = function() {
            
            // Conseguir el id de la peli que quiero borrar
            const peli_id = this.getAttribute("data-id");
           
            // Filtrar el array para que elimine la que no quiero
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));
        
            // Actualizar datos en localStorage
            storage.save(new_pelis_stored);

            // Volver a mostrar listado actualizado
            list.show(new_pelis_stored);

            console.log(pelis_stored, new_pelis_stored);
        }
    });


}