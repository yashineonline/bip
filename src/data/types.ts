export type EvidenceLevel = 'supported for some outcomes' | 'mixed / limited' | 'plausible but untested' | 'not established' | 'unsupported'

export interface ReferenceItem {
  id: string
  short: string
  title: string
  type: 'peer-reviewed' | 'review' | 'government / public health' | 'official documentation' | 'exploratory'
  year: number
  source: string
  url: string
  note: string
  topics: string[]
}

export interface ClaimPage {
  id: string
  title: string
  oneSentenceClaim: string
  domain: string
  claimantMechanism: string
  evidenceGrade: EvidenceLevel
  why: string
  steelman: string
  critique: string
  misuse: string
  safety: string
  whatChangesRating: string
  changeLog: string[]
  references: string[]
}

export interface QuizQuestion {
  id: number
  prompt: string
  options: { id: string; text: string }[]
  answer: string
  explanation: string
  refs: string[]
}
