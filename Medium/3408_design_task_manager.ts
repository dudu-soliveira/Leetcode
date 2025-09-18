// https://leetcode.com/problems/design-task-manager/

interface Task {
  userId: number;
  taskId: number;
  priority: number;
}

function compareFn(a: Task, b: Task): number {
  return b.priority - a.priority || (a.taskId > b.taskId ? -1 : 1);
}

class TaskManager {
  private taskMap: Map<number, Task>;
  private taskRanking: PriorityQueue<Task>;

  constructor(tasks: number[][]) {
    this.taskMap = new Map();
    this.taskRanking = new PriorityQueue(compareFn);

    for (const t of tasks) {
      const taskId = t[1];
      const task: Task = { userId: t[0], taskId, priority: t[2] };
      this.taskMap.set(taskId, task);
      this.taskRanking.enqueue(task);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    const task: Task = { userId, taskId, priority };
    this.taskMap.set(taskId, task);
    this.taskRanking.enqueue(task);
  }

  edit(taskId: number, newPriority: number): void {
    const userId = this.taskMap.get(taskId)!.userId;
    const task: Task = { userId, taskId, priority: newPriority };
    this.taskMap.set(taskId, task);
    this.taskRanking.enqueue(task);
  }

  rmv(taskId: number): void {
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    let topTask: Task | null;

    do {
      topTask = this.taskRanking.front();
      this.taskRanking.dequeue();
    } while (
      topTask !== null &&
      (this.taskMap.get(topTask.taskId) === undefined ||
        topTask.priority !== this.taskMap.get(topTask.taskId)!.priority)
    );

    if (topTask !== null) {
      this.rmv(topTask.taskId);
      return topTask.userId;
    }

    return -1;
  }
}
