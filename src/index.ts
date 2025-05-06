enum TaskStatus {
  Pending,
  Completed,
}

interface Task {
  id: number;
  name: string;
  completed: TaskStatus;
}

const taskList: Task[] = [];

const addTask = (name: string): Task | undefined => {
  const isEmpty = name.trim() === "";

  if (isEmpty) throw new Error("name shouldnt be empty");
  //   const isNotDuplicated = taskList.every((task) => task.name != name);
  const isDuplicated = taskList.some((task) => task.name == name);

  if (isDuplicated) throw new Error("name is Duplicated!");
  const task = {
    id: taskList.length + 1,
    name,
    completed: TaskStatus.Pending,
  };

  taskList.push(task);
  return task;
};

const completeTask = (id: number): void => {
  const task = taskList.find((task) => task.id === id);

  if (task == undefined) throw new Error("no task found!");

  task.completed = TaskStatus.Completed;
};

const listTasks = (): void => {
  taskList.forEach((task) => {
    console.log(
      `ID: ${task.id}, Name: ${task.name}, Completed: ${task.completed}`,
    );
  });
};

const taskOne = addTask("create function");
const taskTwo = addTask("use Interface") as Task;
const taskThree = addTask("trigger function");
// const taskFour = addTask("create function");

addTask("no name");

completeTask(taskTwo.id);

// bonus Challenges

const listPendingTasks = (): void => {
  taskList.forEach(
    (task) =>
      task.completed == TaskStatus.Pending &&
      console.log(`ID: ${task.id}, Name: ${task.name}, Completed: Pending`),
  );
};

listPendingTasks();
