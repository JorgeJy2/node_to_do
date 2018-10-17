const argv = require('./config/yargs').argv;
const porHacer = require("./to_do/to_do");
const color = require("colors");

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Crear por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("Mostrar tareas");
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("====Por hacer =====".green);
            console.log(tarea.descripcion);
            console.log("Estado : ", tarea.completado);
            console.log("==================".green);
        }
        break;
    case 'actualizar':
        console.log("Actualizar una tarea por hacer");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log("Borrar la tarea");
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");

}