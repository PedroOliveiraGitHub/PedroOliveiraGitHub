# WhatsApp Dual

App de desktop (Electron) para correr o WhatsApp pessoal e o WhatsApp Business lado a lado no teu MacBook, cada um com a sua própria sessão.

## Como funciona

A app abre uma janela dividida em dois painéis, cada um a carregar `web.whatsapp.com` numa sessão isolada (`partition` diferente). Isto significa que podes ligar um número diferente em cada painel sem que um sobreponha a sessão do outro — como se fossem dois browsers separados, mas numa única app.

## Requisitos

- [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

## Instalação

```bash
cd whatsapp-dual
npm install
```

## Executar

```bash
npm start
```

## Primeira utilização

1. Ao abrir a app pela primeira vez, cada painel mostra um QR code do WhatsApp Web.
2. No painel esquerdo ("WhatsApp Pessoal"), no teu telemóvel pessoal: **Definições → Dispositivos ligados → Ligar dispositivo** e digitaliza o QR code desse painel.
3. No painel direito ("WhatsApp Business"), no telemóvel com a conta Business: **Definições → Dispositivos ligados → Ligar dispositivo** e digitaliza o QR code desse painel.
4. As sessões ficam guardadas — da próxima vez que abrires a app (`npm start`), ambas as contas já aparecem ligadas automaticamente.

## Criar uma app instalável (opcional)

Para gerar um `.app` que podes colocar no Dock sem precisar de correr `npm start` no terminal, podes usar o [electron-builder](https://www.electron.build/):

```bash
npm install --save-dev electron-builder
npx electron-builder --mac
```

O instalador fica na pasta `dist/`.
