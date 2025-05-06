# TypeScript Beginner Exercise: Building a Simple Task Manager

This exercise is designed for beginners to practice the basics of TypeScript, including variables, types, functions, interfaces, and control flow. The goal is to create a simple task manager that allows users to add, complete, and list tasks.

---

## Problem
Create a TypeScript program to manage a list of tasks with the following functionality:
- Define a `Task` interface to represent tasks.
- Create functions to:
  - Add a new task
  - Mark a task as completed
  - List all tasks with their status
- Use arrays to store tasks.
- Implement basic error checking (e.g., no empty task names).

---

## Tasks

1. **Set Up a TypeScript Project**:
   - Create a directory called `task-manager`.
   - Initialize a Node.js project (`npm init -y`).
   - Install TypeScript (`npm install --save-dev typescript`).
   - Create a `src` folder and a file `index.ts`.

2. **Define the Task Interface**:
   - Create an interface called `Task` with:
     - `id`: number (unique identifier)
     - `name`: string (task description)
     - `completed`: boolean (whether the task is done)

3. **Initialize the Task List**:
   - Create a global array to store tasks, typed to hold only `Task` objects.

4. **Create the `addTask` Function**:
   - Write a function to add a new task.
   - Parameters: `name` (string)
   - Return: The new `Task` object
   - Features:
     - Generate a unique `id` (e.g., use array length)
     - Prevent empty task names (throw an error or log a message)
     - Set `completed` to `false` by default

5. **Create the `completeTask` Function**:
   - Write a function to mark a task as completed by its `id`.
   - Parameters: `id` (number)
   - Return: `void`
   - Features:
     - Find the task by `id`
     - Set `completed` to `true`
     - Handle cases where the task is not found (log or throw error)

6. **Create the `listTasks` Function**:
   - Write a function to display all tasks.
   - Parameters: None
   - Return: `void`
   - Features:
     - Loop through the tasks array
     - Print each task’s `id`, `name`, and `completed` status
     - Format output clearly (e.g., "ID: 1, Name: Buy groceries, Completed: false")

7. **Test the Task Manager**:
   - Add sample code to test the functions (e.g., add tasks, complete one, list tasks, test error cases).
   - Compile the code (`npx tsc`) and run it (`node dist/index.js`).

---

## Bonus Challenges (Optional)
1. Create a `listPendingTasks` function to show only tasks where `completed` is `false`.
2. Use an `enum TaskStatus { Pending, Completed }` instead of `boolean` for `completed`.
3. Remove explicit type annotations where TypeScript can infer types.
4. Prevent duplicate task names in `addTask`.