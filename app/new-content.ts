export type Language = "pt" | "en";

export type MediaArticle = {
  title: string;
  image: string;
  paragraphs: string[];
  pdf?: string;
  articleUrl?: string;
};

export const mediaCopy = {
  pt: {
    title: "Na mídia",
    subtitle: "Conheça um pouco da minha visão sobre a comunicação.",
    open: "Leia mais",
    paper: "Veja o Paper",
    article: "Leia o artigo completo",
    close: "Fechar conteúdo",
  },
  en: {
    title: "In the media",
    subtitle: "Explore some of my perspectives on communication.",
    open: "Read more",
    paper: "View the paper",
    article: "Read the full article",
    close: "Close content",
  },
};

export const mediaArticles: Record<Language, MediaArticle[]> = {
  pt: [
    {
      title: "Quem está escolhendo o produto na era da IA?",
      image: "./media/articles/ia-produto.jpg",
      pdf: "./media/papers/5-grandes-mudancas-IA-comunicacao.pdf",
      paragraphs: [
        "À medida que as pessoas deixam de apenas pesquisar e passam a conversar, comparar e agir com a ajuda de sistemas inteligentes, surge um novo intermediário na relação entre consumidores e marcas. Neste material, organizei cinco transformações que já começam a redefinir a comunicação: consumidores mais exigentes, jornadas menos lineares, o surgimento dos agentes de compra, a valorização da confiança e a passagem da campanha isolada para sistemas criativos contínuos.",
        "Esse cenário exige que as marcas sejam, ao mesmo tempo, desejáveis para pessoas e legíveis para máquinas. Não basta gerar lembrança: será necessário responder a perguntas específicas, oferecer evidências verificáveis e manter informações consistentes em todos os ambientes consultados pela IA. Se o funil tradicional já não explica toda a decisão, talvez seja hora de mapear estados mentais — despertar, explorar, confiar e agir ou delegar — e repensar a estratégia a partir das novas formas pelas quais uma marca pode ser descoberta, avaliada e escolhida.",
      ],
    },
    {
      title: "SCQA — Como organizar qualquer tema com lógica executiva",
      image: "./media/articles/scqa.jpg",
      pdf: "./media/papers/SCQA_Yuri_Alcantara.pdf",
      paragraphs: [
        "Nem sempre uma apresentação fica confusa por falta de informação. Muitas vezes, o problema é que tentamos oferecer uma resposta antes de deixar clara a pergunta que precisa ser respondida. Foi por isso que organizei este material sobre SCQA: um framework que estrutura o raciocínio a partir de quatro elementos — Situação, Complicação, Questão e Resposta — e ajuda a transformar temas complexos em narrativas mais lógicas, objetivas e executivas.",
        "O conteúdo reúne 16 estruturas aplicáveis a cinco tipos de desafio: decisão, execução, estratégia, diagnóstico e consultoria. Mais do que um modelo para montar slides, o SCQA é uma ferramenta para pensar melhor: identificar o verdadeiro problema, formular a pergunta central e construir uma recomendação que faça sentido para quem precisa decidir. Porque, no fim, toda comunicação ruim é uma resposta sem uma pergunta clara.",
      ],
    },
    {
      title: "Nostalgia e a demanda por reconexão",
      image: "./media/articles/nostalgia.jpg",
      pdf: "./media/papers/nostalgia-e-reconexao.pdf",
      articleUrl: "https://mundodomarketing.com.br/a-nostalgia-e-a-demanda-por-reconexao",
      paragraphs: [
        "Como a epidemia de solidão vem impactando a indústria do entretenimento? O sucesso do remake de “Renascer” vem a rebote do mesmo êxito de “Pantanal”. Esses lançamentos de conteúdos nostálgicos são um fenômeno não só no Brasil como no mundo — algo que pudemos ver em “Super Mario”, “Barbie” e “Meninas Malvadas”. Isso é mais do que uma tendência de entretenimento.",
        "Essa onda nostálgica reflete uma necessidade social de recomunização. Em um mundo impactado pela solidão pós-pandêmica e pela fragmentação do senso comum provocada pelas redes sociais, a nostalgia surge não apenas como conforto, mas como caminho para reconectar e fortalecer laços comunitários. Também se demonstra uma grande estratégia de conexão emocional entre marcas e consumidores.",
      ],
    },
    {
      title: "O Grupo Dreamers vai à escola resgatar sonhos com o Futuros Sonhadores",
      image: "./media/articles/futuros-sonhadores-midia.jpg",
      articleUrl: "https://valor.globo.com/publicacoes/especiais/educacao-profissional/noticia/2023/05/22/vocacoes-regionais-fortalecem-o-dialogo-com-o-setor-privado.ghtml",
      paragraphs: [
        "Voltar à Escola Técnica Estadual Adolpho Bloch, onde fui aluno, para ajudar outros jovens a se aproximarem do mercado de comunicação tornou o Futuros Sonhadores um projeto especialmente significativo para mim. A iniciativa cria pontes entre a formação técnica e o mundo do trabalho, oferecendo aulas, workshops, mentorias e experiências com desafios reais para que os estudantes ampliem seu repertório e consigam imaginar novos caminhos profissionais ainda durante o Ensino Médio.",
        "Foi uma alegria dividir essa experiência com Debora Moura, então head de Diversidade e Inclusão do Grupo Dreamers, em uma matéria do Valor Econômico sobre a aproximação entre educação profissional e setor privado. Mais do que preparar jovens para o mercado, projetos como esse ajudam o próprio mercado a reconhecer talentos, perspectivas e futuros que muitas vezes permanecem distantes das oportunidades.",
      ],
    },
    {
      title: "Precisamos resgatar os clássicos da propaganda",
      image: "./media/articles/classicos-propaganda.jpg",
      articleUrl: "https://mundodomarketing.com.br/precisamos-resgatar-os-classicos-da-propaganda",
      paragraphs: [
        "Em um momento de síndrome do impostor, comecei a questionar se ainda dominava o básico da propaganda. Para sair desse lugar, fiz o que aprendi durante o mestrado: voltei aos clássicos. A leitura de Adland: A Global History of Advertising, de Mark Tungate, me ajudou a reencontrar uma ideia essencial: a publicidade nasceu para responder a problemas de negócio, construir percepções sobre produtos e, principalmente, romper a barreira da invisibilidade por meio da criatividade.",
        "No artigo, reflito sobre como a ansiedade diante do digital, do TikTok e da inteligência artificial pode nos fazer acreditar que todas as bases mudaram. As ferramentas, os canais e as possibilidades de mensuração evoluíram, mas continuam sendo meios. No centro da boa propaganda ainda estão uma mensagem relevante, uma linguagem capaz de gerar conexão e uma ideia surpreendente o bastante para fazer uma marca ser percebida e lembrada.",
      ],
    },
    {
      title: "Narrativas e identidades",
      image: "./media/articles/narrativas-identidades.jpg",
      articleUrl: "https://www.linkedin.com/pulse/n%C3%B3s-compramos-narrativas-e-transformamos-em-yuri-alcantara",
      paragraphs: [
        "Por que os diamantes passaram a representar amor, compromisso e status? A partir de um episódio da série Explained, revisitei a estratégia da De Beers e a forma como a publicidade ajudou a transformar uma pedra preciosa em um dos símbolos mais poderosos do imaginário contemporâneo. A história me levou ao “Ensaio sobre a dádiva”, de Marcel Mauss, e à ideia de que objetos não circulam apenas por seu valor funcional: eles carregam significados, relações de poder e atributos que desejamos incorporar à nossa própria identidade.",
        "No artigo “Nós compramos narrativas e as transformamos em identidade”, reflito sobre como as marcas envolvem produtos em histórias capazes de lhes atribuir emoção, personalidade e valor cultural. Quando consumimos, não compramos somente uma matéria-prima ou uma função: escolhemos também os significados que aquele produto nos ajuda a expressar.",
      ],
    },
    {
      title: "O significado social da marca",
      image: "./media/articles/significado-social-marca.jpg",
      articleUrl: "https://www.linkedin.com/pulse/o-significado-social-da-marca-yuri-alcantara/",
      paragraphs: [
        "O que uma marca realmente representa na sociedade? Mais do que um nome ou uma identidade visual, ela funciona como uma etiqueta capaz de reunir uma teia de significados construída ao longo do tempo. Por meio do branding, produtos que saem impessoais dos processos industriais passam a carregar histórias, valores, emoções e atributos culturais. É assim que as marcas se transformam em símbolos de pertencimento, distinção e identidade.",
        "Essa construção não pertence apenas às equipes de marketing e comunicação. Cada decisão do negócio, do produto ao atendimento, da cultura interna ao posicionamento de uma liderança, acrescenta significado à marca. O brandbook pode orientar essa história, mas são as atitudes cotidianas da organização que lhe dão vida. Construir uma marca forte exige coerência entre aquilo que a empresa comunica, aquilo que faz e a experiência que produz no mundo.",
      ],
    },
  ],
  en: [],
};

