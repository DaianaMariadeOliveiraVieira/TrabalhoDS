let usuario = JSON.parse(localStorage.getItem("usuarioAutenticado"));

if (usuario) {
    document.getElementById("boasVindas").textContent = `Olá, ${usuario.nome}`;
} else {
    window.location.href = "index.html"; 
}

function alerta() {
    window.location.href = "alerta.html";
}

function compra() {
    window.location.href = "compra.html";
}
 