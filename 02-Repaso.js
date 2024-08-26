// realizar un areglo con dos dimenciones y guardar dos arreglos internos y dar lectura a los internos 
let dimension=[[3,4,5,6],[7,8,9]];
    
const datosArreglo=()=>
dimension.map((datos,index)=>{
  datos.map((valores,i)=>{

    console.log(`${i}=${valores}`);
  })
});
  
    

// for of 
let A = [[3,4,5,6,7],[8,9,10]];

for (let fil of A);{
   for (let [i,v] of fil.entries()){
   console.log(`${i}=${v}`);
   }
}
// for in 
let d=[[11,12,13,14,15,16],[17,18,19]]

for(let i in d)
for (let valores in d[i]){
  console.log(`${valores}=${d[i][valores]}`);
}
// funcion flecha 
let dimencion = [[20,21,22,23,24,25],[26,27,28]];
let valores = () =>{
  for(let i in dimencion){
    for(let p in A[i]){
     console.log(`${p}=${dimencion[i][p]}`);
    }
  }
};
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

