
class persona{
constructor(Nom, Apellido, edad, sexo, Direccion,telefono,correo, horario){
this._Nom=Nom
this._Apellido = Apellido
this._edad=edad
this._sexo=sexo
this._Direccion=Direccion
this._correo=correo
this._horario=horario
this._telefono=telefono
}
}
class Alumnos extends persona{
    constructor (nombre, carrera, Semes) {
    super(nombre)
    this._carrera=carrera;
    this._Semes=Semes;
   
}
mensaje(){
        console.log(`soy el alumnlo ${this._Nom } y Estudio la carera de ${this._carrera}`);
   }
}

let alumno = new Alumnos("Jesus Antonio","Sistemas",3)
alumno.mensaje()