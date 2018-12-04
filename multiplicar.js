// Crea una tabla de multipllicar y lo guarda en un archivo tabla-xx.txt

const fs = require('fs');
var colors = require('colors');

let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) throw `${base} no es un número`;
    buffer = "";

    for (let i = 1; i <= limite; i++) {
        buffer += `${base} * ${i} = ${base*i}\n`;
    }

    const data = new Uint8Array(Buffer.from(buffer));
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
    });
    return `tabla-${base}.txt`;
}

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) throw `${base} no es un número`;
    buffer = "";

    if (!Number(limite)) throw `${limite} no es un número`;

    buffer = "";
    console.log("======================".green);
    console.log(`== tabla de ${base} ==`.green);
    console.log("======================".green);


    for (let i = 1; i <= limite; i++) {
        buffer += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(buffer);
    return
}

module.exports = {
    crearArchivo,
    listarTabla
}