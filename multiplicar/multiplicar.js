const fs = require("fs");
const colors = require("colors");

let crearArchivo = (base, limite) => {
  return new Promise((resolve, rejet) => {
    if (!Number(base) || !Number(limite)) {
      rejet(`${base} o ${limite} no es un numero`);
      return;
    }
    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) rejet(err);
      else resolve(`tabla-${base}.txt`.red);
    });
  });
};

let listarTabla = (base, limite) => {
  return new Promise((resolve, rejet) => {
    if (!Number(base) || !Number(limite)) {
      rejet(`${base} o ${limite} no es un numero`);
      return;
    }
    let data = "";

    for (let i = 1; i < limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`.green;
    }

    resolve(data);
  });
};

module.exports = {
  crearArchivo,
  listarTabla
};
