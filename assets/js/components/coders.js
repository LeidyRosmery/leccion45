'use strict';
const Coders = (update) => {
    const lista = $('<ol></ol>');
    state.students.forEach((elemento, indice) => {
        const elmLista = $('<li> ' + elemento.name + '  <input type="checkbox"> </li>');
        lista.append(elmLista);
    });
    return lista;
}
