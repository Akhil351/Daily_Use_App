import styles from './footer.module.css'
function Footer({completeTodos,totalTodos}){

return(
    <div className={styles.footer}>
    <span className={styles.item} >completeTodos:{completeTodos}</span>
    <span >TotalTodos:{totalTodos}</span>
    </div>
)
}
export default Footer;