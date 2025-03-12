const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Debe ingresar un nombre.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpiar el input
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    ulListaAmigos.innerHTML = ""; // Limpiar antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar amigo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        ulListaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}
// Muestra cuántos amigos faltan para el sorteo
function mostrarFaltantes() {
    const mensaje = document.getElementById('mensaje-faltantes');
    const faltan = 3 - listaAmigos.length;
    mensaje.textContent = faltan > 0 ? `Faltan ${faltan} amigos para sortear.` : '';
}
// Función para sortear un amigo al azar con validación
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 personas para realizar el sorteo.");
        return;
    }

    // Elegir un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}

// NUEVA FUNCIÓN PARA LIMPIAR LISTA Y RESULTADO
function limpiarLista() {
    listaAmigos = [];  // Vaciar la lista
    ulListaAmigos.innerHTML = ""; // Limpiar la lista en pantalla
    resultado.innerHTML = ""; // Borrar el resultado del sorteo
}

// Asociar la función al botón "Limpiar"
document.getElementById("limpiarLista").addEventListener("click", limpiarLista);
