import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import Link from 'next/link'

export default function Example() {
  return (
    <main className="text-center p-24">
      <h1 className="text-base">Esta é apenas uma página de exemplo</h1>
      <Link href="/">Voltar para Home</Link>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-4">
          Este botão é um componente que possui testes usando Snapshots. Saiba
          mais sobre teste com snapshots, clicando aqui:{' '}
          <Link href="https://jestjs.io/docs/snapshot-testing">AQUI</Link>
        </p>
        <Button variant="destructive" className="block mt-[20px] mb-4 max-w-44">
          Não clique aqui
        </Button>
        <Input placeholder="Test" className="max-w-44" />

        <div className="mt-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  )
}
