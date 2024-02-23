import { ComponentProps } from 'react'

export type TButtonProps = ComponentProps<'button'>

// Este componente foi utilizado para exemplificar o uso de Snapshots para testes
// verifique o arquivo de testes para entender mais sobre

export default function Button({ ...props }: TButtonProps) {
  return <button {...props} />
}
