---
name: manter-design-portfolio-yuri
description: Preservar e evoluir o sistema visual do portfólio de Yuri Alcantara. Usar ao criar, revisar ou alterar páginas, seções, componentes, responsividade, tipografia, cores, imagens, marcas, cards, lightboxes, movimento ou hierarquia visual deste projeto.
---

# Manter o design do portfólio de Yuri Alcantara

## Começar sempre pelas fontes de verdade

1. Ler `PROJETO-SITE.md`.
2. Ler `specs/site.md`, `specs/design.md`, `cases.md` e `memoria.md`.
3. Inspecionar os arquivos atuais do site e os materiais relevantes em `00 - Referências` e `01 - Fotos e Imagens`.
4. Tratar `specs/design.md` como fonte de verdade visual. Usar este arquivo como procedimento consolidado, não como substituto das decisões registradas.
5. Se o pedido contradisser uma decisão registrada, parar antes da alteração, indicar a decisão afetada e perguntar se Yuri deseja substituí-la.

## Princípio criativo

Construir um portfólio premium, autoral e editorial. Combinar uma abertura fotográfica de alto impacto com capítulos escuros, ritmo generoso e cor aplicada com intenção. Usar Brian Holden apenas como referência de atmosfera, modularidade e apresentação de cases.

Nunca copiar textos, identidade, imagens, logotipo, elementos proprietários ou composições de outra marca.

## Hierarquia visual

- Fazer o hero apresentar imediatamente Yuri, sua função e a entrada para o portfólio.
- Usar escala, contraste e espaço em branco para orientar a leitura; evitar decoração sem função.
- Manter títulos expressivos e corpo leve, com linhas confortáveis.
- Preservar consistência de alinhamento, ritmo vertical e largura entre seções.
- Tratar cases como conteúdo principal: mídia dominante, raciocínio estratégico legível e resultados sem exageros.

## Marca

- Escrever `yuri` em caixa baixa com Roca One Light Italic quando o arquivo web licenciado estiver disponível.
- Usar DM Serif Display Italic apenas como substituta temporária.
- Escrever `ALCANTARA` em caixa alta com Montserrat ExtraLight.
- Equilibrar as duas palavras pela altura e pelo peso visual, não por valores tipográficos idênticos.
- Manter como referência a proporção aproximada usada no header: a altura visual de `yuri` pode ser cerca de 1,4–1,5 vez a de `ALCANTARA` para compensar a diferença entre as famílias.
- Garantir que a marca inteira caiba na tela, com pelo menos 20–24 px de respiro lateral no mobile.
- Usar somente o símbolo visível do asterisco, ignorando a transparência externa do arquivo.
- Nunca cortar as pontas do asterisco.
- No header, dimensionar o símbolo para acompanhar visualmente a altura do nome, sem dominá-lo.
- No hero, permitir maior escala ao símbolo, mas impedir sobreposição inadequada com o rosto.

## Paleta

- Violeta principal: `#6303ff`.
- Grafite: `#221f20`.
- Amarelo principal: `#ffc701`.
- Amarelo secundário: `#ffd101`.
- Off-white: `#f5f5f0`.
- Texto secundário em fundo escuro: off-white com 60–70% de opacidade.
- Usar amarelo e violeta como acentos de identidade, não como preenchimento indiscriminado.
- Em sobreposições fotográficas, escolher a lente pela legibilidade e pela transição com a seção seguinte.
- No hero mobile atual, usar degradê grafite na base e texto off-white; não usar o degradê amarelo que prejudicou a leitura.

## Tipografia

- Títulos: DM Serif Display.
- Corpo: Open Sans Light.
- Marca e microtipografia: Montserrat nos usos definidos.
- Display/hero: 68–128 px no desktop, adaptado fluidamente em telas menores.
- Título de seção: 48–88 px.
- Título de projeto: 36–60 px.
- Texto de destaque: 28–46 px.
- Corpo: 16–20 px.
- Microtexto: 10–12 px com tracking ampliado.
- Usar pesos maiores somente em controles, CTAs e microtextos que precisem de ênfase.

## Espaçamento e composição

- Usar módulo-base de 8 px.
- Desktop: 110–120 px de respiro vertical por seção e 7–8vw nas laterais.
- Cards: 22–32 px entre itens e cerca de 48 px de preenchimento interno.
- Mobile: 20–24 px nas laterais e 75–90 px entre capítulos.
- Preferir bordas finas, raios mínimos e composição editorial.
- Reservar raio total para seletor de idioma e chips.
- Evitar excesso de sombras suaves, cartões arredondados e estética de dashboard.

## Hero e fotografia

