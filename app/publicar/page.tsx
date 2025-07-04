'use client';
export default function Publicar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Publicar Pedido</h1>
      <p className="text-gray-600 mb-4">Descreva o que você precisa e envie uma imagem do problema:</p>
      <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Ex: Preciso de um eletricista para instalar um ventilador"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg">
          Enviar Pedido
        </button>
      </form>
    </div>
  );
}
