import type { ReferenceItem } from './types'

export const references: ReferenceItem[] = [
  {
    id: 'ref-quantum-biology-review',
    short: 'Lambert et al., 2013',
    title: 'Quantum biology',
    type: 'peer-reviewed',
    year: 2013,
    source: 'Nature Physics',
    url: 'https://www.nature.com/articles/nphys2474',
    note: 'Widely cited review explaining where quantum effects in biology are plausible and where claims remain speculative.',
    topics: ['quantum biology', 'claim pages', 'science concepts']
  },
  {
    id: 'ref-no-signaling',
    short: 'Horodecki et al., 2019',
    title: 'The relativistic causality versus no-signaling paradigm for physicality of quantum processes',
    type: 'peer-reviewed',
    year: 2019,
    source: 'Nature Communications',
    url: 'https://www.nature.com/articles/s41467-019-09505-2',
    note: 'Useful for explaining why quantum nonlocal correlations do not straightforwardly imply controllable remote signaling.',
    topics: ['quantum', 'quiz', 'claim pages']
  },
  {
    id: 'ref-emf-niehs',
    short: 'NIEHS EMF overview',
    title: 'Electric & Magnetic Fields',
    type: 'government / public health',
    year: 2026,
    source: 'National Institute of Environmental Health Sciences',
    url: 'https://www.niehs.nih.gov/health/topics/agents/emf',
    note: 'Clear overview of electric and magnetic fields, frequency, and the difference between ionizing and non-ionizing radiation.',
    topics: ['magnetic field', 'electric field', 'frequency']
  },
  {
    id: 'ref-microwave-ncbi',
    short: 'PubMed Central, 2022',
    title: 'Microwave Radiation and the Brain',
    type: ['government / public health', 'peer-reviewed'],
    year: 2022,
    source: 'National Library of Medicine',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9409438/',
    note: 'Positive, neutral and negative effects of microwave radiation.',
    topics: ['microwave', 'electromagnetic field', 'frequency', 'science concepts']
  },
  {
    id: 'ref-interoception-craig',
    short: 'Craig, 2002',
    title: 'How do you feel? Interoception: the sense of the physiological condition of the body',
    type: 'peer-reviewed',
    year: 2002,
    source: 'Nature Reviews Neuroscience',
    url: 'https://doi.org/10.1038/nrn894',
    note: 'Foundational review for body awareness and interoception.',
    topics: ['interoception', 'sensory training']
  },
  {
    id: 'ref-placebo-nccih',
    short: 'NCCIH placebo overview',
    title: 'Placebo Effect',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/health/placebo-effect',
    note: 'Helpful for distinguishing expectation effects from specific treatment mechanisms.',
    topics: ['placebo', 'checklist', 'quiz']
  },
  {
    id: 'ref-acupuncture-nccih',
    short: 'NCCIH acupuncture',
    title: 'Acupuncture: Effectiveness and Safety',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety',
    note: 'Summarizes evidence and safety for acupuncture without overstating mechanism claims.',
    topics: ['acupuncture', 'alternative modalities']
  },
  {
    id: 'ref-tai-chi-nccih',
    short: 'NCCIH tai chi',
    title: 'Tai Chi: What You Need To Know',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/health/tai-chi-what-you-need-to-know',
    note: 'Summarizes evidence for tai chi in balance, osteoarthritis, fibromyalgia, and other outcomes.',
    topics: ['tai chi', 'movement', 'claim pages']
  },
  {
    id: 'ref-yoga-nccih',
    short: 'NCCIH yoga',
    title: 'Yoga: Effectiveness and Safety',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/health/yoga-effectiveness-and-safety',
    note: 'Good overview of what yoga may help with and the need for safety and proper instruction.',
    topics: ['yoga', 'alternative modalities']
  },
  {
    id: 'ref-reiki-nccih',
    short: 'NCCIH reiki',
    title: 'Reiki',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/health/reiki',
    note: 'Useful example of respectful but clear framing where claimed energy mechanisms are not supported by current scientific evidence.',
    topics: ['reiki', 'alternative modalities', 'evidence boundaries']
  },
  {
    id: 'ref-who-tcim',
    short: 'WHO TCIM topic page',
    title: 'Traditional, Complementary and Integrative Medicine',
    type: 'government / public health',
    year: 2026,
    source: 'World Health Organization',
    url: 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine',
    note: 'Shows that traditional and complementary medicine can be discussed seriously while still emphasizing evidence-based integration.',
    topics: ['global health', 'alternative modalities']
  },
  {
    id: 'ref-who-strategy',
    short: 'WHO strategy 2025–2034',
    title: 'Global traditional medicine strategy 2025–2034',
    type: 'government / public health',
    year: 2025,
    source: 'World Health Organization',
    url: 'https://www.who.int/publications/i/item/9789240113176',
    note: 'Useful for policy framing around safe, effective, people-centred integration.',
    topics: ['policy', 'health systems']
  },
  {
    id: 'ref-pain-review',
    short: 'Nahin et al., 2016',
    title: 'Evidence-based evaluation of complementary health approaches for pain management in the United States',
    type: 'review',
    year: 2016,
    source: 'Mayo Clinic Proceedings',
    url: 'https://www.nccih.nih.gov/research/research-results/review-examines-clinical-trial-evidence-on-complementary-approaches-for-five-painful-conditions',
    note: 'A useful umbrella review for discussing which complementary approaches have better evidence in pain than others.',
    topics: ['pain', 'alternative modalities', 'evidence']
  },
  {
    id: 'ref-chatgpt-help',
    short: 'OpenAI Help: What is ChatGPT?',
    title: 'What is ChatGPT?',
    type: 'official documentation',
    year: 2026,
    source: 'OpenAI Help Center',
    url: 'https://help.openai.com/en/articles/6783457-what-is-chatgpt',
    note: 'Plain-language explanation of the service and its basic training approach.',
    topics: ['ai literacy']
  },
  {
    id: 'ref-chatgpt-developed',
    short: 'OpenAI Help: model development',
    title: 'How ChatGPT and our language models are developed',
    type: 'official documentation',
    year: 2026,
    source: 'OpenAI Help Center',
    url: 'https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed',
    note: 'Helpful for explaining training data, pattern learning, and the limits of model behavior.',
    topics: ['ai literacy']
  },
  {
    id: 'ref-openai-safety',
    short: 'OpenAI safety approach',
    title: 'Our approach to AI safety',
    type: 'official documentation',
    year: 2026,
    source: 'OpenAI',
    url: 'https://openai.com/index/our-approach-to-ai-safety/',
    note: 'Supports discussion of transparency, limitations, and safeguards.',
    topics: ['ai literacy', 'safety']
  },
  {
    id: 'ref-nccih-neurobio',
    short: 'NCCIH neurobiological mechanisms',
    title: 'Neurobiological Effects and Mechanisms',
    type: 'government / public health',
    year: 2026,
    source: 'NIH NCCIH',
    url: 'https://www.nccih.nih.gov/about/neurobiological-effects-and-mechanisms',
    note: 'Shows how mindfulness, expectation, placebo, tai chi, qi gong, and guided imagery can be studied mechanistically without hype.',
    topics: ['mechanisms', 'placebo', 'mind-body']
  },
  {
    id: 'ref-walking-guidelines',
    short: 'WHO physical activity guidance',
    title: 'Physical activity',
    type: 'government / public health',
    year: 2026,
    source: 'World Health Organization',
    url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
    note: 'Useful for grounding walking and movement recommendations in mainstream health guidance.',
    topics: ['walking', 'movement', 'weekly program']
  },
  {
    id: 'ref-vision-attention',
    short: 'Nobre & Kastner, 2014',
    title: 'Attention and prediction: where is the next target?',
    type: 'review',
    year: 2014,
    source: 'Cortex',
    url: 'https://virtualmmx.ddns.net/gbooks/TheOxfordHandbookofAttention.pdf',
    note: 'Useful background for explaining attention as selective processing rather than mystical enhancement.',
    topics: ['attention', 'vision', 'hearing']
  },
  {
    id: 'ref-consent-report',
    short: 'CIOMS ethics guidelines',
    title: 'International Ethical Guidelines for Health-related Research Involving Humans',
    type: 'government / public health',
    year: 2016,
    source: 'CIOMS / WHO',
    url: 'https://cioms.ch/publications/product/international-ethical-guidelines-for-health-related-research-involving-humans/',
    note: 'Useful for privacy, consent, and respectful optional research participation.',
    topics: ['research participation', 'consent']
  },
  {
    id: 'ref-past-life-boundaries',
    short: 'Exploratory boundary note',
    title: 'Past life regression in health contexts should be treated as a spiritual or exploratory practice, not as an evidence-established clinical mechanism',
    type: 'exploratory',
    year: 2026,
    source: 'BIP editorial framing',
    url: 'https://www.who.int/health-topics/mental-health',
    note: 'Included as a boundary marker to remind users that some topics are best framed as reflective or cultural rather than evidentially established interventions.',
    topics: ['past life regression', 'alternative modalities']
  }
]

export function getReference(id: string) {
  return references.find((ref) => ref.id === id)
}
