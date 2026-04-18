import type { QuizQuestion } from './types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'A product says it uses “quantum frequency tuning” to restore harmony. No mechanism or measurement is provided. What is the best first response?',
    options: [
      { id: 'a', text: 'Accept it because quantum physics is complicated.' },
      { id: 'b', text: 'Ask whether the claim is a metaphor or a measurable mechanism.' },
      { id: 'c', text: 'Reject it because all quantum biology is impossible.' },
      { id: 'd', text: 'Trust it if testimonials are strong.' }
    ],
    answer: 'b',
    explanation: 'BIP begins by separating metaphor from mechanism. A scientific-sounding term is not enough; a user should ask what was measured, how it was measured, and what outcome changed.',
    refs: ['ref-quantum-biology-review', 'ref-emf-niehs']
  },
  {
    id: 2,
    prompt: 'A claim says two people can send healing information instantly at a distance because of entanglement. Which concept is most relevant?',
    options: [
      { id: 'a', text: 'No-signaling limits what can be used for controllable communication.' },
      { id: 'b', text: 'Peripheral vision widens during meditation.' },
      { id: 'c', text: 'If something is nonlocal, it must be therapeutic.' },
      { id: 'd', text: 'Quantum means microscopic only, so nothing biological can matter.' }
    ],
    answer: 'a',
    explanation: 'Quantum correlations are not the same thing as reliable, user-controlled messaging or clinical action at a distance.',
    refs: ['ref-no-signaling', 'ref-quantum-biology-review']
  },
  {
    id: 3,
    prompt: 'A participant feels better after a guided ritual. What is the most careful interpretation?',
    options: [
      { id: 'a', text: 'The ritual’s proposed hidden energy mechanism is proven.' },
      { id: 'b', text: 'The experience is meaningless unless a biomarker changed.' },
      { id: 'c', text: 'Subjective benefit matters, but expectation, context, and specific mechanism still need to be distinguished.' },
      { id: 'd', text: 'Only sham-controlled trials matter, so personal experience is irrelevant.' }
    ],
    answer: 'c',
    explanation: 'BIP treats experience as real data about lived perception, while still separating subjective value from specific causal claims.',
    refs: ['ref-placebo-nccih', 'ref-nccih-neurobio']
  },
  {
    id: 4,
    prompt: 'An article shows that a quantum model can describe a choice pattern in psychology. What follows?',
    options: [
      { id: 'a', text: 'The brain must be using literal entanglement in that task.' },
      { id: 'b', text: 'Quantum-like mathematics and literal quantum brain mechanism are not the same claim.' },
      { id: 'c', text: 'Classical explanations are automatically ruled out.' },
      { id: 'd', text: 'The result proves consciousness is a field.' }
    ],
    answer: 'b',
    explanation: 'A formal model can be useful without committing the user to a literal microphysical mechanism.',
    refs: ['ref-quantum-biology-review']
  },
  {
    id: 5,
    prompt: 'A wellness teacher says “chaos theory proves intention can control any body system.” What is the best correction?',
    options: [
      { id: 'a', text: 'Complex systems can be sensitive, but sensitivity does not imply unconstrained control.' },
      { id: 'b', text: 'Chaos means random, so science has nothing to say.' },
      { id: 'c', text: 'The teacher is correct because nonlinear systems are magical.' },
      { id: 'd', text: 'All nonlinear claims are false.' }
    ],
    answer: 'a',
    explanation: 'Sensitivity, instability, and controllability are different concepts. The ability to perturb a complex system does not prove precise intentional control.',
    refs: ['ref-placebo-nccih']
  },
  {
    id: 6,
    prompt: 'A claim says magnetic fields “align consciousness.” What should a careful app page do first?',
    options: [
      { id: 'a', text: 'Define magnetic field operationally before discussing broader interpretations.' },
      { id: 'b', text: 'Assume any field language is spiritual and beyond testing.' },
      { id: 'c', text: 'Treat consciousness as settled science.' },
      { id: 'd', text: 'Replace the term with a more mysterious word.' }
    ],
    answer: 'a',
    explanation: 'BIP insists on clear definitions. If a term cannot be defined operationally, the page should say so before moving to broader philosophical interpretations.',
    refs: ['ref-emf-niehs']
  },
  {
    id: 7,
    prompt: 'A user says “tai chi helped my balance.” How should the app respond?',
    options: [
      { id: 'a', text: 'Dismiss the experience because it is anecdotal.' },
      { id: 'b', text: 'State that it may fit existing evidence for some movement outcomes, while avoiding broad overgeneralization.' },
      { id: 'c', text: 'Conclude tai chi works for every health condition.' },
      { id: 'd', text: 'Call it proof of invisible energy flow.' }
    ],
    answer: 'b',
    explanation: 'BIP respects lived experience and then places it inside a larger evidence map.',
    refs: ['ref-tai-chi-nccih', 'ref-pain-review']
  },
  {
    id: 8,
    prompt: 'A page claims smell training improves memory because scent is strongly linked to emotion and recollection. What is the best BIP stance?',
    options: [
      { id: 'a', text: 'Use it as a careful exercise hypothesis and separate practical value from overclaimed therapeutic certainty.' },
      { id: 'b', text: 'Promise that smell training will treat dementia.' },
      { id: 'c', text: 'Refuse to discuss it because not every claim is settled.' },
      { id: 'd', text: 'Classify it automatically as pseudoscience.' }
    ],
    answer: 'a',
    explanation: 'Some practices can be offered as low-risk observation exercises without claiming disease treatment.',
    refs: ['ref-interoception-craig']
  },
  {
    id: 9,
    prompt: 'A chatbot answers confidently but provides no sources. What is the most appropriate lesson?',
    options: [
      { id: 'a', text: 'Confidence and correctness are separate; source-backed transparency matters.' },
      { id: 'b', text: 'Confidence proves the model has agency.' },
      { id: 'c', text: 'If it sounds human, it probably understands.' },
      { id: 'd', text: 'AI is either fully conscious or completely useless.' }
    ],
    answer: 'a',
    explanation: 'BIP treats AI as a tool that can assist reasoning, but only when users understand both capabilities and limits.',
    refs: ['ref-chatgpt-help', 'ref-chatgpt-developed', 'ref-openai-safety']
  },
  {
    id: 10,
    prompt: 'A new intervention has enthusiastic testimonials, a plausible story, and no controlled studies yet. What evidence grade best fits?',
    options: [
      { id: 'a', text: 'Supported for some outcomes' },
      { id: 'b', text: 'Plausible but untested' },
      { id: 'c', text: 'Established' },
      { id: 'd', text: 'Impossible' }
    ],
    answer: 'b',
    explanation: 'BIP protects room for curiosity while insisting that plausibility is not the same thing as evidence.',
    refs: ['ref-placebo-nccih', 'ref-who-tcim']
  }
]
