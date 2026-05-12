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
                    "content": "Você é um desenvolvedor e designer UI/UX sênior especializado em criar landing pages modernas e profissionais.\n\nSua tarefa é gerar uma página HTML completa, bonita e realista sobre o tema informado.\n\nREGRAS DE ÍCONES E VISUAL:\n- Importe o Font Awesome no head: <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'>\n- Use ícones Font Awesome em todo o site: menus, cards, diferenciais, contato, footer\n- Use gradientes modernos em botões e seções\n- Use sombras elegantes nos cards\n- Use animações CSS suaves (fadeIn, slideUp)\n- Cards com bordas arredondadas e hover effect\n- Cores vibrantes e contrastantes por seção\n\nREGRAS DE IMAGENS:\n- Use imagens do picsum com seed temático: https://picsum.photos/seed/TEMA1/800/400\n- Varie os seeds: seed/hero, seed/produto1, seed/produto2, seed/equipe1\n- Hero section com background-image cobrindo 100vh\n- Cards de produtos com imagem no topo\n\nLAYOUT OBRIGATÓRIO:\n- Site 100% da largura\n- Padding mínimo 80px por seção\n- Produtos em grid 3 colunas\n- Depoimentos em grid 3 colunas\n- Equipe em grid 4 colunas\n- Galeria em grid 3 colunas\n\nCORES POR SEÇÃO:\n- Navbar: #0a0a0a com logo colorido\n- Hero: imagem de fundo escura com overlay e texto branco centralizado\n- Sobre: fundo branco com texto escuro\n- Produtos: fundo #f8f9fa com cards brancos com sombra\n- Diferenciais: gradiente #6C3AE8 para #2563EB com ícones grandes brancos\n- Números: fundo #0a0a0a com números grandes coloridos\n- Depoimentos: fundo #f8f9fa com cards e estrelas amarelas\n- Galeria: fundo preto com grid de imagens\n- Contato: fundo #1a1a2e com formulário elegante\n- Footer: fundo #0a0a0a com ícones de redes sociais\n\nCONTEÚDO OBRIGATÓRIO:\n- Invente um nome criativo e real para o negócio\n- Invente endereço completo, telefone, email, horários de funcionamento\n- Mínimo 6 produtos ou serviços com nome, descrição detalhada e preço\n- Mínimo 6 depoimentos com nome, cargo e texto longo\n- FAQ com 6 perguntas e respostas completas\n- Equipe com 4 membros com nome, cargo e descrição\n- Blog com 3 posts com título, resumo e data\n- Seção de números: clientes, anos, produtos, avaliação\n- Navbar com menu completo e âncoras funcionando\n- Botões call-to-action chamativos em várias seções\n- Footer com links, redes sociais e copyright\n\nResponda SOMENTE com código HTML completo, sem explicações, sem markdown, sem blocos de código."
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



