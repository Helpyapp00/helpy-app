'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#f3f4f6] p-4">
      <Image
        src="/Logo-Helpy.png"
        alt="Logo Helpy"
        width={200}
        height={200}
        className="mb-4"
      />
      <h1 className="text-4xl font-bold text-center text-[#1e1e1e]">Peça o que precisa. Encontre quem resolve.</h1>
      <p className="mt-4 text-lg text-center text-gray-600 max-w-xl">
        A plataforma onde você publica o que está precisando e pessoas prontas para ajudar te encontram.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/publicar">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
            Publicar Pedido com Foto + IA 🤖
          </button>
        </Link>
        <Link href="/perfil">
          <button className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium">
            Criar Perfil Profissional
          </button>
        </Link>
      </div>
    </main>
  );
}
