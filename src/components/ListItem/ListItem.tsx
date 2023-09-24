import { Check, Trash } from '@phosphor-icons/react';
import styles from './ListItem.module.css';

export interface IListItemProps {
  content: string;
  taskId: string;
  isDone: boolean;
  onDelete: (taskId: string) => void;
  onSelect: (taskId: string) => void;
}

export function ListItem({
  content,
  isDone,
  onDelete,
  onSelect,
  taskId,
}: IListItemProps) {
  function handleSelectTask() {
    console.log(isDone)
    onSelect(taskId);
  }

  function handleDeleteTask() {
    onDelete(taskId);
  }

  return (
    <div className={styles.listItem}>
      <button
        id="toggle"
        className={
          isDone ? styles.listItemToggleSelected : styles.listItemToggle
        }
        onClick={handleSelectTask}
      >
        {isDone ? <Check size={24}></Check> : null}
      </button>
      <p className={isDone ? styles.listItemTextSelected : styles.listItemText}>
        {content}
      </p>
      <button
        id="trash"
        className={styles.listItemDeleteButton}
        onClick={handleDeleteTask}
      >
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}
