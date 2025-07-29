// Alumnos
const alumnosPorGrado = [
    {
        nombre: "javier mendez",
        notas: [8.5, 9.0, 7.5, 10]
    },
    {
        nombre: "lucia perez",
        notas: [9.5, 8.0, 9.0, 9.5]
    },
    {
        nombre: "carlos ramirez",
        notas: [6.0, 7.0, 8.0, 7.0]
    },
    {
        nombre: "jorge ramirez",
        notas: [6.0, 7.5, 8.0, 7.0]
    },
    {
        nombre: "mariana gonzales",
        notas: [3.0, 7.5, 8.0, 7.0]
    },
];

// desde localStorage
function obtenerAlumnos() {
    const datos = localStorage.getItem("alumnosPorGrado");
    return datos ? JSON.parse(datos) : alumnosPorGrado;
}

//guardar en localStorage
function guardarAlumnos(alumnos) {
    localStorage.setItem("alumnosPorGrado", JSON.stringify(alumnos));
}

//buscador alumnos
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.getElementById("nombreAlumno");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombreBuscado = input.value.trim().toLowerCase();
        const alumnos = obtenerAlumnos();

        const alumno = alumnos.find(a => a.nombre.toLowerCase() === nombreBuscado);

        if (alumno) {
            const promedio = (
                alumno.notas.reduce((acc, nota) => acc + nota, 0) / alumno.notas.length
            ).toFixed(1);

            resultadoDiv.innerHTML = `
                <h3>${alumno.nombre}</h3>
                <ul>
                    ${alumno.notas.map(n => `<li>${n}</li>`).join('')}
                </ul>
                <strong>Promedio: ${promedio}</strong>
            `;
        } else {
            resultadoDiv.innerHTML = `<p style="color:red;">Alumno no encontrado.</p>`;
        }
    });

    btnEliminar.addEventListener('click', () => {
        resultado.innerHTML = '';
        inputNombre.value = '';
    });
});

// Boton Modo Oscuro
const btnModoOscuro = document.getElementById("btnModoOscuro");
const body = document.body;

btnModoOscuro.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    } else {
    localStorage.setItem("tema", "light");
    }
});

const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        body.classList.add("dark-mode");
    } else {
    body.classList.remove("dark-mode");
}
