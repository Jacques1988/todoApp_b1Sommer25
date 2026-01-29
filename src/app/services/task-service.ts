import { Injectable, signal } from '@angular/core';
import { taskList } from '../data/task-list';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList = taskList;
  tasks = signal<Task[]>(taskList);

  getAllTasks() {
    return this.tasks;
  }

  addNewTask(todo: string) {
    const newTask = {
      id: this.taskList.length + 1,
      task: todo,
      status: 'incomplete',
      checked: false,
    };

    this.taskList.push(newTask);
  }

  updateTask(todo: Task) {
    this.taskList = this.taskList.map((task) => {
      if (task.id === todo.id) {
        return todo;
      }
      return task;
    });
  }
}
