/*
 
 
 function check50 (num1, num2){
    if (num1 + num2 === 50){
    return true
    }
    else if (num1 === 50 || num2 === 50){
    return true
    }
    else
    return false
    }
        

    console.log(check50(25,25))
    


/*

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2)
};

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2)
};

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
};

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2)
};

alert("¿Qué operación deseas realizar?");


let operacion = prompt("1:sumar, 2:restar, 3:dividir, 4:multiplicar")
 


if (operacion == 1){
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion == 4) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}

*/



/*

let cantidad = prompt("cuántos alumnos son");
let alumnosTotales = [];

for (i=0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno" + (i+1)),0];
}


const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i=0; i < 10; i++) {
    alumnosTotales.forEach((alumno)=>{ 
        tomarAsistencia(alumnosTotales[alumno][0],alumno)})
}

/*
for (i=0; i < 10; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
*/
/*
for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _____Presentes: ${alumnosTotales[alumno][1]}<br>
    _____Ausencias: ${10 - alumnosTotales[alumno][1]}`
    ;
    if(10 - alumnosTotales[alumno][1] > 2) {
        resultado+="REPROBADO POR INASISTENCIAS ";
    } else {
        resultado+="ASISTENCIA BUENA <br><br>";
    }
    document.write(resultado)
}

*/

/*

let cantidad = prompt("Cuántos alumnos son?");
let alumnosTotales = []

 for (i=0; i < cantidad; i++) {
     let nombreAlumno = prompt("nombre del alumno");
     let alumno = {
        nombreAlumno,
        asistenciakey : 0
     };
     alumnosTotales.push(alumno)
 }; 


 const tomarAsistencia = (nombre, indice)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[indice].asistenciakey++;    
    }
 }

for (i=0; i < 10; i++) {
    alumnosTotales.forEach((alumno, index)=>{
        tomarAsistencia(alumno.nombreAlumno, index)})
}

    alumnosTotales.forEach((alumnoasistencia)=>{
        if(alumnoasistencia.asistenciakey <= 5){
            document.write("reprobado por inasistencia");
        }else{
            document.write("aprobado");
        }
    })
    

  console.log(alumnosTotales)







/*
let free = false

const validarCliente = (time)=>{
    let edad = prompt("Cuál es tu edad? ");
    if(edad >= 18) {
        if(time <= 2 && time < 7 && free==false) {
            alert("Pasa gratis mi brother");
            free == true;
        } else {
            alert(`son las ${time}:00 Puedes pasar, pero debes pagar la entrada`)
        }
    }
    else {
        alert("Anda a otra parte, no se permiten niños")
    } 
}

validarCliente(22);
validarCliente(23);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
*/

class animal {
    constructor (especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy un ${this.especie}, tengo ${this.edad} y me veo de color ${this.color}`
}
}

let perro = new animal("perro", "5", "negro") 
let gato = new animal("gato", "2", "café tigroso")

console.log(perro.info, gato.info)
