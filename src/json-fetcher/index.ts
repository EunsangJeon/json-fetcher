import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'http://jsonplaceholder.typicode.com/todos/1';

function printJson(url: string) {
  axios.get(url).then((res) => {
    const todo = res.data as Todo;
    logTodo(todo);
  });
}

const logTodo = ({ id, title, completed }: Todo) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

printJson(url);