- Usar somente fotografias fornecidas nas pastas do projeto.
- Desktop: usar o retrato horizontal colorido como imagem principal.
- Mobile: usar o retrato vertical, preservando rosto, cabelo e presença corporal sem cortes desconfortáveis.
- Ajustar o enquadramento por inspeção visual em aparelhos reais; não assumir que o mesmo `background-position` funciona em todas as proporções.
- No enquadramento mobile atual, `background-position: 43% center` é o ponto de partida aprovado.
- Manter o rosto separado do asterisco do hero.
- Na passagem para o portfólio, reaplicar o retrato com baixa opacidade, blur, escala de cinza e lente grafite.
- Usar texto off-white sobre áreas escuras da fotografia e validar contraste mínimo WCAG AA.
- Nunca inventar ou simular imagens de projetos como se fossem materiais reais.

## Projetos e cards

- Exibir cases em destaque com mídia e texto lado a lado no desktop e empilhados no mobile.
- Manter briefing, objetivo, insight, ideia, execução e resultados claramente distinguíveis.
- Incorporar vídeos do YouTube indicados em `cases.md`.
- Quando houver imagens adicionais reais, oferecer carrossel na lightbox; mostrar controles somente com duas ou mais imagens.
- Usar lightbox com fundo desfocado, lente acinzentada e ruído de TV.
- Manter cards do arquivo em três colunas no desktop, duas no tablet e uma no mobile.
- Só exibir “Outros projetos” quando houver cases reais suficientes.
- Usar hover discreto: zoom sutil e recuperação da cor, sem efeitos chamativos.

## Marcas atendidas

- Usar apenas logos fornecidas e aprovadas.
- Preservar a ordem numerada existente nas pastas.
- Dar maior área, contraste e presença às marcas principais, que representam contas lideradas diretamente.
- Exibir marcas secundárias em grade mais compacta e discreta.
- Não deformar logos; usar `object-fit: contain` e respiro consistente.

## Controles e movimento

- CTA principal: amarelo, texto grafite, caixa alta e Montserrat.
- CTA secundário: transparente com borda amarela.
- Links editoriais: sublinhado ou seta diagonal.
- Manter o seletor PT/EN acessível no topo em todas as larguras.
- Usar transições entre 200 e 500 ms.
- Usar blur, opacidade e ruído com moderação, preservando desempenho e leitura.
- Respeitar `prefers-reduced-motion`.

## Responsividade

- Testar pelo menos desktop, tablet e mobile antes de publicar.
- Desktop: escala ampla, duas colunas nos cases e três no arquivo.
- Tablet: reduzir escala e alternar entre duas colunas e empilhamento conforme o espaço real.
- Mobile: coluna única, tipografia fluida, alvos de toque confortáveis e mídia otimizada.
- No mobile, verificar explicitamente:
  - marca completa e equilibrada;
  - 20–24 px de respiro lateral;
  - rosto sem corte desconfortável;
  - asterisco sem cobrir o rosto;
  - texto legível sobre a fotografia;
  - seletor PT/EN acessível;
  - ausência de rolagem horizontal.
- Usar 393 px como uma das larguras de validação, pois corresponde aos testes reais fornecidos por Yuri.

## Acessibilidade e desempenho

- Usar HTML semântico, foco visível e navegação por teclado.
- Manter contraste WCAG AA.
- Fornecer textos alternativos reais para imagens finais.
- Identificar a lightbox como diálogo e permitir fechamento por botão, clique externo e `Escape`.
- Comprimir imagens, adiar mídia abaixo da dobra e evitar bibliotecas desnecessárias.
- Buscar Core Web Vitals na faixa “boa”.

## Guardrails de conteúdo e publicação

- Não inventar clientes, projetos, cargos, prêmios, resultados ou métricas.
- Usar `cases.md` como central obrigatória de conteúdo dos projetos.
- Receber textos em português, produzir a versão em inglês e pedir aprovação explícita antes de publicar cada nova tradução.
- Não alterar a stack sem autorização.
- Não remover uma decisão aprovada silenciosamente.
- Não publicar sem autorização explícita.
- Depois de uma decisão visual importante aprovada, atualizar `memoria.md` e, quando aplicável, `specs/design.md`.

## Fluxo para qualquer alteração visual

1. Identificar o componente e os breakpoints afetados.
2. Conferir as fontes de verdade e detectar contradições.
3. Para mudança grande, apresentar um plano curto antes de editar.
4. Alterar o menor conjunto possível de regras, preservando desktop e demais seções.
5. Gerar a versão estática.
6. Validar conteúdo, imagens, ausência de erros e responsividade.
7. Em mobile, comparar a composição com capturas reais fornecidas por Yuri.
8. Pedir aprovação quando houver tradução nova ou substituição de decisão.
9. Publicar somente após autorização.
10. Registrar decisões importantes em `memoria.md`.

## Evitar

- Cópia literal de referências.
- Gradientes genéricos desconectados da fotografia e das seções adjacentes.
- Asteriscos cortados ou desproporcionais.
- Marca estourando as bordas da tela.
- Cortes fotográficos que eliminem partes importantes do rosto ou da presença corporal.
- Texto com contraste insuficiente.
- Excesso de raios, sombras, animações ou elementos decorativos.
- Layouts idênticos entre desktop e mobile sem recomposição.
- Conteúdo fictício apresentado como real.
