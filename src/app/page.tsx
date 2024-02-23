import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center p-24">
      <h1 className="text-xl">Boilerplate Projeto NextJS</h1>
      <div className="text-base">
        Projeto base para outros projetos usando ReactJS, NextJS, PNPM, App
        Router, Eslint, Prettier, Husky, Lint Staged e Jest
      </div>
      <Link href="/example">Página de Exemplo</Link>
    </main>
  )
}
