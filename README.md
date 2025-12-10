Validador de Senhas

Este projeto é um validador de senhas desenvolvido em HTML, CSS e JavaScript. Ele permite que o usuário teste senhas e verifique se atendem a critérios mínimos de segurança exigidos por boas práticas de proteção de dados.

O validador verifica automaticamente se a senha contém:

Pelo menos 8 caracteres

Pelo menos 1 letra maiúscula (A-Z)

Pelo menos 1 letra minúscula (a-z)

Pelo menos 1 número (0-9)

Pelo menos 1 caractere especial
(!, @, #, $, %, ^, &, *, (, ), -, +)

Tecnologias utilizadas

HTML5

CSS3

JavaScript

Como usar

Digite a senha no campo indicado.

A função JavaScript fará a validação analisando caractere por caractere.

O sistema exibirá uma mensagem informando:

"Senha válida", caso todos os requisitos sejam atendidos

Ou quais critérios estão faltando

Estrutura do projeto
validador-de-senhas
│── index.html
│── style.css
└── script.js

Lógica de funcionamento

O script realiza as seguintes verificações:

Verifica o tamanho da senha

Analisa letra por letra

Identifica letras maiúsculas, minúsculas, números e caracteres especiais

Monta uma lista com os requisitos que não foram atendidos

Exibe a mensagem final ao usuário

Como executar

Abra o arquivo index.html diretamente no navegador.
Nenhuma instalação ou servidor é necessário.

Possíveis melhorias futuras

Exibir nível de força da senha (fraca, média, forte)

Destacar requisitos atendidos em tempo real

Melhorar responsividade para telas menores

Criar um tema claro e escuro
