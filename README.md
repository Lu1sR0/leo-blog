<div align="center">

# Diário Cinéfilo

Blog de críticas e artigos sobre cinema, com painel de conteúdo próprio para o autor publicar sem mexer no código.

[![Ver site](https://img.shields.io/badge/VER_SITE-0D0D0D?style=for-the-badge&logo=vercel&logoColor=FF003C)](https://diariocinefilo.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_14-0D0D0D?style=for-the-badge&logo=next.js&logoColor=FF003C)
![React](https://img.shields.io/badge/React-0D0D0D?style=for-the-badge&logo=react&logoColor=FF003C)
![TypeScript](https://img.shields.io/badge/TypeScript-0D0D0D?style=for-the-badge&logo=typescript&logoColor=FF003C)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0D0D0D?style=for-the-badge&logo=tailwindcss&logoColor=FF003C)
![Sanity](https://img.shields.io/badge/Sanity-0D0D0D?style=for-the-badge&logo=sanity&logoColor=FF003C)

</div>

## Sobre

O **Diário Cinéfilo** é um blog feito para um amigo de longa data, o Leonardo, que queria um espaço para publicar críticas e artigos sobre cinema. O desafio era dar autonomia a ele: todo o conteúdo é gerenciado pelo **Sanity Studio**, embutido no próprio site, e as páginas são geradas pelo **Next.js** com foco em desempenho e SEO.

![Captura de tela do Diário Cinéfilo](https://i.ibb.co/fqRDn6N/image.png)
![Captura de tela do Diário Cinéfilo](https://i.ibb.co/BPXkx67/imagem-2024-08-13-170619761.png)

## Funcionalidades

- **Lista de posts** na página inicial com título, data, resumo e tags.
- **Página de post** com texto rico (Portable Text) e imagens otimizadas servidas pelo CDN do Sanity.
- **Categorias por tags** (Críticas, Artigos, Meus filmes…) com contagem de posts em cada uma.
- **Página "Sobre mim"** do autor, com links para Instagram e Letterboxd.
- **Tema claro e escuro** com botão flutuante de alternância.
- **Menu mobile animado** com Framer Motion.
- **Sanity Studio em `/studio`**: o autor cria posts com título, slug, data, resumo, corpo com imagens e tags.
- **Revalidação a cada 60 s** (ISR): posts novos aparecem no site sem precisar de novo deploy.
- **SEO**: metadados, palavras-chave, Open Graph e verificação no Google Search Console.
- **Vercel Analytics** para acompanhar as visitas.

## Tecnologias

- [Next.js 14](https://nextjs.org/) (App Router, route groups para site e painel) + [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/) + `@tailwindcss/typography`
- [Sanity 3](https://www.sanity.io/) + [next-sanity](https://github.com/sanity-io/next-sanity) — CMS headless e Studio embutido
- [@portabletext/react](https://github.com/portabletext/react-portabletext) e [@sanity/image-url](https://github.com/sanity-io/image-url)
- [next-themes](https://github.com/pacocoursey/next-themes), [Framer Motion](https://www.framer.com/motion/) e [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel Analytics](https://vercel.com/analytics)

## Estrutura

```
app/
├── (client)/                # site público
│   ├── page.tsx             # todos os posts
│   ├── posts/[slug]/        # página do post
│   ├── tags/                # lista de categorias e posts por tag
│   └── about/               # sobre o autor
├── (admin)/studio/          # Sanity Studio embutido
├── components/              # Navbar, Header, PostComponent, ThemeSwitch…
└── utils/                   # provider de tema e tipagens
sanity/
├── schemas/                 # tipos de documento: post e tag
└── lib/                     # client e helper de imagens
```

## Como rodar localmente

Pré-requisitos: Node.js 18+ e um projeto no [Sanity](https://www.sanity.io/).

```bash
git clone https://github.com/Lu1sR0/leo-blog.git
cd leo-blog
npm install
```

Crie um arquivo `.env.local` na raiz com as variáveis:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=   # opcional (padrão: 2024-08-08)
```

Depois rode:

```bash
npm run dev       # site em http://localhost:3000 e Studio em http://localhost:3000/studio
npm run build     # build de produção
npm start         # servidor de produção
```

---

<div align="center">
Desenvolvido por <a href="https://github.com/Lu1sR0">Luis Roberto</a> · <a href="https://outframe.dev">Outframe</a>
</div>
