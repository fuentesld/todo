const color = require("colors");
const argv = require("./config/yargs").argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log("crear por hacer");
        break;

    case "listar":
        console.log("Mostrar todas las tareas por hacer");
        break;

    case "actualizar":
        console.log("actualiza una tarea");
        break;

    default:
        console.log("no existe comando");
}