import deleteOfList from './delete.js';
import edit from './edit.js';

export default class List {

    constructor() {
        // Seleccionar elementos del DOM a usar
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli) {
        return ` <article class="peli-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>

            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article> `;
    }

    show(pelis) {
        // Vaciar DOM del main content
        this.content.innerHTML = "";

        // Recorrer y mostrar todos los obj / pelis del localStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        // Funcionalidad botones de borrado
        deleteOfList();

        // Botones de edición
        edit();
    }
}