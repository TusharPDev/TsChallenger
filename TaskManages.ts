export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High"
}

export class Task {
  static totalTasks: number = 0;

  constructor(public name: string, public priority: Priority) {
      Task.totalTasks++;
  }

  static showTotalTasks(): void {
      console.log(`Total Tasks: ${Task.totalTasks}`);
  }

  static clearTotalTasks(): void {
      Task.totalTasks = 0;
  }
}

export class TaskManager {
  private tasks: Task[] = [];

  addTask(name: string, priority: Priority): void {
      const newTask = new Task(name, priority);
      this.tasks.push(newTask);
  }

  viewTasks(): void {
      if (this.tasks.length === 0) {
          console.log("No tasks available.");
      } else {
          console.log("Tasks:");
          this.tasks.forEach(task => {
              console.log(`${task.name} - Priority: ${task.priority}`);
          });
      }
  }

 prioritizeTasks(): void {
      this.tasks.sort((a, b) => {
          if (a.priority === b.priority) {
              return 0;
          } else if (a.priority === Priority.HIGH) {
              return -1;
          } else if (b.priority === Priority.HIGH) {
              return 1;
          } else if (a.priority === Priority.MEDIUM) {
              return -1;
          } else {
              return 1;
          }
      });
  }
}
