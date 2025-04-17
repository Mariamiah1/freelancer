import { useState } from "react";
import { useRouter } from "next/router";

export default function EnviarProposta() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");
  const [valor, setValor] = useState("");
  const [prazo, setPrazo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entraria o envio para o backend
    console.log({
      mensagem,
      valor,
      prazo,
    });

    alert("Proposta enviada com sucesso!");
    router.push("/freelancer/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-10">
      <div className="bg-white shadow-lg rounded p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Enviar Proposta</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded"
              placeholder="Escreva uma mensagem personalizada para o cliente..."
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor Proposto (R$)</label>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded"
              placeholder="Ex: 1500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Prazo Estimado (dias)</label>
            <input
              type="number"
              value={prazo}
              onChange={(e) => setPrazo(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded"
              placeholder="Ex: 7"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 w-full"
          >
            Enviar Proposta
          </button>
        </form>
      </div>
    </div>
  );
}
