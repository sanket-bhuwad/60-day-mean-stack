export class Task {
  public completed = false;

  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly category: string,
  ) {}

  toggle(): void {
    this.completed = !this.completed;
  }
}
