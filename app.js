const argv = require("./config/yargs").argv;


const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then(lista => console.log(lista))
      .catch(err => console.log(err));

    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(err => {
        console.log(err);
      });
    break;
  default:
    console.log("no existe ningun comando");
    break;
}

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];

//console.log(argv);
// console.log("limite: ", argv.limite);
//console.log("app" + argv2);

// crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(err => {
//     console.log(err);
//   });
