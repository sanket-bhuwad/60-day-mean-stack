interface Learner {
  id: number;
  name: string;
  completedDays: number[];
  active: boolean;
}

type ProgressLabel = 'starting' | 'in progress' | 'complete';
type ProgressCalculator = (learner: Learner, totalDays: number) => number;

const learner: Learner = {
  id: 21,
  name: 'Sanket',
  completedDays: [18, 19, 20],
  active: true,
};

const progressCalculator: ProgressCalculator = (person, totalDays) =>
  Math.round((person.completedDays.length / totalDays) * 100);

const progressPercentage = progressCalculator(learner, 60);
const progressLabel: ProgressLabel =
  progressPercentage === 100
    ? 'complete'
    : progressPercentage > 0
      ? 'in progress'
      : 'starting';

console.log(`${learner.name}: ${progressPercentage}% (${progressLabel})`);
