//Definir clases con atributos dentro del constructor
class persona{
    //variable estatica: solo le pertenece a la clase
    #clave;
    #iniciales

    //metodo constructor
    constructor (nombre,edad,sexo,direccion){
    
        this._nombre=nombre;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
        this.#clave=12367;
        this.#iniciales="ISC-";
    }
    //metodo saludar
    saludar(){ // se le deja de llamar funcion y ahora es metodo
console.log(`Hola soy ${this.nombre} y mi carrera es ${this._carrera} mi matricula es${this.generarclave()}`);
    }
    //metodo para generar una clave de alumno
    generarclave(){
     return this.#iniciales+Math.floor(Math.random()*10*this.#clave)
    }
    
    getnombre(){
        return this._nombre
    }
    setnombre (values){
        this._nombre=values;
    } 
    getcarrera(){
        return this._carrera
    }
    setcarrera(valor){
       this._carrera=valor;
    }
}

let persona1=new persona("jesus", 23, "M", "Balancan");
persona1.setnombre("jesus");
persona1.setcarrera("Admin")
console.log(persona1);
persona1.saludar();