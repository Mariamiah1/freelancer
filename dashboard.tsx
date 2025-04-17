import { useState } from "react";

export default function DashboardCliente() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "Criação de site institucional",
      status: "Aguardando propostas",
    },
    {
      id: 2,
      titulo: "Logo para empresa de moda",
      status: "Em andamento",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Bem-vindo à Valenteflix, Cliente!</h1>
      </header>

      <div className="mb-6">
        <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
          Criar novo projeto
        </button>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Seus Projetos</h2>
        <div className="space-y-4">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg font-bold">{projeto.titulo}</h3>
              <p className="text-sm text-gray-600">Status: {projeto.status}</p>
              <button className="mt-2 text-sm text-purple-600 hover:underline">
                Ver propostas
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
