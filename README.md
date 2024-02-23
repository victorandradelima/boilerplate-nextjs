# boilerplate-nextjs

Um Boilerplate para projetos front-end que utiliza: Typescript, ReactJS, NextJS, Tailwind CSS, Eslint, Prettier, Lint Staged, Jest, Testing Library e Hooks

## Node

Este boilerplate foi desenvolvido usando o Node na versão 20.11.1. Alguns comandos e configurações podem funcionar apenas com o Node na versão 20 ou superior.

## PNPM

Este projeto propõe usar o PNPM como gerenciador de pacotes, não tem problema se quiser usar qualquer outro, apenas se atente que deve excluir o arquivo `.lock` do PNPM antes de migrar de gerenciador.

Se você não tiver o PNPM instalado, use o comando

```bash
npm install -g pnpm
```

Ou use o corepack

```bash
corepack use pnpm@latest
```

Mais informações: https://pnpm.io/

## Next JS

Este projeto foi inicializado com o comando `create-next-app`

Versão do Next neste boilerplate: `next@14.1.0`

Use o comando `pnpm install` para instalar todas as dependências.

O comando para rodar em ambiente de desenvolvimento é `pnpm dev`

Ele irá levantar um servidor de desenvolvimento no localhost: [http://localhost:3000](http://localhost:3000)

Você também conta com o [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para gerenciar as fontes do seu projeto.

Documentação Next.JS: [Next.js Documentation](https://nextjs.org/docs)

Tutorial interativo para Next.JS: [Learn Next.js](https://nextjs.org/learn)

## App Router

Foi configurado para utilizar o sistema de App Router do Next JS que permite a criação de um ambiente de roteamento organizado por pastas e por métodos que utilizam os server components do React.

Saiba mais sobre o App Router: [App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)

Saiba mais sobre server components: [Server components](https://nextjs.org/docs/getting-started/react-essentials#server-components)

Assim, as páginas da aplicação estarão dentro da pasta `app`

## EditorConfig

Procure utilizar as formatações configuradas no arquivo `.editorconfig`, e evite mudar sem comunicar todos os responsáveis pelo projeto.

[Site Editor Config e Extensão VSCode](https://editorconfig.org/)

## ESLint

Este projeto utiliza o ESLint para auxílio em buscas de erros no código.

Se você estiver usando o VSCode, sugiro instalar a extensão do ESLint para visualizar os erros em tempo de execução.

[Extensão ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Para verificar se existem erros em todos os arquivos da pasta src, utilize o comando `pnpm lint`

As configurações e preferências do ESLint são customizáveis no arquivo `.eslintrc.json`

## Prettier

Neste projeto está configurado o Prettier como formatador e código

Se você estiver usando o VS Code, sugiro instalar a extensão do Prettier para visualizar os erros em tempo de execução.

[Extensão Prettier para VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

As configurações e preferências do Prettier são customizáveis no arquivo `.prettierrc`

## VSCode settings

Esta opção é válida apenas para usuários do editor VSCode

Na pasta .vscode, temos o arquivo de configuração com algumas opções personalizadas, estes valores são os ideias para usar o ESLint e o Prettier juntos.

## Husky e Lint Staged

Foi utilizado o pacote `husky` e `lint-staged` para auxiliar no processo de verificação de erros de código, formatação e testes.

Neste boilerplate está configurado um comando de verificação de lint e deverificação de arquivos de teste.

## Jest e Testing Library

Este boilerplate foi configurado para usar as ferramentas `jest` e `testing-library` para desenvolver testes unitários e de integração.

Na rota `src/app/jest` você terá exemplo de implementação de testes unitários

Para rodar teste foram configurados 3 comandos:

`pnpm test`: Roda uma varredura nos arquivos de teste, verificando se todos os testes estão passando, também é usado no pré-commit do lint-staged

`pnpm test:watch`: Mantém um monitoramento nas alterações do arquivos, e avisa quando algum teste for quebrado.

`pnpm test:ci`: Roda uma teste de coverage, verificando todos os arquivos de teste e arquivos testáveis estão realmente com teste corretos

## ShadSN/IU

Foi configurado o ShadCN/UI para ajudar o processo de criação de componentes. Esta é uma biblioteca que permite adicionar em nosso proprio
código, uma versão finalizada do componente escolhido.

Saiba mais sobre o ShadCN/IU clicando [AQUI](https://ui.shadcn.com/)
