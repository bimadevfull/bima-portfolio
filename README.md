#  Bima Dev — Portfólio (React + Node.js)

> Portfólio de **Abimael de Menezes Pedro** — Engenharia de Software · UI/UX · Customer Experience (CX).
> Projeto de código aberto: fique à vontade para estudar, fazer fork e usar como base para o seu.

[![Website](https://img.shields.io/badge/Website-abimaeldev.eng.br-00b8d4)](https://www.abimaeldev.eng.br/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-bimadevfull-0A66C2)](https://www.linkedin.com/in/bimadevfull/)
[![GitHub](https://img.shields.io/badge/GitHub-bimadevfull-181717)](https://github.com/bimadevfull)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![License](https://img.shields.io/badge/licença-MIT-green)

## ✨ O que tem aqui

- **Front-end em React 19 + Vite** — página única, componentizada, com o mesmo visual “cyber” do site original.
- **API em Node.js + Express 5** — recebe o formulário de contato, valida os dados, envia por e-mail (SMTP/Nodemailer) ou salva em JSON quando não há SMTP.
- **Conteúdo separado do código** — todos os textos, projetos, habilidades e links estão em [`client/src/data/portfolio.js`](client/src/data/portfolio.js).
- Animações ao rolar (IntersectionObserver), efeito de digitação, contadores, filtro de projetos, menu mobile acessível (ESC, clique fora), fundo com partículas e widget **VLibras**.
- Segurança na API: `helmet`, CORS configurável, *rate limit* (5 mensagens / 15 min por IP) e campo *honeypot* contra spam.

## 🗂️ Estrutura

```
bima-portfolio/
├── client/                 # React + Vite
│   ├── public/             # imagens, currículo e projetos demo (HTML estático)
│   │   ├── img/
│   │   └── projetos/
│   ├── src/
│   │   ├── components/     # Header, Hero, About, Services, Projects, Contact...
│   │   ├── hooks/          # useReveal, useTyping, useScrollSpy
│   │   ├── data/portfolio.js   # ← edite o conteúdo aqui
│   │   └── styles/         # styles.css (original) + extras.css
│   └── vite.config.js      # proxy /api → localhost:3001
├── server/                 # Node.js + Express
│   ├── src/index.js        # app, segurança, serve o build do React em produção
│   ├── src/routes/contact.js
│   └── .env.example
└── package.json            # workspaces + scripts (dev / build / start)
```

## ▶️ Rodando localmente

Pré-requisito: **Node.js 22.9+** ([download](https://nodejs.org/)).

```bash
git clone https://github.com/bimadevfull/bima-portfolio.git
cd bima-portfolio
npm install                # instala front e back de uma vez (workspaces)
cp server/.env.example server/.env   # opcional: configure o SMTP
npm run dev
```

- Site: http://localhost:5173
- API: http://localhost:3001/api/health

### Produção (um único servidor)

```bash
npm run build   # gera client/dist
npm start       # Express serve o site + API em http://localhost:3001
```

## 📬 API

| Método | Rota           | Descrição                                   |
| ------ | -------------- | ------------------------------------------- |
| GET    | `/api/health`  | Status do servidor                          |
| POST   | `/api/contact` | `{ name, email, subject?, message }` → envia mensagem |

Sem `SMTP_*` no `.env`, as mensagens ficam em `server/data/messages.json` (ignorado pelo Git).
Para Gmail, crie uma **senha de app** e use-a em `SMTP_PASS`.

## ☁️ Deploy

**Opção 1 — tudo junto (Render / Railway):**
Build command `npm install && npm run build` · Start command `npm start` · configure as variáveis do `.env` no painel.

**Opção 2 — separado:**
- Front na **Vercel**: diretório raiz `client`, build `npm run build`, saída `dist`, variável `VITE_API_URL=https://sua-api...`.
- API no **Render/Railway**: diretório raiz `server`, start `npm start`, `CORS_ORIGIN=https://seu-site...`.

## 🛠️ Personalizando

1. Edite `client/src/data/portfolio.js` (nome, links, projetos, habilidades...).
2. Troque as imagens em `client/public/img` e o currículo em `client/public/`.
3. Cores e fontes ficam nas variáveis `:root` de `client/src/styles/styles.css`.

## 📄 Licença

Código sob licença **MIT** — veja [LICENSE](LICENSE).
Fotos, logotipos, currículo e textos pessoais pertencem ao autor; se usar como base, substitua pelos seus.

---

<p align="center">Desenvolvido com 💙 por <a href="https://www.abimaeldev.eng.br/">Abimael Dev</a></p>
