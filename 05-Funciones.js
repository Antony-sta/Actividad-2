//Factory function
/* const persona1={
    nombre: "jesus",
    edad:23
}
const persona2={
    nombre:"jose",
    edad: 25
} */

function datospersona(nombre,edad){
    return{
        nombre:nombre,
        dead:edad,
        active:true
    }
}
{
let persona=datospersona("jesus",23);
let persona2=datospersona("juan",24)

//console.log(persona1,persona2);
//camel case
const datosUsuario={
    nombre:"jesus",
    edad:23,
    password:"12345687",
    direccion:{
    colonia:"San juaquin",
    calle: "principal",
    numetx:123
    },
    sualedo:234.24,
    guardarusuario:function(){
        console.log("guardar usuario....");
    }
}

//datosUsuario.guardarusuario();
}

//Add registros y parametros a los objetos definidos
const user={id:1};
user.nombre="Jesus";
user.guardaruser=function(){
    console.log("Guardar user...");

}
console.log(user);
user.guardaruser();

//objetos definidos
//const person=Object.freeze({id:1,nombre:"jesus"})
const person=Object.freeze({id:1,nombre:"jesus"})
person.id=2
person.nombre="juan"
person.edad=23;

//console.log(person)
//pasar funciones como parametros
function pitbull(nombre){
this._nombre=nombre;//this crea una copia del parametro
}

function Animal(fn,argumento){
    return new fn(argumento)
}

let animal1=Animal(pitbull,"fidudays")
console.log(animal1);