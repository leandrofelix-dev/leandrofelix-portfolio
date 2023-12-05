import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/leandrofelix.dev.svg"
          alt="Leandro Felix Logo"
          width={240}
          height={37}
          priority
        />
      </div>

      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300  dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Em breve 🚨</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Este site estará disponível em breve. Agradeço pela sua paciência.</p>

        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Para contatos, acesse o meu agregador de links pelo link clicando no botão abaixo 👇🏾:
        </p>
      </a>
      <a
      href="https://abre.ai/links-dev"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300  dark:bg-neutral-800/30 hover:dark:bg-neutral-800"
        target="_blank"
        rel="noopener noreferrer"
      >
      Vamos conversar? ☕️
      </a>
    </main>
  );
}
