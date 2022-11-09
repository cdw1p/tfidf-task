const TfIdf = require('tf-idf-search')
const tfidf = new TfIdf()

// Initialize a corpus
const listTerm = ['agents', 'browsing', 'learning', 'mobile']
const listWord = [
  'Intelligent browsing agents, discovery agents, and filtering agents',
  'Mobile browsing agents on mobile device',
  'Applying machine learning to learning agents'
]

// Get the TF-IDF of a term
;(async () => {
  // Create a corpus
  await tfidf.createCorpusFromStringArray(listWord)
  // IDF
  for (let i = 0; i < listTerm.length; i++) {
    console.log(listTerm[i])
    const data = await tfidf.createIdfModel(listTerm[i])
    console.log(data[0])
    console.log('---')
  }
  // TF-IDF
  for (let i = 0; i < listTerm.length; i++) {
    console.log(listTerm[i], await tfidf.createVectorSpaceModel(listTerm[i], tfidf.corpus[0])[0])
    console.log(listTerm[i], await tfidf.createVectorSpaceModel(listTerm[i], tfidf.corpus[1])[0])
    console.log(listTerm[i], await tfidf.createVectorSpaceModel(listTerm[i], tfidf.corpus[2])[0])
    console.log('---')
  }
  // Ranking
  console.log(await tfidf.rankDocumentsByQuery('mobile learning'))
})()