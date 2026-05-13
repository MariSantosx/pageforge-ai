/* 
Lógica de Programação

Algoritmo- Receita do Bolo

[x] Saber quando o botão foi clicado
 ] Pegar o texto do textarea
  [] Enviar para IA (servidor)
   [] Pegar respostas da IA
    [] Colocar na tela
     [] Código
      [] Resultado do código

      HTML- Document
      JavaScript- Script

      QuerySelector- Pega o elemento quer eu escolher
      o símbolo da classe sempre vai ser o ponto
       Value= Valor
       Fat- Coloca informações e o servidor vai te passar outras info
        Ia Grog
        Api keys- Criar uma chave(sempre copiar e e colar)
        Await= Esperar
        headers/ head- configurações
        Json- Javascripts object notation- Formato da internet
        String= Texto
        Ia precisa de 3 coisas para gerar o que queremos 
        1) Qual o modeloIa que vamos usar
        2) System- Quem a Ia deve ser
        3) User- Mensagem do usuário= o que o usuário quer
        role= papel

        Um bom profissional precisa saber dar as instruções certas para IA
      Metodo Post?
      Servidor- Espera receber texto
      Ele responde em Json
      /N é um simbolo de pular linha
        */

// Clicou no botão Gerar- Chama essa função
// console.log()- Serve para ver na tela
// funções- código que eu escolho quando ele executa
// Quando eu clico em um botão, quando algo acontece ou quando eu quiser
// Função é uma ação(como se fosse um verbo)
// Tudo que acontece dentro da pagina 

let chave = "SUA_CHAVE_AQUI"
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo() {

    let textarea = document.querySelector(".texto-pagina").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chave
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": "Crie um site completo e profissional para: " + textarea
                },
                {
                    "role": "system",
                    "content": "Você é um designer web premiado e Programador.\n\nCrie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.\n\nRegras de resposta:\n- Responda SOMENTE com HTML e CSS puros\n- Não use crases, markdown ou explicações\n- Não use tags <img>\n\nIdentidade visual (capriche e surpreenda):\n- Invente uma paleta de cores única que combine com a essência do negócio\n- Escolha uma Google Font marcante via @import\n- Use emojis grandes no lugar de imagens\n- Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte\n\nEstrutura da página:\n- Header com nome do negócio e menu\n- Hero impactante com título, subtítulo e botão CTA\n- Seção de diferenciais com emojis\n- Depoimento de cliente\n- Footer com contato\n\nTodo o conteúdo em português, criativo e específico para o negócio."
                }
            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    let espacoCodigo = document.querySelector(".bloco-código")
    let espacoSite = document.querySelector(".bloco-site")

    espacoCodigo.textContent = resultado
    espacoSite.srcdoc = resultado
}

// Headers que no html é head são configurações
// Body- corpo da requisição 



