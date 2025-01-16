import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      isDone: false,
      isImportant: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      isDone: false,
      isImportant: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        isDone: false,
        isImportant: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTaskImportant: (state, action) => {
      const taskId = action.payload;
      const task = state.todos.find((task) => task.id === taskId);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTaskImportant } = todoSlice.actions;

export default todoSlice.reducer;
