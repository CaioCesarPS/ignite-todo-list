import styles from './EmptyList.module.css';
import clipboardIcon from '../../assets/clipboard.svg';

export function EmptyList() {
  return (
    <div className={styles.emptyListContainer}>
      <div className={styles.emptyList}>
        <img src={clipboardIcon} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
