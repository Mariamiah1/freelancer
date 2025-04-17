import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Bem-vindo à VALENTEFLIX</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Conectando freelancers talentosos a clientes que precisam de resultados. Ganhe comissões, ofereça serviços de qualidade e gerencie tudo em um só lugar.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
            Entrar
          </button>
        </Link>
        <Link href="/cadastro">
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700">
            Criar Conta
          </button>
        </Link>
      </div>
    </div>
  );
}
