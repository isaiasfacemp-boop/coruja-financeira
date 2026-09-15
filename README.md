# 🦉 Coruja Financeira

App de finanças pessoais em HTML/CSS/JS puro (um arquivo só, sem build, sem dependências de servidor). Guarda os dados no navegador (localStorage).

## Funcionalidades

- Entradas de renda por fonte, com empresa cadastrada e tipo (Salário, Bonificação, etc.)
- Gastos fixos, variáveis e investimentos, cada um com data e conta de pagamento
- Contas bancárias, carteira e cartões de crédito, com saldo e fatura calculados automaticamente
- Reconhecimento visual de bancos/cartões comuns (Nubank, Itaú, Banco do Brasil, etc.) pela cor
- Fatura de cartão por ciclo de fechamento/vencimento, com opção de marcar como paga
- Transferência entre contas
- Dívida do mês que fecha no negativo passa automaticamente pro mês seguinte
- Metas de economia com barra de progresso
- Relatório mensal para baixar em PDF (via impressão do navegador), com gráficos, projeção de investimento em 12 meses e destaque dos gastos variáveis que mais pesam

## Como rodar

É um único arquivo (`index.html`). Basta abrir no navegador, ou publicar em qualquer hospedagem estática (Netlify, GitHub Pages, Vercel...).

## Publicar no GitHub Pages

Depois de subir este repositório, em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`. O site fica em `https://SEU-USUARIO.github.io/coruja-financeira/`.
