// pages/cadastro.tsx
import { useState } from "react";

export default function CadastroPage() {
  const [tipo, setTipo] = useState("cliente");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    // Aqui você chamaria sua API
    console.log("Cadastro:", { tipo, nome, email, senha });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Cadastro - Valenteflix</h1>
        <select
          className="w-full mb-4 p-2 border rounded"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="cliente">Sou Cliente</option>
          <option value="freelancer">Sou Freelancer</option>
        </select>
        <input
          type="text"
          placeholder="Nome"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          onClick={handleCadastro}
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
