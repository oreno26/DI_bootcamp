function anagramCheck(wordOne, wordTwo) {
        let wordOneSorted = wordOne.toLowerCase().split("").sort().join(``).trim();
        let wordTwoSorted = wordTwo.toLowerCase().split("").sort().join(``).trim();
        wordOneSorted === wordTwoSorted ? console.log('is an anagram') : console.log('not an anagram'); 
}
anagramCheck(prompt(`first word for comparison`), prompt(`second word for comparison`))