mediaArticles.en = mediaArticles.pt.map((article, index) => ({
  ...article,
  title: [
    "Who chooses the product in the age of AI?",
    "SCQA — How to organize any topic with executive logic",
    "Nostalgia and the demand for reconnection",
    "Grupo Dreamers goes back to school to revive dreams",
    "Why we need to rediscover advertising classics",
    "Narratives and identities",
    "The social meaning of brands",
  ][index],
  paragraphs: [
    ["As people move from simply searching to conversing, comparing and acting with the help of intelligent systems, a new intermediary emerges between consumers and brands. This paper organizes five shifts already redefining communication: more demanding consumers, less linear journeys, shopping agents, the growing value of trust and the move from isolated campaigns to continuous creative systems.", "Brands will need to be both desirable to people and legible to machines. Awareness alone will not be enough: brands must answer specific questions, provide verifiable evidence and maintain consistent information across the environments consulted by AI."],
    ["Presentations are not always confusing because information is missing. Often, the problem is that we offer an answer before making the question clear. SCQA structures reasoning through Situation, Complication, Question and Answer, turning complex topics into more logical, objective and executive narratives.", "The material brings together 16 structures for five types of challenge: decision, execution, strategy, diagnosis and consulting. More than a slide framework, SCQA is a tool for thinking better."],
    ["How is the loneliness epidemic affecting entertainment? The success of nostalgic remakes and franchises is more than an entertainment trend.", "This nostalgic wave reflects a social need for reconnection. In a world shaped by post-pandemic loneliness and fragmented common ground, nostalgia becomes both a path to rebuild community and a powerful emotional strategy for brands."],
    ["Returning to Adolpho Bloch State Technical School, where I studied, to help young people connect with the communications industry made Futuros Sonhadores especially meaningful to me. The initiative bridges technical education and work through classes, workshops, mentoring and real challenges.", "Sharing this experience in Valor Econômico reinforced an important idea: projects like this help the market recognize talent, perspectives and futures that often remain far from opportunity."],
    ["During a period of impostor syndrome, I questioned whether I still mastered the foundations of advertising. I went back to the classics and rediscovered an essential idea: advertising exists to solve business problems, shape product perceptions and break through invisibility with creativity.", "Tools, channels and measurement evolve, but they remain means. At the center of great advertising are still a relevant message, a language that creates connection and an idea surprising enough to make a brand noticed and remembered."],
    ["Why did diamonds come to represent love, commitment and status? Revisiting the De Beers strategy led me to Marcel Mauss and the idea that objects circulate not only for their function, but also for the meanings and identities they carry.", "Brands wrap products in narratives that give them emotion, personality and cultural value. We do not buy only materials or functions; we also choose the meanings those products help us express."],
    ["What does a brand truly represent in society? Beyond a name or visual identity, it gathers a web of meanings built over time and turns products into symbols of belonging, distinction and identity.", "This construction belongs to the entire business. Every decision — from product and service to culture and leadership — adds meaning to the brand. Strong brands require coherence between what an organization says, does and makes people experience."],
  ][index],
}));

