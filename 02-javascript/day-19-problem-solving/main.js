function reverseString(value) {
  return [...value].reverse().join('');
}

function countVowels(value) {
  return (value.match(/[aeiou]/gi) || []).length;
}

function isPalindrome(value) {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === reverseString(normalized);
}

function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new Error('findLargest requires at least one number');
  }

  return numbers.reduce((largest, number) => Math.max(largest, number));
}

function removeDuplicates(values) {
  return [...new Set(values)];
}

function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function groupByFirstLetter(words) {
  return words.reduce((groups, word) => {
    const key = word[0].toLowerCase();
    groups[key] ||= [];
    groups[key].push(word);
    return groups;
  }, {});
}

function countFrequencies(values) {
  return values.reduce((frequencies, value) => {
    frequencies[value] = (frequencies[value] || 0) + 1;
    return frequencies;
  }, {});
}

function firstRepeated(values) {
  const seen = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
  }

  return undefined;
}

const examples = {
  reverseString: reverseString('JavaScript'),
  countVowels: countVowels('Problem solving'),
  isPalindrome: isPalindrome('Never odd or even'),
  findLargest: findLargest([12, 4, 38, 9]),
  removeDuplicates: removeDuplicates([1, 2, 1, 3, 2]),
  sum: sum([4, 8, 15, 16, 23, 42]),
  capitalizeWords: capitalizeWords('learn by solving'),
  groupByFirstLetter: groupByFirstLetter(['apple', 'apricot', 'banana']),
  countFrequencies: countFrequencies(['js', 'ts', 'js']),
  firstRepeated: firstRepeated(['a', 'b', 'c', 'b']),
};

console.table(examples);

module.exports = {
  reverseString,
  countVowels,
  isPalindrome,
  findLargest,
  removeDuplicates,
  sum,
  capitalizeWords,
  groupByFirstLetter,
  countFrequencies,
  firstRepeated,
};
