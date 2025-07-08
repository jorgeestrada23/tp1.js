
let buscar = alert("Bienvenido a School Family");
console.log(buscar)

let nombre = prompt("cual es tu nombre");
let bienvenida = ("Bienvenido " + nombre + " a School Family");
console.log(bienvenida);

let lista = ("Lista de alumnos presentes:  ");
console.log(lista)

// Creamos un array con nombres
let listaDeAsistencia = [
    { nombre: "Ana", presente: false },
    { nombre: "Luis", presente: false },
    { nombre: "Maria", presente: false },
    { nombre: "Carlos", presente: false}
];

// Función para marcar presente por nombre
function darPresente(nombre) {
    const persona = listaDeAsistencia.find(p => p.nombre === nombre);
        if (persona) {
            persona.presente = true;
            console.log(`${nombre} está presente.`);
        } else {
            console.log(`No se encontró a ${nombre} en la lista.`);
        }
}

// presente por nombre
darPresente("Maria");
darPresente("Ana")
darPresente("Luis")
darPresente("Carlos")
console.log(listaDeAsistencia);

let notas = ("Promedio de notas:");
console.log(notas)

// Array de estudiantes con sus calificaciones
const estudiantes = [
    { nombre: 'Ana', notas: [8, 9, 7] },
    { nombre: 'Luis', notas: [5, 6, 4] },
    { nombre: 'María', notas: [1, 10, 10] },
    { nombre: 'Carlos', notas: [3, 4, 2] }
];

// Función para calcular el promedio de un array de números
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Recorremos cada estudiante para mostrar si aprobó o no
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const promedio = calcularPromedio(estudiante.notas);

    if (promedio >= 6) {
        console.log(`${estudiante.nombre} aprobó con promedio de ${promedio.toFixed(2)}`);
    } else {
        console.log(`${estudiante.nombre} NO aprobó. Promedio: ${promedio.toFixed(2)}`);
    }
}
