import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const [birthDate, setBirthDate] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emojiAvatars = ["😄", "🤩", "😜", "🤖", "👽", "🥳", "😺", "😈", "🐱", "🐶", "🐯", "🐸", "🐵", "🐼", "🦊", "🐧", "🧙‍♂️", "🧝‍♀️", "🧛‍♂️", "🧟‍♀️", "🐉", "🦄", "🦸‍♂️", "🦹‍♀️"];

  const calculateAgeGroup = (dateString) => {
    const birth = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    if (age < 12) return "😕 Ops! Você precisa ter pelo menos 13 anos para se cadastrar. Procure um adulto para prosseguir.";
    if (age >= 13 && age <= 17) return "Entre 13 e 17 anos, você pode explorar jogos com classificação +16!";
    if (age >= 18) return "Maior de 18 anos, liberação total! Acesso garantido a todos os jogos 🎮";
    return "Idade inválida";
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

  const group = calculateAgeGroup(birthDate);
    setAgeGroup(group);

    if (group === "Idade inválida") {
      setError("Data de nascimento inválida.");
      return;
    }

    if (!selectedEmoji) {
      setError("Por favor, escolha um avatar antes de cadastrar.");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, email, password, birthDate, ageGroup: group, avatar: selectedEmoji }),
      });
      const data = await response.json();
      if (response.ok && data.jwtCookie) {
        // Extrai apenas o valor do JWT do campo jwtCookie
        const match = data.jwtCookie.match(/springboot-jwt=([^;]+)/);
        if (match) {
          document.cookie = `jwtCookie=${match[1]}; path=/;`;
        }
        setSuccess("Cadastro realizado com sucesso! Redirecionando...");
        setTimeout(() => {
          window.location.href = "/";
        }, 1200);
      } else if (response.ok) {
        setSuccess("Cadastro realizado com sucesso! Faça login.");
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        setError(data.message || "Erro ao cadastrar");
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0026] via-[#1a0033] to-[#0f0026]">
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#18132a]/80 border-4 border-[#00fff7] rounded-xl shadow-[0_0_40px_5px_#00fff7,0_0_80px_10px_#ff00ea44] w-full max-w-md p-10"
        style={{ boxShadow: '0 0 40px 5px #00fff7, 0 0 80px 10px #ff00ea44' }}
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-[#ff00ea] drop-shadow-[0_0_10px_#ff00ea] tracking-widest">
          CRIAR CONTA
        </h2>
        {error && <div className="text-pink-400 mb-4 text-center animate-pulse">{error}</div>}
        {success && <div className="text-green-400 mb-4 text-center animate-pulse">{success}</div>}
        <div className="mb-6">
          <label htmlFor="email" className="block text-[#00fff7] font-semibold mb-2 tracking-wide">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 bg-[#1a0033] border-2 border-[#00fff7] rounded-lg text-[#00fff7] placeholder-[#00fff7bb] focus:outline-none focus:ring-2 focus:ring-[#ff00ea] focus:border-[#ff00ea] transition-all shadow-[0_0_10px_#00fff7]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="username" className="block text-[#00fff7] font-semibold mb-2 tracking-wide">Nome de usuário</label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 bg-[#1a0033] border-2 border-[#00fff7] rounded-lg text-[#00fff7] placeholder-[#00fff7bb] focus:outline-none focus:ring-2 focus:ring-[#ff00ea] focus:border-[#ff00ea] transition-all shadow-[0_0_10px_#00fff7]"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="birthDate" className="block text-[#00fff7] font-semibold mb-2 tracking-wide">
            Data de Nascimento
          </label>
          <input
            id="birthDate"
            type="date"
            className="w-full px-4 py-2 bg-[#1a0033] border-2 border-[#00fff7] rounded-lg text-[#00fff7] placeholder-[#00fff7bb] focus:outline-none focus:ring-2 focus:ring-[#ff00ea] focus:border-[#ff00ea] transition-all shadow-[0_0_10px_#00fff7]"
            value={birthDate}
            // onChange={e => setBirthDate(e.target.value)}
            onChange={e => {
              const date = e.target.value;
              setBirthDate(date);
              const group = calculateAgeGroup(date);
              setAgeGroup(group);
            }}            
            required
          />
          {ageGroup && (
            <div className="text-[#00fff7] mb-4 text-center">
              <strong>Faixa Etária:<br></br> </strong>{ageGroup}
            </div>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-[#00fff7] font-semibold mb-2 tracking-wide">Senha</label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 bg-[#1a0033] border-2 border-[#00fff7] rounded-lg text-[#00fff7] placeholder-[#00fff7bb] focus:outline-none focus:ring-2 focus:ring-[#ff00ea] focus:border-[#ff00ea] transition-all shadow-[0_0_10px_#00fff7]"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        
        <div className="mb-6 text-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#1a0033] border-2 border-[#00fff7] text-[#00fff7] rounded-lg hover:border-[#ff00ea] transition-all items-center justify-center gap-2"
          >
            {selectedEmoji ? (
              <>
                <span className="text-2xl">{selectedEmoji}</span>
                <span>Alterar Avatar</span>
              </>
            ) : (
              <span>Escolha o seu Avatar (Emoji)</span>
            )}
          </button>
        </div>

        {/* <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#ff00ea] via-[#00fff7] to-[#ff00ea] text-black font-bold rounded-lg shadow-[0_0_20px_#00fff7] hover:from-[#00fff7] hover:to-[#ff00ea] hover:scale-105 transition-all duration-200 tracking-widest text-lg"
        >
          Cadastrar
        </button> */}
        <button
          type="submit"
          disabled={ageGroup.startsWith("😕") || !selectedEmoji}
          className={`w-full py-3 bg-gradient-to-r from-[#ff00ea] via-[#00fff7] to-[#ff00ea] text-black font-bold rounded-lg shadow-[0_0_20px_#00fff7] transition-all duration-200 tracking-widest text-lg
          ${ageGroup.startsWith("😕") || !selectedEmoji ? "opacity-50 cursor-not-allowed" : "hover:from-[#00fff7] hover:to-[#ff00ea] hover:scale-105"}
          `}
        >
          Cadastrar
        </button>
        <div className="mt-6 text-center">
          <span className="text-[#00fff7]">Já tem uma conta? </span>
          <a href="/signin" className="text-[#ff00ea] hover:underline font-bold">Entrar</a>
        </div>
        <div className="absolute -inset-1 rounded-xl pointer-events-none animate-pulse"
          style={{
            boxShadow: '0 0 40px 5px #00fff7, 0 0 80px 10px #ff00ea44',
            zIndex: -1
          }}
        />
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#18132a] border-4 border-[#00fff7] rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 className="text-[#ff00ea] text-xl font-bold mb-4 text-center">Escolha seu Avatar</h3>
            <div className="grid grid-cols-6 gap-4 text-3xl text-center">
              {emojiAvatars.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  className={`p-2 rounded-lg border-2 transition-all ${
                    selectedEmoji === emoji ? "border-[#ff00ea] bg-[#1a0033]" : "border-transparent"
                  }`}
                  onClick={() => {
                    setSelectedEmoji(emoji);
                    setIsModalOpen(false);
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#ff00ea] text-black font-bold rounded-lg hover:bg-[#00fff7] transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SignUp;
