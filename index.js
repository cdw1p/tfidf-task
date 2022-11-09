import { Corpus } from 'tiny-tfidf'

// Initialize a corpus
const listTerm = ['agents', 'browsing', 'learning', 'mobile']
const listWord = [
  'Intelligent browsing agents, discovery agents, and filtering agents',
  'mobile browsing agents on mobile device',
  'Applying machine learning to learning agents'
]

// Create a corpus
const corpus = new Corpus(listTerm, listWord)

// Get the TF-IDF of a term
;(async () => {
  for (let i = 0; i < listTerm.length; i++) {
    const resultTFIDF = await corpus.getTopTermsForDocument(listTerm[i])
    console.log(listTerm[i], resultTFIDF, '\n-')
  }
})()