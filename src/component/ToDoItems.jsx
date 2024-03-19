import styles from './toDoItems.module.css';

function ToDoItems({ toDos, setToDos }) {
  const handleDelete = (item) => {
    setToDos(toDos.filter((todo) => todo.name !== item));
  };

  const handleClick = (name) => {
    const newArray = toDos.map((toDo) =>
      toDo.name === name ? { ...toDo, done: !toDo.done } : toDo
    );
    setToDos(newArray);
    console.log(toDos);
  };

  return (
    <div className={styles.list}>
      {toDos.map((item) => (
        <div className={styles.items} key={item.name}>
          <h3 className={styles.itemName}>
            <span className={item.done?styles.complete:""} onClick={() => handleClick(item.name)}>{item.name}</span>
            <span>
              <button
                onClick={() => handleDelete(item.name)}
                className={styles.deleteButton}
              >
                X
              </button>
            </span>
          </h3>

          <hr className={styles.line} />
        </div>
      ))}
    </div>
  );
}

export default ToDoItems;
