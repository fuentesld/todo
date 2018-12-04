// Archivo de configuración de opciones de entrada 
// por linea de comando

const descrip = {
    alias: 'd',
    demand: true,
    describe: 'Nombre de la tarea'
}

const argv = require("yargs")
    .command('crear', "Crea una tarea", {
        descripcion: descrip
    })
    .command('actualizar', "Actualiza el estado de una tarea", {
        descripcion: descrip,
        completado: {
            alias: 'c',
            default: 'true',
            describe: 'Marva estado de una tarea, true/false'
        }
    })
    .help()
    .argv;

module.exports = { argv }