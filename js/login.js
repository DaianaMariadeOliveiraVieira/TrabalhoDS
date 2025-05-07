$("#formulario").validate({
    rules: {
        login: { required: true },
        senha: { required: true }
    },
    messages: {
        login: { required: "Campo obrigatório" },
        senha: { required: "Campo obrigatório" }
    }
}); 

function carregar(){
    localStorage.clear();
}

async function autenticar() {

    if ($("#formulario").valid()) {

        let login = $("#login").val();
        let senha = $("#senha").val();

        try {
            let resposta = await fetch(`https://api-odinline.odiloncorrea.com/usuario/${login}/${senha}/autenticar`);
            let usuario = await resposta.json();

            if (usuario.id > 0) {
                localStorage.setItem("usuarioAutenticado", JSON.stringify(usuario));
                window.location.href = "menu.html"; 
            } else {
                alert("Usuário ou senha Inválidos.");
            }
        } catch (error) {
            alert("Erro ao tentar Autenticar.");
            console.error(error);
        }
    }
}