

const prompt = require ("prompt-sync")()

class Client {
    constructor(titul, Numer, Clasificacion, Dispon, Tip){
        this._titul = titul;
        this._Numer = Numer;
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
                        this._Dispon = `Por Renta`;
                        break;
            }
        this._Tip =prompt("peliculas de tipos(3.estren),(4. catalog)")
        switch (parseInt(this._Tip)){
            case 3:
            this._Tip = `Estreno`;
            break;

            case 4:
                this._Tip = `catalog`;
                break;

        }
       const Vare = {
        titul:this._titul,
        Numer:this._Numer,
        Clasificacion: this._Clasificacion,
        Dispon: this._Dispon,
        Tip: this._Tip,

       }
       this._consulta.push(Vare)

       }
    }
    EliminDeudor(){
        for(let i = 0; i<this._consulta.length; i++){
            if(this._consulta[i].Dispon.length ===`Rentada`){
                this._consulta.splice(i, 1);
                console.log(`La peli rentada ${this._consulta[i].titul} se han rentado`)
            }
        }
    }
}

const clientes = new Client();
clientes.RegistrClient();
clientes.EliminDeudor();

let Star = new Star ();
Star.consulta();
Star.Eliminarpeli();