import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  // 1. Estados da aplicação
  const [aura, setAura] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(10);
  const [jogoAtivo, setJogoAtivo] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  // 2. useEffect para controlar o temporizador de 10 segundos
  useEffect(() => {
    let intervalo = null;

    if (jogoAtivo && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((tempoAtual) => tempoAtual - 1);
      }, 1000);
    } else if (tempoRestante === 0 && jogoAtivo) {
      setJogoAtivo(false);
      setJogoFinalizado(true);
    }

    // Função de limpeza (Cleanup): evita múltiplos intervalos rodando juntos
    return () => clearInterval(intervalo);
  }, [jogoAtivo, tempoRestante]);

  // 3. Funções para controlar as ações do usuário
  const iniciarJogo = () => {
    setAura(0);
    setTempoRestante(10);
    setJogoFinalizado(false);
    setJogoAtivo(true);
  };

  const adicionarAura = (pontos) => {
    if (jogoAtivo) {
      setAura((auraAtual) => auraAtual + pontos);
    }
  };

  return (
    <div className="game-container">
      <h1>⚡ Desafio da Aura</h1>
      <p className="subtitle">
        Acumule o máximo de Aura que conseguir em 10 segundos!
      </p>

      <div className="timer-box">
        ⏱️ {tempoRestante}s
      </div>

      <div className="score-board">
        <span>Sua Aura Atual</span>
        <div className="score-value">+{aura}</div>
      </div>

      <div className="buttons-grid">
        <button
          className="btn btn-aura"
          onClick={() => adicionarAura(100)}
          disabled={!jogoAtivo}
        >
          ✨ +100 Aura
        </button>

        <button
          className="btn btn-ego"
          onClick={() => adicionarAura(250)}
          disabled={!jogoAtivo}
        >
          🔥 +250 Aura + Ego
        </button>
      </div>

      <button className="btn btn-start" onClick={iniciarJogo}>
        {jogoAtivo ? "Jogando..." : jogoFinalizado ? "Jogar Novamente" : "Iniciar Desafio"}
      </button>

      {jogoFinalizado && (
        <p className="subtitle" style={{ marginTop: "1rem", color: "#38bdf8" }}>
          🎉 Fim de jogo! Você terminou com <strong>{aura}</strong> de Aura!
        </p>
      )}
    </div>
  );
}

export default App;