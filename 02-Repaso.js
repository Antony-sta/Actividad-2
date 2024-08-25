// realizar un areglo con dos dimenciones y guardar dos arreglos internos y dar lectura a los internos 
let c=[[3,4,5,6],[7,8,9]];
    
const datosArreglo=()=>{
c.map((datos,index)=>{
  datos.map((valores,i)=>{

    console.log(`${i}=${valores}`);
  })
});
  
}
    

// for of 
let A = [[3,4,5,6,7],[8,9,10]];

for (let fil of A);{
   for (let [i,v] of fil.entries()){
   console.log(`${i}=${v}`);
   }
}
// for in 
// funcion flecha 
// while
// for each 

// Estructura de control parser
let a=4;
let b=5;

if(a>b){
  console.log(`La a es mayor ${a}`);

}else{
  console.log(`La b es mayor ${a}`);
}

