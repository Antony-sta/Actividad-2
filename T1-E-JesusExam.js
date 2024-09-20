// Control de Clientes Sistema
/* const prompt = require("prompt-sync")();

class client {
    constructor(Numeromembresia, Nom, direccio, tel){
        this._Numreromembresia = Numeromembresia, // REFERENCIA Y ENCAPSULAMIENTO ES LA PROPIEDAD
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

const { Client } = require("undici-types");

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
    constructor(Membresia, Nom, Direcc, Telefono, Estad) {
        this._membresia = Membresia;
        this._Nom = Nom;
        this._Direcc = Direcc;
        this._telefono = Telefono;
        this._Estad = Estad;
        this._consulta = []

        registroCliente() {
            let valor = parseInt(prompt("Cantidad de personas para registrar: "));
            for (let i = 0; i < valor; i++) {
                this._Nom = prompt(" Ingrese Nombre: ");
                this._Estad = prompt(`Cual es tu estado (1. Endeudado), (2. Libre de Membresia )`);

                switch (parseInt(this._Estad)) {
                    case 1:
                        this._estado = 'Endeudado';
                        break;
                    case 2:
                        this._estado = 'Libre de Membresia';
                        break;
                }
        }
    
    
let datos = {
    Nom: this._Nom,
    Membresia: this._Membresia,
    Direcc: this._Direcc,
    telefono: this._telefono,
    Estad: this._Estad
}
this._consulta.push(datos)
 }
}

eliminarDeudor() {
for (let i = 0; i < this._consulta.length; i++) {
if (this._consulta[i].Estad === 'Endeudado') {
    this._consulta.splice(i, 1);
    console.log(`Cliente ${this._consulta[i].Nom} tu membrecia has sido dado de baja `);

} else {
    console.log(`Cliente ${this._consulta[i].Nom} con membrecia sin libre de multa `);
   }
  }
 }
}

class cine extends Client{
    constructor (Num, Titul, Clasificacion, Disponib, Tip) {
        super()
        this._Num = Num
        this._titul = titul
        this._Clasificacio = Clasificacion
        this._Disponi = Disponi
        this._tip = tip
        this._consulta = []
        this._preciopeli = 0
    }
    // control de pelis
    consultaPelis(){
        const peli = parseInt(prompt("Peliculas a consultar"));
        for (let i = 0; i < peli; i++) {
            this._titul = prompt("Nombre de la pelicula");
            this._Disponi = parseInt(prompt("Aun hay (1. Disponible),(2. Rentando)"));
            switch (parseInt(this._Disponi)){
                case 1:
                    this._Disponi = `Disponible`
                    break
                case 2:
                    this._Disponi = `Rent`
                    break
                case 3:
                    this._tip = `Estreno`
                    break
                case 4:
                    this._tip = `Catalog`
                    break
            }
            const vare = {
                Num: this._Num,
                titul: this._titul,
                Disponi: this._Disponi,
                tip: this._tip,
                Clasificacion: this._Clasificacion,
            }
            this._consulta.push(vare)
        }
   }

   EliminarPeli() {
    for (let i =0; i < this._consulta.length; i++) {
        if (this._consulta[i].Disponi === `Rent`) {
            this._consultar.splice(i, 1);

        } else{
            console.log(`La Pelicula ${this._consulta[i].titul} esta disponible`);
        }
    }
}

rentPeli(titulo, vare) {
    const cinemex = this._consulta;
    const peliencontrada = null;

for (let i = 0; i< cinemex.length; i++) {
    if(cinemex[i].titul === titul) {
        peliencontrada = cinemex[i]
        break;
    }
}
if(peliencontrada) {
    if (peliencontrada.Disponi ===`Disponibl`) {
        let deudorLibre = verif._consulta.some(c => c.Estad === `Endeudado`)
        if (deudorLibre) {
            console.log("salde su deuda");
        }else{
            if (peliencontrada.tip === `Estreno`) {
                this._preciopeli = 50;
            } else if (peliencontrada.tip === `catalog`) {
                this._preciopeli = 35
            }
        const FechaRent = prompt("Ingresar la fecha de renta")
        const Fechalimite = this.calcularlimite(FechaRent)
        peliencontrada.dispo = 'Rentata';
        peliencontrada.fechaRenta = fechaRenta;
        peliencontrada.fechaLimite = fechaLimite;
        console.log(`La pelicula ${titulo} se ha rentado`);
        console.log(`Fecha limite de devolucion${peliencontrada.FechaRent}`);
        console.log(`El precio es ${this._preciopeli}`);
        }
    } else {
        console.log("Pelicula no disponible");
    }
  }
}

calcularlimite(FechaRent){
    const Fechalimite = new Date(FechaRent);
    Fechalimite.setDate(Fechalimite.getDate() + 3)
    return Fechalimite.toISOString().slice(0, 10)
  }
}

const client = Client();
Cliente.registroCliente();
client.eliminarDeudor();

const sterci = new cine ();
sterci._consultar 
const titulo = prompt("Ingrese el titulo de la peli a rentar ")
const verif = client
star.renrarPeli(titulo, verif)
star.eliminarPeli();