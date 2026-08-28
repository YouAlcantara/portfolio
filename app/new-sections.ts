import type { Language } from "./new-content";

export const professionalProfile: Record<Language, string> = {
  pt: "Diretor de Planejamento e Estratégia com mais de 15 anos de trajetória em agências, da criação à liderança estratégica. Atua na interseção entre cultura, comportamento, dados, marca e negócio para construir posicionamentos, plataformas de comunicação e direcionamentos criativos capazes de mobilizar clientes, equipes e consumidores. Na Artplan, lidera núcleos multidisciplinares, grandes contas nacionais e processos que integram planejamento, criação, mídia, conteúdo, pesquisa e BI. Combina repertório executivo com formação em Sociologia e Antropologia do Consumo.",
  en: "Planning and Strategy Director with more than 15 years of agency experience, from creative work to strategic leadership. He works at the intersection of culture, behavior, data, brand and business to build positioning, communication platforms and creative direction capable of mobilizing clients, teams and consumers. At Artplan, he leads multidisciplinary teams, major national accounts and processes integrating planning, creative, media, content, research and BI. He combines executive experience with academic training in Sociology and Consumer Anthropology.",
};

export const impactResults = {
  pt: [
    { brand: "Banco PAN", logo: "./client-logos/primary/banco-pan.png", number: "100M+", label: "pessoas impactadas", details: "+17 pontos em awareness · +13 pontos em preferência · pico de 62% nas buscas · +65% versus o ano anterior · 2× finalista no Effie Brasil" },
    { brand: "Vale", logo: "./client-logos/primary/vale.webp", number: "1 Leão de Prata", label: "no Cannes Lions", details: "Experiência mais lembrada do The Town · crescimento da reputação da marca · conexão entre preservação, cultura amazônica e povos originários" },
    { brand: "Bob’s", logo: "./client-logos/primary/bobs.webp", number: "21×", label: "mais engajamento que a média", details: "1,4 milhão de views · 80,4 mil interações · +470% em novos seguidores" },
    { brand: "Oi Fibra", logo: "./client-logos/primary/oi.png", number: "4,2M", label: "clientes em três anos", details: "1 milhão de clientes em seis meses · liderança em 84 cidades · metas históricas de vendas na Black Friday" },
    { brand: "Oi Soluções", logo: "./client-logos/primary/oi.png", number: "+51%", label: "em receita de TI em 2020", details: "Unidade mais rentável da Oi · +3,5% A/A no 4T22 · +47,3% em TIC" },
  ],
  en: [
    { brand: "Banco PAN", logo: "./client-logos/primary/banco-pan.png", number: "100M+", label: "people reached", details: "+17 points in awareness · +13 points in preference · 62% peak in searches · +65% year over year · 2× Effie Brazil finalist" },
    { brand: "Vale", logo: "./client-logos/primary/vale.webp", number: "1 Silver Lion", label: "at Cannes Lions", details: "The Town’s most remembered experience · improved brand reputation · connected preservation, Amazonian culture and Indigenous peoples" },
    { brand: "Bob’s", logo: "./client-logos/primary/bobs.webp", number: "21×", label: "the average engagement rate", details: "1.4 million views · 80,400 interactions · +470% in new followers" },
    { brand: "Oi Fibra", logo: "./client-logos/primary/oi.png", number: "4.2M", label: "customers in three years", details: "1 million customers in six months · market leadership in 84 cities · record Black Friday sales targets" },
    { brand: "Oi Soluções", logo: "./client-logos/primary/oi.png", number: "+51%", label: "in IT revenue in 2020", details: "Oi’s most profitable business unit · +3.5% YoY in Q4 2022 · +47.3% in ICT" },
  ],
};

