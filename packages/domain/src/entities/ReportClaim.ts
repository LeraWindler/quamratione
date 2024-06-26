// No entity was required so far for this use case.

export enum ReportReason {
  // Illegal
  ANIMAL_ABUSE = 'ANIMAL_ABUSE',
  HARASSMENT = 'HARASSMENT',
  VIOLENCE = 'VIOLENCE',
  SELF_HARM = 'SELF_HARM',
  DIRECT_THREAT = 'DIRECT_THREAT',
  HATE_SPEECH = 'HATE_SPEECH',

  // Sensitive content
  NUDITY = 'NUDITY',
  OFFENSIVE = 'OFFENSIVE',

  // Fraud
  SCAM = 'SCAM',
  UNAUTHORIZED_SALE = 'UNAUTHORIZED_SALE',
  IMPERSONATION = 'IMPERSONATION',

  // Spam
  MISLEADING = 'MISLEADING',
  MISUSE_HASHTAGS = 'MISUSE_HASHTAGS',
  UNRELATED = 'UNRELATED',
  REPETITIVE = 'REPETITIVE',
  FAKE_ENGAGEMENT = 'FAKE_ENGAGEMENT',
  MANIPULATION_ALGO = 'MANIPULATION_ALGO',
  SOMETHING_ELSE = 'SOMETHING_ELSE',
}
