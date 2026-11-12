type Identifier = string | number;

interface StudyTask {
  id: Identifier;
  title: string;
  note?: string;
  completed: boolean;
}

interface Box<T> {
  value: T;
  map<U>(transform: (value: T) => U): Box<U>;
}

function createBox<T>(value: T): Box<T> {
  return {
    value,
    map<U>(transform) {
      return createBox(transform(value));
    },
  };
}

function formatIdentifier(id: Identifier): string {
  if (typeof id === 'number') {
    return `numeric id ${id}`;
  }

  return `text id ${id.toUpperCase()}`;
}

function describeTask(task: StudyTask): string {
  const note = task.note ?? 'No note added';
  return `${formatIdentifier(task.id)}: ${task.title} - ${note}`;
}

const task: StudyTask = {
  id: 'types-22',
  title: 'Practise generics',
  completed: false,
};

const uppercaseTitle = createBox(task.title).map((title) => title.toUpperCase());

console.log(describeTask(task));
console.log('generic value:', uppercaseTitle.value);
