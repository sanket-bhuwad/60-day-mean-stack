// Lexical scope: an inner function can read variables from its outer scope.
const lessonName = 'closures';

function describeScope() {
  const topic = 'lexical scope';

  function readOuterScope() {
    return `${lessonName} use ${topic}`;
  }

  return readOuterScope();
}

function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      count += 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

function demonstrateHoisting() {
  return {
    functionDeclaration: hoistedFunction(),
    varBeforeDeclaration: typeof hoistedValue,
  };

  function hoistedFunction() {
    return 'function declarations are hoisted';
  }

  var hoistedValue = 'assigned later';
}

const person = {
  name: 'Ada',
  regularMethod() {
    return `regular method: ${this.name}`;
  },
  arrowMethod: () => 'arrow method: this comes from the surrounding scope',
};

const boundMethod = person.regularMethod.bind(person);
const counter = createCounter(2);

console.log(describeScope());
console.log('closure counter:', counter.increment(), counter.increment());
console.log('private value:', counter.value());
console.log('hoisting:', demonstrateHoisting());
console.log(person.regularMethod());
console.log(person.arrowMethod());
console.log(boundMethod());
