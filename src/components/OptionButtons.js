import classes from "./OptionButtons.module.css";

const OptionButtons = (props) => {
  const deleteHandler = () => {
    window.location.reload();
  };

  const saveHandler = async () => {
    const taskObject = {
      loggedTask: props.task,
      loggedTime: "01:02:36",
    };
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <button className={classes["delete-btn"]} onClick={deleteHandler}>
        Delete Task
      </button>
      <button className={classes["save-btn"]} onClick={saveHandler}>
        Save Task
      </button>
    </div>
  );
};

export default OptionButtons;
