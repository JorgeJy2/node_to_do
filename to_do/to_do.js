const fs = require("fs");


let listadoPorhacer = [];

const saveBD = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile("db/data.json", data, (error) => {
        if (error) throw new Error('No se pudo grabar', error)
    });
}

const cargarDB = () => {
    try {
        listadoPorhacer = require("../db/data.json");
    } catch (error) {
        listadoPorhacer = [];
    }
}


const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        saveBD();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    saveBD();
    return porHacer;
}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    /*
        let nuevoArreglo= listadoPorhacer.filter(tarea => tarea.descripcion !== descripcion);
        */
    if (index >= 0) {
        listadoPorhacer.splice(index, 1);
        saveBD();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}