const TfIdf = require('node-tfidf')
const tfidf = new TfIdf()

// Initialize a corpus
const listTerm = ['agents', 'browsing', 'learning', 'mobile', 'mobile learning']
const listWord = [
  'Intelligent browsing agents, discovery agents, and filtering agents',
  'Mobile browsing agents on mobile device',
  'Applying machine learning to learning agents'
]

// Get the TF-IDF of a term
;(async () => {
  for (let i = 0; i < listWord.length; i++) {
    await tfidf.addDocument(`${listWord[i]}`)
  }
  for (let i = 0; i < listTerm.length; i++) {
    console.log(listTerm[i])
    await tfidf.tfidfs(listTerm[i], function (i, measure) {
      console.log(`\tDocument ${[i + 1]} : ${measure}`)
    })
    console.log('---')
  }
})()