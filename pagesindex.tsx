import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-100 text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
        Bem-vindo à <span className="text-purple-600">VALENTEFLIX</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Conectando os melhores freelancers com empresas visionárias.
        Crie projetos, envie propostas e ganhe dinheiro com segurança e confiança.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/login">
          <span className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 cursor-pointer">
            Entrar
          </span>
        </Link>

        <Link href="/cadastro">
          <span className="bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded hover:bg-purple-100 cursor-pointer">
            Criar Conta
          </span>
        </Link>
      </div>
    </div>
  );
}
