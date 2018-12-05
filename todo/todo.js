// 
// logica de la app TODO
// 

const fs = require("fs");

let listadoPorHacer = [];

// 
// Leer registro Json de un archivo donde se guardan las actividades
//  de forma permanente

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
}

// 
// Grabar registro Json en un archivo de texto
// 

const guardarDB = () => {
    let dataJson = JSON.stringify(listadoPorHacer);

    const data = new Uint8Array(Buffer.from(dataJson));
    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
}

// 
// Agregar una actividad al registro Json
// 


const crear = descripcion => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length != nuevoListado.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else return false;
}

module.exports = { crear, getListado, actualizar, borrar }