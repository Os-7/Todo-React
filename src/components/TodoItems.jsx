import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TododItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

export default TododItems;
