import classes from "./NewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "./Stopwatch";

const NewTask = () => {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type='text'
        placeholder="What are you about to do?"
      ></input>
      <Stopwatch />
      <button className={classes.btn}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default NewTask;
