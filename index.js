import { Corpus } from 'tiny-tfidf'

// Initialize a corpus
const listTerm = ['agents', 'browsing', 'learning', 'mobile', 'mobile learning']
const listWord = [
  'Intelligent browsing agents, discovery agents, and filtering agents',
  'Mobile browsing agents on mobile device',
  'Applying machine learning to learning agents'
]

// Create a corpus
const corpus = new Corpus(listTerm, listWord)

// Get the TF-IDF of a term
;(async () => {
  // Model 1
  for (let i = 0; i < listTerm.length; i++) {
    const resultTFIDF = await corpus.getTopTermsForDocument(listTerm[i])
    console.log(listTerm[i])
    console.log(resultTFIDF)
    console.log('---')
  }
})()