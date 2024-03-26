import { Task } from "./Task";
import { MeditationTask } from "./meditationTask";
import { ExerciseTask } from "./exerciseTask";

// Utility function to prioritize tasks based on priority
export function prioritizeTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.priority - b.priority);
}