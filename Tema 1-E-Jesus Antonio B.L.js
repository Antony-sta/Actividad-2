// Examen 1 
/* const prompt = require("prompt-sync")();

class Empleado {
    constructor(nombre, apellido, rfc, direccion, telefono) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._rfc = rfc;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    saluda() {
        console.log(`Hola ${this._nombre} ${this._apellido}, tus datos son: RFC ${this._rfc}, tu dirección ${this._direccion}, número telefónico ${this._telefono}`);
    }

    despedir() {
        console.log(`Hola ${this._nombre} ${this._apellido},has sido despedido`);
    }
}

const persona = () => {
    let contratar = parseInt(prompt("Cantidad: "));
    let personal = [];
    let contador = 2;

    while (contador < contratar) {
        let personas = new Empleado(
            prompt(`El nombre: `),
            prompt(`El apellido: `),
            prompt(`su RFC: `),
            prompt(`su dirección: `),
            prompt(`Ingrese su número: `)
        );
        personal.push(personas);
        personas.saluda();
        contador++;
    }

    if (personal.length > 0) {
        personal[personal.length - 1].despedir();
    }
};

persona(); */

//Examen 2

/* const prompt = require("prompt-sync")();

class Empleado {
    constructor(Nombre, Apellido, RFC, Direcc, Tele) {
        this._nombre = Nombre;
        this._apellido = Apellido;
        this._rfc = RFC;
        this._direcc = Direcc;
        this._tele = Tele;
    }

    saluda() {
        console.log(`Hola ${this._nombre} ${this._apellido} tus datos son, RFC ${this._rfc}, tu direccion ${this._direcc}, tu numero telefonico ${this._tele}`);
    }

    despedir() {
        console.log(`Hola ${this._nombre} ${this._apellido} te comunicamos que has sido despedido`);
    }
}

let persona = () => {
    let contratar = parseInt(prompt("Cantidad de empleados para consultar: "));
    let pers = [];

    
    for (let i = 0; i < contratar; i++) {
        let pers = new Empleado(
            prompt(`Ingrese el nombre: `),
            prompt(`Ingrese el apellido: `),
            prompt(`Ingrese su RFC: `),
            prompt(`Ingrese su direccion: `),
            prompt(`Ingrese su numero telefonico: `)
        );
        pers.push(pers);
    }
    for(let Empleado of pers) {
           Empleado.saludar();
    }

    if(pers.length > 0) {
        pers[pers.length - 3].despedir();
    }
} */

    //Examen 3

    /* const prompt = require("prompt-sync")();

class Empleado {
    constructor(Nombre, Apellido, RFC, Direccion, Telefono) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.rfc = RFC;
        this.direccion = Direccion;
        this.telefono = Telefono;
    }

    saluda() {
        console.log(`Hola ${this.nombre} ${this.apellido} tus datos son, RFC ${this.rfc}, tu direccion ${this.direccion}, tu numero telefonico ${this.telefono}`);
    }
}

let persona = () => {
    let contratar = parseInt(prompt("Cantidad de empleados para consultar: "));
    let empleados = [];

    for (let i = 0; i < contratar; i++) {
        let nuevoEmpleado = new Empleado(
            prompt(`Ingrese el nombre: `),
            prompt(`Ingrese el apellido: `),
            prompt(`Ingrese su RFC: `),
            prompt(`Ingrese su direccion: `),
            prompt(`Ingrese su numero telefonico: `)
        );
        empleados.push(nuevoEmpleado);
        for (let index in empleados) {
            let empleado = empleados[index];
            console.log("Datos del empleado:");
            for (let propiedad in empleado) {
                if (empleado.hasOwnProperty(propiedad) && typeof empleado[propiedad] !== 'function') {
                    console.log(`${propiedad}: ${empleado[propiedad]}`);
                }
            }
            empleado.saluda();
            console.log("--------------------");
        }
    }
    Empleado.saluda();
    console.log("--------------------");
}
;

persona(); */

//Examen 4

const prompt = require("prompt-sync")();

const Empleado = (nombre, apellido, trabajo) => ({
    nombre,
    apellido,
    trabajo,
    saluda: () => {
        const promedio = 8;
        const sueldo = 2500;
        const subir = sueldo + (sueldo * 0.15);
        if (trabajo > promedio) {
            console.log(`Hola ${nombre} tu sueldo es de ${subir}`);
        } else {
            console.log(`Hola ${nombre} tu sueldo es de ${sueldo}`);
        }
    }
});

const person =() => {
    const contratar = parseInt(prompt("cuantos empleados"));
    const empleados= [];

    for (let i = 0; i < contratar; i++) {
        empleados.push(empleados(
            prompt(`nombre`),
            prompt(`apellidos`),
          parseInt(prompt (`horas trabajadas:`))
        ))
    }
    for(let index in empleados){
        const empleados = empleados[index];
        empleados.saludar();
    }
};