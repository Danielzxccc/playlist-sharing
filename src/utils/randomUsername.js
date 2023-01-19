export function randomUsername() {
  const adjectives = [
    'Amazing',
    'Bold',
    'Charming',
    'Daring',
    'Energetic',
    'Funny',
  ]
  const nouns = ['Ape', 'Bear', 'Cat', 'Dog', 'Elephant', 'Fox']
  const randomAdjIndex = Math.floor(Math.random() * adjectives.length)
  const randomNounIndex = Math.floor(Math.random() * nouns.length)
  return adjectives[randomAdjIndex] + nouns[randomNounIndex]
}
