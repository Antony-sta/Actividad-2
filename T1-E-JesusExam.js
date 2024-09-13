// Control de Clientes Sistema
const prompt = require("prompt-sync")();

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
cliente.EliminDeudor()