// Control de Clientes Sistema
/* const prompt = require("prompt-sync")();

class client {
    constructor(Numeromembresia, Nom, direccio, tel){
        this._Numreromembresia = Numeromembresia,
        this._Nom = Nom,
        this._direccio = direccio,
        this._tel = tel,
        this._estadocliente = null,
        this._consul=[]
    }
    RegistrClient(){
        const valor = parseInt (prompt("Cantidad de personas para el ingreso"));
         for(let i =0; i< valor; i++) {
            this._Nom = prompt("Igresar el Nombre")
            this._Numreromembresia =parseInt(prompt("Numero de Membresia"));
            this._direccio = prompt("Ingrese direccion actual");
            this._tel = parseInt(prompt("Ingresar telefono Actual"))
            this._estadocliente = prompt(`Estado 1. Libre de Multa, 2. Endeudado`);

            switch (parseInt(this._estadocliente)){
                case 1:
                    this._estadocliente = `Endeudado`;
                    console.log("Endeudado?? " )
                    break;

                    case 2:
                        this._estadocliente = `Libre`;
                        console.log("Libre de Multa")
                        break;
            }
            const datos ={
                Nom: this._Nom,
                Numeromembresia: this._Numreromembresia,
                direccio: this._direccio,
                tel: this._tel,
                estadocliente: this._estadocliente,

            }
            this._consul.push(datos)
         }
    }
    EliminDeudor(){
        for(let i = 0; i<this._consul.length; i++){
            if(this._consul[i].estadocliente.length ===`Endeudado`){
                this._consul.splice(i, 1);
                console.log (`client ${this._consul[i].Nom}te hemos dado de baja`);
            } else {
                console.log(`client ${this._consul[i].Nom} cero deudas`);
            }
        }
    }
}

const cliente = new client();
cliente.RegistrClient()
cliente.EliminDeudor() */

// Control de Películas Registro de películas (número de película, titulo, clasificación, estado: disponible o rentada, tipo: estreno o catálogo). 
/* const prompt = require ("prompt-sync")()

class Client {
    constructor(titul, Numer, Clasificacion, Dispon, Tip){
        this._titul = titul;
        this._Numer = Numer;
        this._Clasificacion = Clasificacion;
        this._Dispon = Dispon;
        this._Tip = Tip;
        this._consulta = []

    }
    RegistrClient(){
        const peli = parseInt (prompt("Ingrese las peliculas a solicitar"));
         for(let i =0; i< peli; i++) {
            this._Numer = parseInt(prompt("Igresar el numero de la peli: "));
            this._titul = prompt ("Ingrese el nombre de la peli solicitada")
            this._Clasificacion = prompt ("Ingrese su clasi ")
            this._Dispon = parseInt (prompt("Quedan (1.disponibles en la biblioteca),(2. Rentado)"));

            switch (parseInt(this._Dispon)){
                case 1:
                    this._Dispon = `Estreno`;
                    break;

                case 2:
                    this._Dispon = `por reta`;
            }
            this._Tip = prompt ("peliculas de tipo(3.estren),(4. catalog) ")
            switch (parseInt(this._Tip)){
            case 3:
                this._Tip = `Estreno`;
               break;
               case 4:
                this._Tip = `catalog`
                break;
            }
            const vare = {
            titul: this._titul,
            Numer:this._Numer,
            Dispon:this._Dispon,
            Tip: this._Tip,
            Clasificacion: this._Clasificacion,
            }
            this._consulta.push(vare)
         }
    }
    Eliminarpeli(){
        for(let i = 0; i<this._consulta.length; i++){
            if(this._consulta[i].Dispon.length === `Rentada`){
                this._consulta.splice (i, 1);
            console.log(`La peli rentada ${this._consulta[i].titul} se han rentado`)
        }
    }
} 
}  

const clientes = new Client();
clientes.RegistrClient();
clientes.EliminarDeudor();

let star = new cine();
star.consulta ();
star.Eliminarpeli(); */

//Control de Rentas
const prompt = require("prompt-sync")()

class Cliente {
    constructor(Membresia, Nombre, Direccion, Telefono, Estado) {
        this._membresia = Membresia;
        this._nombre = Nombre;
        this._direccion = Direccion;
        this._telefono = Telefono;
        this._estado = Estado;
        this._consulta = []

        registroCliente() {
            let valorar = parseInt(prompt("Ingrese la cantidad de personas para registrar: "));
            for (let i = 0; i < valorar; i++) {
                this._nombre = prompt("Ingrese su nombre: ");
                this._estado = prompt(`Cual es tu estado (1. Deudor), (2. libre )`) 
                switch (parseInt(this._estado)) {
                    case 1:
                        this._estado = 'Deudor';
                        break;
                    case 2:
                        this._estado = 'Libre';
                        break;
                }
            }
        }
    }
}

}
let datos = {
    nombre: this._nombre,
    membresia: this._membresia,
    direccion: this._direccion,
    telefono: this._telefono,
    estado: this._estado
}
this._consulta.push(datos)
}
}


eliminarDeudor() {
for (let i = 0; i < this._consulta.length; i++) {
if (this._consulta[i].estado === 'Deudor') {
    this._consulta.slice(i, 1);
    console.log(`Cliente ${this._consulta[i].nombre} con membrecia  has sido dado de baja `);

} else {
    console.log(`Cliente ${this._consulta[i].nombre} con membrecia sin libre de multa `);
}
}
}