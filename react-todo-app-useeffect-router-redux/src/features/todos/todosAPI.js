export const getTodosAPI = function () {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
}

export const addTodoAPI = function () {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
}