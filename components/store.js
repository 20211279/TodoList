import create from 'zustand';

const useStore = create(set => ({
  todos: [],
  addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
  deleteTodo: id => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  editTodo: editedTodo => set(state => ({
    todos: state.todos.map(todo => todo.id === editedTodo.id ? editedTodo : todo)
  }))
}));

export default useStore;
