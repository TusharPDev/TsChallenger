export abstract class Task {
  constructor(public name: string, public priority: number) { }

  abstract execute(): void;
}