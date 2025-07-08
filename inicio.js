
let nombre = prompt("cual es tu nombre");
let bienvenida = ("Bienvenido " + nombre);
console.log(bienvenida);

let alerta = alert("Haga click AQUI para ver las calificaciones")
console.log(alerta)



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
