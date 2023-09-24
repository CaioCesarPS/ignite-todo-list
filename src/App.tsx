import { Header } from './components/Header/Header';
import styles from './App.module.css';
import { PlusCircle } from '@phosphor-icons/react';
import './global.css';
import { EmptyList } from './components/EmptyList/EmptyList';
import { ListItem } from './components/ListItem/ListItem';
import { ChangeEvent, FormEvent, useState } from 'react';

interface listTodoItemsProps {
  id: string;
  content: string;
  isDone: boolean;
}

const listTodoItems: listTodoItemsProps[] = [
  {
    id: crypto.randomUUID(),
    content: 'lorem ipsum dolor sit amet',
    isDone: false,
  },
];

export function App() {
  const [listTodo, setListTodo] = useState<listTodoItemsProps[]>(listTodoItems);
  const [newTaskText, setNewTaskText] = useState('');

  function handleDeleteTask(taskId: string) {
    const newList = listTodo.filter((item) => item.id !== taskId);
    setListTodo(newList);
  }

  function handleTypeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
    console.log('handleTypeNewTaskTest', event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      content: newTaskText,
      isDone: false,
    };
    setListTodo([...listTodo, newTask]);
    setNewTaskText('');
  }

  function selectTask(taskId: string) {
    const newTasksArray = listTodo.map((task) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });
    setListTodo(newTasksArray);
  }

  const completedTasks = listTodo.filter((item) => item.isDone);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inputField}>
          <input
            type="text"
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
            id="newTask"
            required
            onChange={handleTypeNewTaskText}
          />
          <button className={styles.button} onClick={handleAddNewTask}>
            Criar
            <PlusCircle size={24} weight="bold" />
          </button>
        </div>
        <div className={styles.container}>
          <header className={styles.taskHeader}>
            <div className={styles.createdTasks}>
              <h3>Tarefas criadas</h3>
              <span>{listTodo.length}</span>
            </div>

            <div className={styles.completedTasks}>
              <h3>Concluídas</h3>
              <span>{`${completedTasks.length} de ${listTodo.length}`}</span>
            </div>
          </header>

          <div>
            {listTodo.length ? (
              listTodo.map((item) => (
                <ListItem
                  key={item.id}
                  taskId={item.id}
                  content={item.content}
                  isDone={item.isDone}
                  onDelete={handleDeleteTask}
                  onSelect={selectTask}
                />
              ))
            ) : (
              <EmptyList />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
