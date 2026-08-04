# WhatsApp Business (Espaço do Pé)

App de desktop (Electron) só com o WhatsApp Business, para quem só precisa de uma conta e não quer a versão dupla (`whatsapp-dual`).

## Requisitos

- [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

## Instalação

```bash
cd whatsapp-business
npm install
```

## Executar

```bash
npm start
```

## Primeira utilização

1. Ao abrir a app pela primeira vez aparece um QR code do WhatsApp Web.
2. No telemóvel com a conta Business (Espaço do Pé): **Definições → Dispositivos ligados → Ligar dispositivo** e digitaliza o QR code.
3. A sessão fica guardada — da próxima vez que abrires a app, já aparece ligada automaticamente.

Nota: esta é uma app independente da `whatsapp-dual`, por isso tem a sua própria sessão. Se já ligaste o WhatsApp Business dentro da `whatsapp-dual`, vais ter de ligar de novo aqui (contam como "dispositivos ligados" separados no teu telemóvel).

## Criar a app instalável (.app / .dmg)

```bash
npm install
npm run dist
```

Tem de ser executado no teu Mac. No fim, a pasta `dist/` fica com um `.dmg` — abre-o e arrasta "WhatsApp Business" para a pasta `Aplicações`.

Na primeira abertura o macOS pode avisar que é de um "developer não identificado" (a app não está assinada). Para autorizar: clique direito no ícone → **Abrir** → **Abrir** (só é preciso da primeira vez).
