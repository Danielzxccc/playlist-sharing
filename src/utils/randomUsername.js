export function randomUsername() {
  const adjectives = [
    'Amazing',
    'Bold',
    'Charming',
    'Daring',
    'Energetic',
    'Funny',
  ]
  const nouns = [
    'Ape',
    'Bear',
    'Cat',
    'Dog',
    'Elephant',
    'Fox',
    'Eagle',
    'Tiger',
  ]
  const randomAdjIndex = Math.floor(Math.random() * adjectives.length)
  const randomNounIndex = Math.floor(Math.random() * nouns.length)
  return adjectives[randomAdjIndex] + nouns[randomNounIndex]
}
