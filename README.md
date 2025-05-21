# ⚡ Voltzx API - Backend

Este é o backend do sistema Voltzx, desenvolvido com **NestJS**, **Prisma** e **PostgreSQL**, responsável por gerenciar autenticação, usuários, projetos, investimentos, entre outros recursos.

---

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**
- **[NestJS](https://nestjs.com/)**
- **[Prisma ORM](https://www.prisma.io/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[JWT](https://jwt.io/)** – autenticação
- **TypeScript**

---

##  Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

---

##  Instalação

```bash
# Clone o repositório
git clone https://github.com/HenriqueFerr/Voltzx_PortoDigital

# Acesse o diretório
cd Voltzx_PortoDigital

# Instale as dependências
npm install

## Configuração
Crie um arquivo .env na raiz com as seguintes variáveis:


DATABASE_URL="postgresql://usuario:senha@localhost:5432/voltzxdb"
JWT_SECRET="sua_chave_jwt_segura"

## Prisma
Gerar o Prisma Client:
npx prisma generate

Rodar as migrações (se necessário):
npx prisma migrate dev

Rodar a aplicação
npm run start:dev

O servidor iniciará em:
http://localhost:3000

## Estrutura do Projeto

src/
├── auth/               # Módulo de autenticação
├── usuarios/           # CRUD de usuários
├── investments/        # Investimentos
├── prisma/             # Configuração do Prisma
├── lands/              # Terrenos
├── projects/           # Projetos solares
├── projectProposal/    # Propostas para projetos
└── main.ts             # Arquivo de entrada principal

## Contribuindo

Faça um fork
Crie uma branch (git checkout -b feature/nome)
Commit suas alterações (git commit -m 'feat: algo novo')
Push para sua branch (git push origin feature/nome)

Abra um Pull Request 