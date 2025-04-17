import { useState } from "react";

export default function CriarProjeto() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Design");
  const [orcamento, setOrcamento] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("fixo");
  const [prazo, setPrazo] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleCriar = () => {
    const dadosProjeto = {
      titulo,
      descricao,
      categoria,
      orcamento,
      tipoPagamento,
      prazo,
      arquivo,
    };

    console.log("Projeto criado:", dadosProjeto);
    // Aqui entra a integração com o backend futuramente
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Criar novo projeto</h1>

        <input
          type="text"
          placeholder="Título do projeto"
          className="w-full mb-4 p-2 border rounded"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Descrição detalhada"
          className="w-full mb-4 p-2 border rounded h-32"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 border rounded"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Design">Design</option>
          <option value="Programação">Programação</option>
          <option value="Marketing">Marketing</option>
          <option value="Tradução">Tradução</option>
        </select>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Tipo de pagamento:</label>
          <select
            className="w-full p-2 border rounded"
            value={tipoPagamento}
            onChange={(e) => setTipoPagamento(e.target.value)}
          >
            <option value="fixo">Valor fixo</option>
            <option value="hora">Por hora</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Orçamento (R$)"
          className="w-full mb-4 p-2 border rounded"
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
        />

        <input
          type="date"
          className="w-full mb-4 p-2 border rounded"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
        />

        <input
          type="file"
          className="w-full mb-6"
          onChange={(e) => setArquivo(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleCriar}
          className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700"
        >
          Publicar Projeto
        </button>
      </div>
    </div>
  );
}
