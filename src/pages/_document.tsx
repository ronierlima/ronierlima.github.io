import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className='bg-primary' data-secondary="var(--secondary)">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
