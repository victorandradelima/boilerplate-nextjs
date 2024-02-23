import Button from '@/components/atoms/Button'
import Link from 'next/link'

export default function Example() {
  return (
    <main className="text-center p-24">
      <div className="text-base">Esta é apenas uma página de exemplo</div>
      <Link href="/">Voltar para Home</Link>
      <div className="flex justify-center">
        Este botão é um componente que possui testes usando Snapshots. Saiba
        mais sobre teste com snapshots, clicando aqui:
        <Link href="https://jestjs.io/docs/snapshot-testing" />
        <Button className="block ">Não clique aqui</Button>
      </div>
    </main>
  )
}
