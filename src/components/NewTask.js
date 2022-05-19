import classes from "./NewTask.module.css";

const NewTask = () => {
    return (
        <div className={classes.container}>
            <input className={classes.input} placeholder='What are you about to do?'></input>
            <button className={classes.btn}>></button>
        </div>
    )
}

export default NewTask;