import React from "react"


function propiedades(props) {
  const {nombre,variable2,variable1,varbol} =props;
  const apellidos="Cambra";
    //console.log(props);
    return(
    <div>
        propiedades
        <h1>propiedad 1: {nombre}</h1>
        <h1>propiedad 2: {variable1}</h1>
        <h1>propiedad 3: {variable2}</h1>
        <h1>propiedad 4: {varbol}</h1>
        <h1>Operaciones</h1>
        <h2>Suma: {variable1+variable2}</h2>
        <h2>Producto: {variable1*variable2}</h2>
        
        <propiedades2 apellido = {apellidos}/>
    </div>
  );
}

export default propiedades;