export const talks = {
  pt: [
    { year: "2026", event: "Rio Innovation Week", type: "Palestra", title: "Futuros Sonhadores: A Publicidade Vai à Escola", image: "./talks/riw-2026.jpg", url: "https://pt.linkedin.com/posts/grupo-dreamers_rio-innovation-week-2026-activity-7490474639182209024-TZAe" },
    { year: "2025", event: "Glocal Amazônia — Manaus", type: "Masterclass", title: "Criatividade com Propósito: Publicidade a Serviço das ODS", image: "./talks/glocal-2025.jpg", url: "https://portalamazonia.com/especial-publicitario/masterclass-ods-glocal/" },
    { year: "2025", event: "Rio Innovation Week", type: "Palestra", title: "Parcerias que Transformam: o Impacto do Setor Privado na Formação Profissional", image: "./talks/riw-2025.jpg", url: "https://faperj.br/?id=844.7.9" },
    { year: "2024", event: "Rio Innovation Week", type: "Palestra", title: "PodSonhar e Futuros Sonhadores: O Mercado Publicitário Vai à Escola", image: "./talks/riw-2024.png", url: "https://zenodo.org/records/15039189" },
    { year: "2023", event: "Rio2C", type: "Masterclass", title: "Como Formar e Garimpar Talentos Diversos para a Indústria Criativa", image: "./talks/rio2c-2023.webp", url: "https://www.escavador.com/sobre/544473/rosane-da-conceicao-pereira" },
  ],
  en: [
    { year: "2026", event: "Rio Innovation Week", type: "Talk", title: "Futuros Sonhadores: Advertising Goes to School", image: "./talks/riw-2026.jpg", url: "https://pt.linkedin.com/posts/grupo-dreamers_rio-innovation-week-2026-activity-7490474639182209024-TZAe" },
    { year: "2025", event: "Glocal Amazônia — Manaus", type: "Masterclass", title: "Creativity with Purpose: Advertising in Service of the SDGs", image: "./talks/glocal-2025.jpg", url: "https://portalamazonia.com/especial-publicitario/masterclass-ods-glocal/" },
    { year: "2025", event: "Rio Innovation Week", type: "Talk", title: "Partnerships that Transform: The Private Sector’s Impact on Professional Education", image: "./talks/riw-2025.jpg", url: "https://faperj.br/?id=844.7.9" },
    { year: "2024", event: "Rio Innovation Week", type: "Talk", title: "PodSonhar and Futuros Sonhadores: The Advertising Industry Goes to School", image: "./talks/riw-2024.png", url: "https://zenodo.org/records/15039189" },
    { year: "2023", event: "Rio2C", type: "Masterclass", title: "How to Develop and Discover Diverse Talent for the Creative Industry", image: "./talks/rio2c-2023.webp", url: "https://www.escavador.com/sobre/544473/rosane-da-conceicao-pereira" },
  ],
};

export const agencyStrengths = {
  pt: [
    "Liderança estratégica de grandes contas e construção de relações de confiança com clientes seniores.",
    "Brand strategy, posicionamento e plataformas de comunicação com potência criativa e consistência de longo prazo.",
    "Transformação de pesquisa, inteligência cultural e comportamento do consumidor em territórios acionáveis para criação.",
    "Integração entre planejamento, criação, mídia, conteúdo, social, pesquisa e BI em projetos complexos.",
    "Liderança, formação e desenvolvimento de talentos em times multidisciplinares de estratégia e pesquisa.",
    "Concorrências, new business, storytelling estratégico e construção de narrativas para clientes, boards e premiações.",
  ],
  en: [
    "Strategic leadership of major accounts and trusted relationships with senior clients.",
    "Brand strategy, positioning and communication platforms with creative power and long-term consistency.",
    "Turning research, cultural intelligence and consumer behavior into actionable creative territories.",
    "Integrating planning, creative, media, content, social, research and BI across complex projects.",
    "Leading, training and developing talent in multidisciplinary strategy and research teams.",
    "Pitches, new business, strategic storytelling and narratives for clients, boards and awards.",
  ],
};

export const skills = {
  pt: ["Planejamento estratégico", "Estratégia de marca", "Pesquisa", "Cultura", "Comportamento", "Consumer insights", "Consultoria", "Antropologia", "Storytelling", "Liderança e gestão", "Palestrante", "Professor acadêmico"],
  en: ["Strategic planning", "Brand strategy", "Research", "Culture", "Consumer behavior", "Consumer insights", "Consulting", "Anthropology", "Storytelling", "Leadership and management", "Speaker", "University lecturer"],
};
