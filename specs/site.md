# Especificação do site

## Objetivo

Portfólio premium, clicável e evolutivo de Yuri Alcantara, Diretor de Planejamento e Estratégia com mais de 20 anos de experiência em comunicação. Deve conquistar oportunidades profissionais, atrair consultorias, consolidar autoridade e apresentar trabalhos produzidos.

## Público-alvo

- Prioritário no Brasil: recrutadores, agências e diretores de planejamento.
- Internacional: recrutadores, agências e pares nos Estados Unidos e na Europa.

## Produto e proposta de valor

Uma landing page bilíngue que combina apresentação profissional, estudos de caso e histórico de carreira. O conteúdo deve evidenciar raciocínio estratégico sem inventar informações ou resultados.

## Idiomas

- Português como idioma de origem.
- Inglês como tradução.
- Seletor PT/EN no topo, com comportamento de liga/desliga.
- Toda tradução deve ser aprovada por Yuri antes da publicação.

## Quantidade de páginas

Landing page única. Os projetos abrem em lightbox, sem navegação para páginas internas.

## Seções

1. Abertura/hero.
2. Projetos selecionados em sequência editorial, na ordem definida em `@cases.md`.
3. Arquivo de outros projetos em grade de três cards por linha no desktop.
4. Experiência.
5. Habilidades.
6. Contato.

## Projetos

- Os projetos publicados permanecem expandidos em formato de slide editorial, respeitando a ordem definida em `@cases.md`.
- Vídeo case à esquerda; síntese à direita.
- Campos: briefing, objetivo, insight, ideia, execução e resultados.
- Demais projetos aparecem em grade e abrem no mesmo formato somente quando houver cases adicionais reais suficientes para formar a seção. Até lá, “Outros projetos” permanece prevista na arquitetura, mas oculta no site.
- Abertura em lightbox com fundo desfocado, lente acinzentada e ruído de TV.
- `@cases.md` é a fonte de verdade dos conteúdos e links de vídeo dos projetos.
- Vídeos hospedados no YouTube devem ser incorporados a partir dos links registrados na central de cases.
- Quando a pasta de um case contiver imagens adicionais, a lightbox oferece uma galeria em carrossel. Os controles aparecem somente quando houver duas ou mais imagens.

## Funcionalidades

- Alternância PT/EN.
- Navegação por âncoras.
- Lightbox acessível, fechável por botão, clique externo e tecla Escape.
- Formulário de contato destinado a `eu.yurialcantara@gmail.com`.
- Estrutura de conteúdo preparada para crescimento.
- Integração definitiva do formulário ainda depende de definir serviço compatível com Hostinger; `mailto:` é aceitável apenas no preview.

## Chamadas para ação

- Principal: “Vamos conversar”.
- Secundária: “Veja meu LinkedIn”.
- LinkedIn: https://www.linkedin.com/in/yuri-alcantara/

## Stack técnica

- Preview: React + TypeScript + CSS, em estrutura compatível com geração estática.
- Produção: exportação estática publicada pelo GitHub Pages no repositório público `portfolio`, evitando dependências de servidor.
- A stack definitiva não deve mudar sem autorização.

## Responsividade

- Desktop: grade de três cards e projetos em duas colunas.
- Tablet: grade de duas colunas; projetos podem empilhar conforme largura.
- Mobile: coluna única, tipografia fluida, alvos de toque confortáveis e mídia otimizada.

## Acessibilidade

- HTML semântico, foco visível e navegação por teclado.
- Contraste mínimo WCAG AA.
- Textos alternativos reais para imagens finais.
- Respeitar `prefers-reduced-motion`.
- Lightbox com identificação de diálogo e fechamento por Escape.

## Desempenho

- Imagens finais comprimidas e responsivas.
- Carregamento diferido abaixo da dobra.
- Evitar bibliotecas desnecessárias e vídeos pesados no carregamento inicial.
- Meta de Core Web Vitals em faixa “boa”.

## Dentro do escopo

Design e desenvolvimento da landing page, bilinguismo, estudos de caso, experiência, habilidades, contato, estrutura expansível e publicação estática pelo GitHub Pages.

## Fora do escopo atual

CMS, painel administrativo, área autenticada, blog editorial separado, banco de dados e automação definitiva do formulário.

## Informações pendentes

- Conteúdo real de cada projeto e respectivos arquivos.
- Histórico profissional validado.
- Lista final de habilidades, clientes, prêmios e reconhecimentos.
- Revisões futuras da bio e das traduções.
- Licença e arquivo web da Roca One Light Italic.
- Serviço definitivo de envio do formulário sem depender do aplicativo de e-mail do visitante.
