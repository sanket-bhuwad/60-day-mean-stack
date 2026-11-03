const inputs = [
  '{"name":"Sanket","scores":[82,91,88]}',
  '{"name":"Incomplete","scores":[]}',
  '{"name":"Broken","scores":[90,}',
];

function parseStudent(input) {
  const student = JSON.parse(input);

  if (
    typeof student.name !== 'string' ||
    !Array.isArray(student.scores) ||
    student.scores.length === 0
  ) {
    throw new Error('Student must have a name and at least one score.');
  }

  return student;
}

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

for (const input of inputs) {
  try {
    const student = parseStudent(input);
    const average = calculateAverage(student.scores);

    // Add a breakpoint here to inspect student and average in DevTools.
    debugger;

    console.table([
      {
        name: student.name,
        scores: student.scores.join(', '),
        average: average.toFixed(2),
      },
    ]);
  } catch (error) {
    console.error(`Could not process student: ${error.message}`);
  } finally {
    console.log('Finished processing input.\n');
  }
}
