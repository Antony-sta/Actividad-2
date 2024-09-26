class person{
    constructor (nombre, edad, sexo, direccion, telefono){
    this._nombre = nombre;
    this._edad = edad;
    this._sexo = sexo;
    this._direccion= direccion;
    this._telefono = telefono;
 }
Mostrarinfo(){
return`nombre: ${this._nombre}, edad: ${this._edad}, sexo: ${this._sexo}, direccion: ${this._direccion}, telefono ${this._telefono}`;
  }
}

const personas = [
    new person ("Yesus ",22,"Masculino", "la paz","934 111 8705"),
    new person("Josti",21,"Masculino", "la paz","934 111 8705"),
    new person("Mario ",19,"Masculino", "la paz","934 111 8705"),
];


personas.forEach((persona, index) => {
    console.log(`Persona ${index + 1}:`);
    console.log(persona.Mostrarinfo());
   
});