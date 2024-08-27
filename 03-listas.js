// crear una lista con diferentes tipos de datos 
let datos =[{
    nombre:"Jesus",
    apellidos:"Antony",
    edad:18,
    estudia:false
},
{
nombre:  "Axl",
apellidos: "gamas",
 edad: 15,
 estudiante: true
}
]

let arreglos=["Dany",34,true];

const info=()=>{



   /*  for(let arr in arreglosreglo){
        console.log(arreglosreglo[arr]);
     } */
        /*  */

       /*  let vale = Object.values(datos);
        vale.map((data,index) => {
            console.log(`${index}:${data}`);
        });  */

       /*  let valores=Object.keys(datos);
        for(let informacion of valores){
            console.log(informacion);
           
        } */

           /*  let valores=Object.entries(datos);
            valores.map(dat=>{
                console.log(dat);
            }) */

       /*  Object.entries(datos).forEach(([key,value])=>{
            console.log(`El ${key} ${value}`)
        }) */

            datos.map((data)=>{
                console.log(`El nombre es: ${data.nombre} ${data.apellidos}`)
            })
    };
info();