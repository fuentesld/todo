// Archivo de configuración de opciones de entrada 
// por linea de comando

const descripcion = {
    alias: 'd',
    demand: true,
    describe: 'Nombre de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    describe: 'Marca estado de una tarea, true/false'
}

const argv = require("yargs")
    .command('crear', "Crea una tarea", {
        descripcion
    })
    .command('actualizar', "Actualiza el estado de una tarea", {
        descripcion,
        completado
    })
    .command("listar", "lista todas las tareas")
    .command("borrar", "borra una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv }