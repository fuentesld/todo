const color = require("colors");
const argv = require("./config/yargs").argv;
const porHacer = require("./todo/todo");

// console.log(argv.descripcion);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Se creo la tarea "${argv.descripcion}"`.green);
        break;

    case "listar":
        let listado = porHacer.getListado();
        console.log("=====Por Hacer=======".green);
        listado.forEach(tarea => {
            console.log(`${tarea.descripcion} \t ${tarea.completado}`);
        })
        console.log("=====================".green);
        break;

    case "actualizar":
        let solicitud = porHacer.actualizar(argv.descripcion, argv.completado)
        if (solicitud) return console.log("tarea actualizada".green)
        else return console.log(`no se encontró la tarea ${argv.descripcion}!!!`.magenta)

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) console.log("registro borrado!!!".green);
        else console.log(`Tarea "${argv.descripcion}" no se encontro!!!`.magenta);
        break;

    default:
        console.log("no existe comando");
}