<h1 align="center"> Portfólio Pessoal — Mateus Santos </h1>

<img src="preview.png" alt="Preview">

---

Este projeto não é apenas um portfólio visual, mas um **estudo prático de arquitetura Front-end**, com foco em **escalabilidade, organização e boas práticas profissionais**.

A ideia foi ir além de um site estático e construir uma base sólida, organizada e evolutiva — aplicando conceitos utilizados em projetos reais de mercado.

📍**Disponível em:** https://gerenciador-estoque-angular.vercel.app/

---

## 🎯 Objetivos do Projeto

- Criar um portfólio **profissional e escalável**
- Praticar **arquitetura de front-end**
- Evitar soluções “rápidas” e pouco sustentáveis
- Trabalhar com **JavaScript moderno**, sem depender diretamente de frameworks
- Simular como frameworks (React, Angular) funcionam internamente

---

## 🧠 Conceitos e Abordagens Aplicadas

### Arquitetura baseada em Features

A estrutura do projeto foi organizada por **domínio funcional**, e não por tipo de arquivo.

```txt
src/
├── features/
│   ├── experience/
│   ├── academic/
│   ├── project/
```

Cada feature é **autônoma**, contendo:

- dados (`*.js`)
- renderização
- componente
- estilos
- ponto de exportação (`index.js`)

Isso facilita:

- manutenção
- leitura
- escalabilidade
- reutilização

---

### Componentização (sem Framework)

Componentes foram criados utilizando:

- `<template>`
- funções puras de renderização
- DOM APIs nativas

Cada componente é:

- previsível
- reutilizável
- desacoplado do contexto global

Isso simula o comportamento de frameworks modernos, mas **entendendo o que acontece por baixo**.

---

### Data-Driven UI

A interface é gerada a partir de **dados estruturados**, não HTML fixo.

Exemplo:

- listas de experiências
- projetos
- formações

Adicionar um novo item exige apenas:

```js
export const experiences = [
  {
    company: "...",
    role: "...",
    technologies: [...]
  }
];
```

Sem duplicação de HTML.

---

### Desacoplamento de Responsabilidades

Separação clara entre:

- **dados**
- **renderização**
- **estilos**
- **infraestrutura**

Exemplo:

- lógica de domínio não conhece CSS Modules
- funções utilitárias não conhecem regras de negócio
- componentes não conhecem a origem dos dados

---

### CSS Modular e Escopo de Estilos

O projeto utiliza **CSS Modules** para componentes dinâmicos, garantindo:

- isolamento de estilos
- ausência de conflitos globais
- manutenção facilitada

Para partes estáticas (Header, Footer):

- metodologia **BEM**
- estilos globais organizados

Essa combinação não é gambiarra — é **decisão consciente baseada no contexto**.

---

### Infraestrutura com Vite

O projeto utiliza **Vite** como bundler para:

- CSS Modules
- build otimizado
- carregamento rápido
- ambiente moderno de desenvolvimento

O build final é **leve, estático e performático**, sem custo extra em runtime.

---

## 🛠️ Funções Utilitárias e Infraestrutura Global

Além da componentização por _features_, o projeto conta com uma **camada de utilitários e infraestrutura**, responsável por gerenciar **comportamentos globais da aplicação**.

Essas responsabilidades foram isoladas em `src/utils`, seguindo princípios como **separação de responsabilidades**, **baixo acoplamento** e **reutilização de código**.

### Utilitários implementados:

#### 🌀 Gerenciamento de Loader

- Exibição e remoção controlada da tela de carregamento inicial
- Execução no ciclo de vida da aplicação
- Totalmente desacoplado das features

#### 🌗 Gerenciamento de Tema (Light / Dark)

- Persistência do tema via `localStorage`
- Aplicação automática do tema salvo ao recarregar a página
- Sincronização do estado visual (ícones e atributos de tema)

#### 📱 Controle de Menu Responsivo

- Toggle do menu de navegação em telas menores
- Fechamento automático ao clicar fora do menu
- Adaptação dinâmica ao redimensionamento da janela (`resize`)

#### 🎨 Infraestrutura de Estilos

- Função utilitária para aplicação de estilos com **CSS Modules**
- Tradução automática de classes para seus respectivos hashes
- Suporte a múltiplas classes por elemento
- Redução de código repetido e melhoria da legibilidade

---

## 🗂️ Estrutura de Pastas (Resumo)

```txt
src/
├─ assets/
│  ├─ images/
│  │  ├─ academic/
│  │  │  ├─ cepedi-logo.jpeg
│  │  │  ├─ ifba-logo.jpeg
│  │  │  └─ uesb-logo.webp
│  │  ├─ experience/
│  │  │  └─ cegesp-logo.png
│  │  └─ projects/
│  │     ├─ clipboard-landing-page.jpg
│  │     ├─ conference-ticket-generator.jpeg
│  │     ├─ estoque.png
│  │     ├─ food-landing-page.jpg
│  │     ├─ it-solutions.jpeg
│  │     └─ sunnyside-agency-landing-page.jpg
│  └─ imaga-profile.jpeg
│
├─ features/
│  ├─ academic/
│  │  ├─ Academic.module.css
│  │  ├─ AcademicCard.js
│  │  ├─ academics.js
│  │  ├─ index.js
│  │  └─ renderAcademics.js
│  │
│  ├─ experience/
│  │  ├─ ExperienceCard.js
│  │  ├─ ExperienceCard.module.css
│  │  ├─ experiences.js
│  │  ├─ index.js
│  │  └─ renderExperiences.js
│  │
│  └─ project/
│     ├─ index.js
│     ├─ Project.module.css
│     ├─ ProjectCard.js
│     ├─ projects.js
│     └─ renderProjects.js
│
├─ styles/
│  ├─ contact.css
│  ├─ header.css
│  ├─ home.css
│  ├─ style.css
│  └─ technologies.css
│
├─ utils/
│  ├─ applyStyles.js
│  ├─ loader.js
│  ├─ scroll.js
│  ├─ theme.js
│  └─ toggleMenu.js
│
├─ javascript.svg
└─ main.js
```

---

## 🚀 Tecnologias Utilizadas

- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- CSS Modules
- BEM
- Devicon / Font Awesome

---

## 📈 Aprendizados Principais

- Como estruturar projetos front-end escaláveis
- Como frameworks funcionam internamente
- Importância do desacoplamento
- Organização por domínio (features)
- Trade-offs entre simplicidade e abstração
- Arquitetura importa, mesmo em projetos pequenos

---

## 📌 Considerações Finais

Este projeto representa um **salto de maturidade** no meu aprendizado em desenvolvimento front-end.

Mais do que mostrar design, ele mostra:

- raciocínio arquitetural
- preocupação com manutenção
- visão de longo prazo
- domínio da base da web
