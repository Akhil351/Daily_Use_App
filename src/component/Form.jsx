import { useState } from "react";
import styles from './form.module.css'
function Form({ toDos, setToDos }) {
    const [toDo, setToDO] = useState({
        name:"",
        done:false,
    })
    const handleSubmit = (e) => {
        e.preventDefault();// to stop the refresh
        setToDos([...toDos, toDo])
        setToDO({name:""})

    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <input className={styles.Input} value={toDo.name} onChange={(e) => setToDO({name:e.target.value,done:false})} type="text" />
                <button className={styles.Button} type="submit">Add</button>
            </div>
            
        </form>
    )
}
export default Form;