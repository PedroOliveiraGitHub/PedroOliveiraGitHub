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

## Criar a app instalável (.app / .dmg)

Para gerares um "WhatsApp Dual.app" que corres a partir do Dock ou do Launchpad, sem precisares do terminal depois:

```bash
npm install
npm run dist
```

Isto tem de ser executado **no teu Mac** (não funciona a partir de outro sistema operativo). No fim, a pasta `dist/` fica com um ficheiro `.dmg` — abre-o e arrasta o "WhatsApp Dual" para a pasta `Aplicações`. A partir daí a app aparece no Launchpad como qualquer outra, e podes fixá-la no Dock.

Nota: como a app não está assinada com um certificado de developer da Apple, da primeira vez que a abrires o macOS pode bloquear com um aviso ("não é possível abrir porque é de um developer não identificado"). Para autorizar: clique direito no ícone → **Abrir** → **Abrir** (só é preciso da primeira vez).
