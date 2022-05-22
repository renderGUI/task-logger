import classes from "./OptionButtons.module.css";

const OptionButtons = () => {
    const deleteHandler = () => {
        window.location.reload();
    }
    return (
        <div className={classes.container}>
        <button className={classes['delete-btn']} onClick={deleteHandler}>Delete Task</button>
        <button className={classes['save-btn']}>Save Task</button>
        </div>
    )
}

export default OptionButtons;