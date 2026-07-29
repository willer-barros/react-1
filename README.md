# ⚡ Aplicação 1: Desafio da Aura (10 Segundos)
Uma aplicação interativa e divertida construída em React para praticar os conceitos fundamentais de estado, ciclo de vida e temporizadores no ecossistema moderno do React.

### 🎯 Objetivo do Projeto
O objetivo do usuário é acumular o máximo de pontos de Aura em um intervalo fixo de 10 segundos.

Através dessa mecânica simples, o projeto demonstra na prática como a interface do React reage a mudanças de estado e como lidar com efeitos colaterais temporizados (setInterval) sem gerar vazamentos de memória (memory leaks).

### 🧠 Conceitos do React Aprendidos
Nesta aplicação, exploramos o "coração" do React:

1. Estado Local com useState
O estado é a memória do componente. Sempre que um estado muda, o React atualiza a tela automaticamente (re-render).

aura: Armazena a pontuação acumulada.

tempoRestante: Controla a contagem regressiva (iniciando em 10s).

jogoAtivo: Booleano que indica se a partida está em andamento.

jogoFinalizado: Indica se a rodada terminou para exibir a pontuação final.

2. Ciclo de Vida e Efeitos com useEffect
O useEffect gerencia o temporizador da aplicação. Ele observa as mudanças de jogoAtivo e tempoRestante:

Disparo condicional: O intervalo só é iniciado quando o jogo está ativo e o tempo é maior que zero.

Função de Limpeza (Cleanup): Retorna uma função contendo clearInterval(intervalo). Isso garante que o temporizador anterior seja destruído antes de criar um novo, evitando que múltiplos relógios rodem ao mesmo tempo.

3. Integração com APIs do JS (setInterval)
Trabalhar com funções assíncronas do JavaScript dentro do React exige cuidados específicos. Usamos a forma de atualização funcional do estado (setTempoRestante(tempoAtual => tempoAtual - 1)) para garantir que o valor do tempo esteja sempre atualizado.

### 📁 Estrutura do Código
Plaintext
src/
├── App.jsx       # Lógica do jogo (useState, useEffect, manipuladores de evento)
├── App.css       # Estilização com Flexbox e tema dark
└── main.jsx      # Ponto de entrada do React no DOM (#root)
🛠️ Como Executar o Projeto
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/desafio-da-aura.git
```

```bash
cd desafio-da-aura
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
Abra o navegador no endereço indicado no terminal (geralmente http://localhost:5173).

### 🚀 Desafios Extras para Praticar
Quer ir além? Tente implementar estas melhorias por conta própria:

[ ] Recorde Pessoal: Guarde a maior pontuação no localStorage para que o recorde não se perca ao recarregar a página.

[ ] Dificuldade Ajustável: Adicione um seletor de tempo (5s, 10s ou 15s) usando um novo useState.

[ ] Efeitos Sonoros: Execute um som a cada clique e um alarme ao zerar o tempo.
