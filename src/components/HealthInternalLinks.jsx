import React from 'react';
import { Link } from 'react-router-dom';

const OPERATOR_LINKS = [
  { href: '/encontre-seu-plano', label: 'Comparar planos de saúde' },
  { href: '/hapvida', label: 'Hapvida' },
  { href: '/amil', label: 'Amil' },
  { href: '/bradescosaude', label: 'Bradesco Saúde' },
  { href: '/sulamerica', label: 'SulAmérica' },
  { href: '/medsenior', label: 'MedSenior' },
  { href: '/unimed', label: 'Unimed' },
  { href: '/porto', label: 'Porto Saúde' },
];

const BLOG_LINKS = [
  { href: '/blog/plano-de-saude-para-autonomo-sp', label: 'Plano de saúde para autônomo' },
  { href: '/blog/mei-pode-ter-plano-de-saude-empresarial', label: 'Plano de saúde para MEI' },
  { href: '/blog/o-que-e-coparticipacao-plano-de-saude', label: 'Coparticipação' },
  { href: '/blog/portabilidade-de-plano-de-saude-como-funciona', label: 'Portabilidade de plano' },
  { href: '/blog/plano-de-saude-individual-vs-familiar-qual-contratar', label: 'Individual ou familiar' },
];

const REGIONAL_LINKS = [
  { href: '/hapvida-campinas', label: 'Hapvida Campinas' },
  { href: '/hapvida-sorocaba', label: 'Hapvida Sorocaba' },
  { href: '/amil-campinas', label: 'Amil Campinas' },
  { href: '/bradescosaude-campinas', label: 'Bradesco Campinas' },
  { href: '/sulamerica-campinas', label: 'SulAmérica Campinas' },
  { href: '/medsenior-campinas', label: 'MedSenior Campinas' },
];

const SECTION_CONFIG = {
  '/encontre-seu-plano': {
    title: 'Compare também por operadora e região',
    description: 'Veja páginas específicas para comparar rede, preço e perfil ideal antes de escolher seu plano.',
    groups: [
      { title: 'Operadoras', links: OPERATOR_LINKS.filter((link) => link.href !== '/encontre-seu-plano') },
      { title: 'Guias úteis', links: BLOG_LINKS },
    ],
  },
  '/hapvida': {
    title: 'Hapvida por cidade e comparativos úteis',
    description: 'Continue comparando a Hapvida por região ou veja conteúdos que ajudam na escolha do plano.',
    groups: [
      { title: 'Hapvida regional', links: REGIONAL_LINKS.filter((link) => link.href.startsWith('/hapvida-')) },
      { title: 'Compare com outras operadoras', links: OPERATOR_LINKS.filter((link) => !['/hapvida'].includes(link.href)) },
    ],
  },
  '/amil': {
    title: 'Amil por cidade e outras opções',
    description: 'Veja páginas regionais da Amil e compare com outras operadoras de saúde.',
    groups: [
      { title: 'Amil regional', links: REGIONAL_LINKS.filter((link) => link.href.startsWith('/amil-')) },
      { title: 'Compare com outras operadoras', links: OPERATOR_LINKS.filter((link) => !['/amil'].includes(link.href)) },
    ],
  },
  '/bradescosaude': {
    title: 'Bradesco Saúde por cidade e comparativos',
    description: 'Compare Bradesco Saúde em diferentes cidades e veja alternativas para PME, MEI e empresas.',
    groups: [
      { title: 'Bradesco regional', links: REGIONAL_LINKS.filter((link) => link.href.startsWith('/bradescosaude-')) },
      { title: 'Compare com outras operadoras', links: OPERATOR_LINKS.filter((link) => !['/bradescosaude'].includes(link.href)) },
    ],
  },
  '/sulamerica': {
    title: 'SulAmérica por cidade e alternativas',
    description: 'Veja páginas regionais da SulAmérica e compare com outras operadoras.',
    groups: [
      { title: 'SulAmérica regional', links: REGIONAL_LINKS.filter((link) => link.href.startsWith('/sulamerica-')) },
      { title: 'Compare com outras operadoras', links: OPERATOR_LINKS.filter((link) => !['/sulamerica'].includes(link.href)) },
    ],
  },
  '/medsenior': {
    title: 'MedSenior por região e conteúdos para escolher melhor',
    description: 'Compare MedSenior nas cidades disponíveis e veja guias úteis para escolher plano de saúde.',
    groups: [
      { title: 'MedSenior regional', links: REGIONAL_LINKS.filter((link) => link.href.startsWith('/medsenior-')) },
      { title: 'Guias úteis', links: BLOG_LINKS },
    ],
  },
  '/blog': {
    title: 'Guias que levam para cotação',
    description: 'Depois de ler, compare as principais operadoras e receba uma proposta personalizada.',
    groups: [
      { title: 'Páginas comerciais', links: OPERATOR_LINKS },
      { title: 'Regiões em destaque', links: REGIONAL_LINKS },
    ],
  },
};

const DEFAULT_CONFIG = {
  title: 'Continue comparando planos de saúde',
  description: 'Veja operadoras, regiões e guias relacionados para escolher com mais segurança.',
  groups: [
    { title: 'Operadoras', links: OPERATOR_LINKS },
    { title: 'Guias úteis', links: BLOG_LINKS },
  ],
};

function getConfig(pathname) {
  if (SECTION_CONFIG[pathname]) return SECTION_CONFIG[pathname];
  if (/^\/(hapvida|amil|bradescosaude|sulamerica|medsenior)-/.test(pathname)) return DEFAULT_CONFIG;
  return null;
}

export default function HealthInternalLinks({ pathname }) {
  const config = getConfig(pathname);
  if (!config) return null;

  return (
    <section className="py-10 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-7">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600 mb-2">Navegação inteligente</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#0d1f3c] italic">{config.title}</h2>
          <p className="text-sm text-slate-500 font-medium mt-2 max-w-2xl mx-auto">{config.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {config.groups.map((group) => (
            <div key={group.title} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2 rounded-full bg-blue-50 text-[#0d1f3c] text-xs font-black hover:bg-blue-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
