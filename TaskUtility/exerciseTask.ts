import { Task } from "./Task";

export class ExerciseTask extends Task {
    constructor(public name: string, public priority: number, public type: string) {
        super(name, priority);
    }

    execute() {
        console.log(`Doing ${this.type} exercise - ${this.name}`);
    }
}