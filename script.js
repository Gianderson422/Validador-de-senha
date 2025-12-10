const input = document.getElementById("senha");
    const mensagem = document.getElementById("mensagem");

    input.addEventListener("input", function () {
        const resultado = validarSenha(input.value);
        mensagem.textContent = resultado;

        if (resultado === "Senha válida") {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    });

function validarSenha(senha) {
    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
    let temCaractereEspecial = false;
    const caracteresEspeciais = "!@#$%^&*()-+";

    if (senha.length < 8) {
        return "Falta ter pelo menos 8 caracteres";
    }

    for (let i = 0; i < senha.length; i++) {
        let c = senha[i];

        if (c >= 'A' && c <= 'Z') {
            temMaiuscula = true;
        }

        if (c >= 'a' && c <= 'z') {
            temMinuscula = true;
        }

        if (c >= '0' && c <= '9') {
            temNumero = true;
        }

        if (caracteresEspeciais.includes(c)) {
            temCaractereEspecial = true;
        }
    }

    let erros = [];

    if (!temMaiuscula) erros.push("letra maiúscula");
    if (!temMinuscula) erros.push("letra minúscula");
    if (!temNumero) erros.push("número");
    if (!temCaractereEspecial) erros.push("caractere especial");

    if (erros.length === 0) {
        return "Senha válida";
    }

    return "Falta " + erros.join(" e ");
}
