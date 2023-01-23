
let sentence = 'I think i have a dog and he is not that bad, i like it'
let wordNot = sentence.indexOf('not');
console.log(wordNot)

let wordBad = sentence.indexOf('bad')
console.log(wordBad)

if (wordBad > wordNot) {
    sentence = sentence.replace('not that bad', 'good');
    console.log(sentence)
}
