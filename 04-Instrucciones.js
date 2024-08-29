/* const prompt=require(`prompt-sync`)();

let numero1=23;
let numero2=3;

numero1= parseInt(prompt("ingrese el numero1"))
numero2= parseInt(prompt("ingresar valor numero 2"))


console.log (numero1*numero2); */

/* realizar un programa que contenga un arreglo indefinido,
en el que solicite a traves de teclado el tamaño y se ingrese por lo menos 4
valores de cualquier tipo atraves utilizando un ciclo para ingresar, imprimir los valores en la pantalla */

let arreglos=[];


const datos= () => {
    const dimen = parseInt(prompt(`ingrese el tamaño`));
    for (let i=0; i < dimen; i++) {
        let nombre = prompt ("Ingresar el nombre: ");
        let edad = parseInt (prompt("ingresa la edad"))
         informacion = {
            nombre,
            edad,
        };
        
        arreglos.push(informacion);
    };
    
    arreglos.map ((precioso)=>{
        console.log(`El nombre es:${precioso.nombre} y tiene ${precioso.edad} años`

        );
    });

    console.log(arreglos);
};
 datos();
