import { 
  Megaphone, 
  Headset, 
  Workflow, 
  Scale, 
  Clock, 
  GraduationCap, 
  BarChart3 
} from 'lucide-react';
import { SolutionCategory, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Blog', href: '#blog' },
  { label: 'Carreira', href: '#carreira' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_CONTENT = {
  title: "Tecnologia e inovação para transformar negócios e pessoas",
  subtitle: "Estamos comprometidos em entregar soluções que otimizam operações, enquanto melhoram e simplificam a vida das pessoas."
};

export const ABOUT_CONTENT = {
  title: "Quem somos",
  paragraphs: [
    "A Ikatec é uma empresa Multi-SaaS, o que significa que desenvolvemos e gerenciamos múltiplas soluções tecnológicas para atender diversas necessidades do mercado.",
    "Nosso ecossistema de softwares como serviço (SaaS) permite que empresas automatizem processos, integrem operações e impulsionem seu crescimento com inovação contínua.",
    "Desde 2010, somos movidos pelo propósito de transformar o futuro através da tecnologia.",
    "Mais do que criar soluções tecnológicas, a Ikatec inova com propósito, tocando vidas e impulsionando negócios.",
    "Presença nacional e internacional: atua em 26 estados, no Distrito Federal e está em expansão internacional, levando tecnologia e inovação."
  ]
};

export const SOLUTIONS_DATA: SolutionCategory[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    icon: Megaphone,
    products: [
      { name: 'Therux', description: 'E-mail marketing — Engaje seu público e amplie sua presença digital com campanhas de e-mail direcionadas.' }
    ]
  },
  {
    id: 'atendimento',
    title: 'Atendimento',
    icon: Headset,
    products: [
      { name: 'Digisac', description: 'Atendimento multicanal — Centralize todos os seus canais de comunicação em uma plataforma única para melhorar a experiência do cliente e facilitar o trabalho da equipe.' }
    ]
  },
  {
    id: 'processos',
    title: 'Processos e Automação',
    icon: Workflow,
    products: [
      { name: 'Lecom', description: 'Gestão inteligente de processos — Otimize seus processos internos com tecnologia personalizada.' },
      { name: 'Yank', description: 'Automação inteligente — Automatize processos com RPA e elimine tarefas repetitivas.' },
      { name: 'Roberty', description: 'Automação de processos — Implemente RPA sem código e automatize tarefas com robôs inteligentes.' },
      { name: 'Digihub', description: 'Gestão de performance — Analise, gerencie e execute KPIs para otimizar a performance do negócio.' }
    ]
  },
  {
    id: 'juridico',
    title: 'Jurídico / Pesquisa',
    icon: Scale,
    products: [
      { name: 'Meu Advogado', description: 'Gestão jurídica — Obtenha orientações jurídicas e conecte-se com advogados especializados.' },
      { name: 'Jornal Jurid', description: 'Pesquisa jurídica — Acompanhe notícias e atualizações do mundo jurídico.' },
      { name: 'Auxilium', description: 'Gestão jurídica — Administre seu escritório de advocacia com uma plataforma completa.' },
      { name: 'Jurid Mais', description: 'Pesquisa jurídica — Ferramenta de consulta jurídica ágil e organizada.' }
    ]
  },
  {
    id: 'produtividade',
    title: 'Produtividade / Ponto',
    icon: Clock,
    products: [
      { name: 'Facilita Ponto', description: 'Gestão de ponto — Simplifique o registro e gestão da jornada de trabalho dos colaboradores.' }
    ]
  },
  {
    id: 'ensino',
    title: 'Ensino / Educação',
    icon: GraduationCap,
    products: [
      { name: 'Camplearning', description: 'Ensino — Plataforma EAD para criação e gestão de cursos online.' }
    ]
  },
  {
    id: 'dados',
    title: 'Dados / Monitoramento',
    icon: BarChart3,
    products: [
      { name: 'Viewb', description: 'Monitoramento digital — Gerencie riscos e transforme dados em insights estratégicos.' }
    ]
  }
];

export const CONTACT_INFO = {
  phone: "(14) 3103-7800",
  email: "contato@ikatec.com.br",
  cta: "Estamos prontos para ajudar sua empresa a crescer com nossas soluções."
};