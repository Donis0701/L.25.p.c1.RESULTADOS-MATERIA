/*Sea la informacion de varios estudiantes: cedula y nota final.Se sabe que los estudiantes
aprueban con 48pts.Se desea procesar a varios estudiantes t determinar la siguiente estadistica:

a) Cantidad de estudiantes que aprueban
b) Cantidad de estudiantes que no aprueban
c) nota promedio de la seccion */
import dato from "./cl_dato.js";
import Estudiante from "./cl_estudiante.js";

let estu1 = new Estudiante(888,60);
let estu2 = new Estudiante(777,50);
let estu3 = new Estudiante(999,40);
let estu4 = new Estudiante(333,80);
let estu5 = new Estudiante(111,30);
let estu6 = new Estudiante(666,90);
let estu7 = new Estudiante(444,48);
let estu8 = new Estudiante(222,60);

let Dato = new dato();

Dato.procesarEstudiante(estu1);
Dato.procesarEstudiante(estu2);
Dato.procesarEstudiante(estu3);
Dato.procesarEstudiante(estu4);
Dato.procesarEstudiante(estu5);
Dato.procesarEstudiante(estu6);
Dato.procesarEstudiante(estu7);
Dato.procesarEstudiante(estu8);

let salida = document.getElementById("salida");
salida.innerHTML = `<br>Cantidad de aprobados ${Dato.estudiantesAprobados()}
<br>Cantidad de no aprobados ${Dato.estudiantesNoAprobados()}
<br>Nota promedio ${Dato.promedioEstudiantes()}`;