const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    default: 10,
    alias: "l"
  }
};

const yargs = require("yargs");

const argv = yargs
  .command("listar", "imprime en consola la tabla de multiplicar", opts)
  .command("crear", "crea archivo con la tabla de multiplicar", opts)
  .help().argv;

module.exports = {
  argv
};
