// Se pide un sw que permita mostrar información como se ve en la tabla, dada las siguientes clases. Alumnos, Calificaciones, Materias,.
class Alumno {

    constructor(nombre) {
        this.nombre = nombre;
        this.calificaciones = [];
}
}

class Docente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Materia {
    constructor(nombre) {
        this.nombre = nombre;
}
}

class Calificacion {
    constructor(alumno, materia, docente, cal1, cal2, caln = null) {
        this._alumno = alumno;
        this._materia = materia;
        this._docente = docente;
        this._cal1 = cal1;
        this._cal2 = cal2;
        this._caln = caln;
        this._promedio = this.calcularPromedio();
    }

    calcularPromedio() {
        let notas = [this._cal1, this._cal2];
        if (this._caln !== null) {
            notas.push(this._caln);
        }
        return notas.reduce((a, b) => a + b, 0) / notas.length;
    }
}

class SistemaCalificaciones {
    constructor() {
        this.alumnos = [];
        this.docentes = [];
        this.materias = [];
        this.calificaciones = [];
    }

    agregarAlumno(nombre) {
        let alumno = new Alumno(nombre);
        this.alumnos.push(alumno);
        return alumno;
    }

    agregarDocente(nombre) {
        const docente = new Docente(nombre);
        this.docentes.push(docente);
        return docente;
    }

    agregarMateria(nombre) {
        let materia = new Materia(nombre);
        this.materias.push(materia);
        return materia;
     }

    agregarCalificacion(alumno, materia, docente, cal1, cal2, caln = null) {
        const calificacion = new Calificacion(alumno, materia, docente, cal1, cal2, caln);
        this.calificaciones.push(calificacion);
        alumno.calificaciones.push(calificacion);
        return calificacion;
    }

    mostrarTabla() { // agrega solo la tabla 
        console.log('No. Control | Alumno      | Materia      | Docente      | Cal1 | Cal2 | Cal...n | Promedio');
        console.log('-'.repeat(90)); // 2. Imprime una línea separadora debajo del encabezado
        this.calificaciones.forEach((cal, index) => { //Itera sobre cada calificación en el arreglo _califica
            console.log(
                `${(index + 1).toString().padEnd(12)}| ` + //4 Número de control (index + 1) alineado a la derecha en 12 espacios
                `${cal._alumno.nombre.padEnd(12)}| ` + // Nombre del alumno alineado a la derecha en 12 espacios
                `${cal._materia.nombre.padEnd(13)}| ` + // Nombre de la materia alineado a la derecha en 13 espacios
                `${cal._docente.nombre.padEnd(13)}| ` + // Nombre del docente alineado a la derecha en 13 espacios
                `${cal._cal1.toString().padEnd(5)}| ` + // Primera calificación alineada a la derecha en 5 espacios
                `${cal._cal2.toString().padEnd(5)}| ` + // Segunda calificación alineada a la derecha en 5 espacios
                `${(cal._caln !== null ? cal.caln.toString() : '').padEnd(8)}| ` + // Calificación adicional (si existe) o espacio en blanco, alineado a la derecha en 8 espacios
                `${cal._promedio.toFixed(2)}` // Promedio con dos decimales
            );
        });
}
}

// Ejemplo de uso
 let sistema = new SistemaCalificaciones();

// Agregar alumnos
let dany = sistema.agregarAlumno('Dany');
let luis = sistema.agregarAlumno('Luis');

// Agregar docentes
let jose = sistema.agregarDocente('José');
let pedro = sistema.agregarDocente('Pedro');
let juan = sistema.agregarDocente('Juan');

// Agregar materias
const matematicas = sistema.agregarMateria('Matemáticas');
const fisica = sistema.agregarMateria('Física');
const programacion = sistema.agregarMateria('Programación');

// Agregar calificaciones
sistema.agregarCalificacion(dany, matematicas, jose, 90, 95);
sistema.agregarCalificacion(dany, fisica, pedro, 85, 75);
sistema.agregarCalificacion(dany, programacion, juan, 30, 30);
sistema.agregarCalificacion(luis, matematicas, jose, 75, 85);
sistema.agregarCalificacion(luis, fisica, pedro, 70, 30);

// Mostrar la tabla
sistema.mostrarTabla();