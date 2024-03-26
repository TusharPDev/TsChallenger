import { Task } from "./Task";

export class MeditationTask extends Task {
  constructor(public name: string, public priority: number, public duration: number) {
    super(name, priority);
  }

  execute() {
    console.log(`Meditating for ${this.duration} minutes - ${this.name}`);
  }
}