export const futuresCopy = {
  pt: {
    eyebrow: "Projeto de impacto",
    title: "Futuros Sonhadores",
    text: "O Futuros Sonhadores nasceu para aproximar estudantes do Ensino Médio técnico do mercado de comunicação, por meio de aulas, mentorias e experiências com desafios reais. Idealizado a partir da minha própria trajetória como ex-aluno da Escola Técnica Estadual Adolpho Bloch, o projeto transforma conhecimento em oportunidade e amplia os futuros que esses jovens conseguem imaginar para si. Conheça o site e assista ao vídeo para descobrir essa história.",
    button: "Veja o site do projeto",
  },
  en: {
    eyebrow: "Impact project",
    title: "Futuros Sonhadores",
    text: "Futuros Sonhadores was created to bring technical high-school students closer to the communications industry through classes, mentoring and real-world challenges. Inspired by my own journey as a former student at Adolpho Bloch State Technical School, the project turns knowledge into opportunity and expands the futures these young people can imagine for themselves.",
    button: "Visit the project website",
  },
};

export const education = {
  pt: [
    ["FIA Business School", "MBA Executivo — Formação executiva e competências para C-Level", "2026 — 2027"],
    ["Universidade Federal do Rio de Janeiro", "Mestrado em Sociologia e Antropologia", "2018 — 2020"],
    ["ESPM", "Customer Centric Marketing — Gestão de Experiência do Consumidor (não concluído)", "2020 — 2021"],
    ["Miami Ad School Brasil", "Planejamento de Comunicação", "2016"],
    ["Estácio", "Bacharelado em Comunicação Social — Publicidade e Propaganda", "2009 — 2012"],
    ["FAETEC — ETE Adolpho Bloch", "Ensino Médio Técnico em Propaganda e Marketing", "2005 — 2007"],
  ],
  en: [
    ["FIA Business School", "Executive MBA — C-Level Executive Education and Competencies", "2026 — 2027"],
    ["Federal University of Rio de Janeiro", "Master’s in Sociology and Anthropology", "2018 — 2020"],
    ["ESPM", "Customer-Centric Marketing — Consumer Experience Management (not completed)", "2020 — 2021"],
    ["Miami Ad School Brazil", "Communication Planning", "2016"],
    ["Estácio", "Bachelor’s in Advertising and Communications", "2009 — 2012"],
    ["FAETEC — ETE Adolpho Bloch", "Technical High School in Advertising and Marketing", "2005 — 2007"],
  ],
};
